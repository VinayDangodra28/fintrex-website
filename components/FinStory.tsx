import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentFin } from './ui/BrandAssets';

// Copied exactly from ParticleSphere.tsx to maintain structure
const SingleRing = ({ 
  color, 
  radius = 2.0, 
  thickness = 1, 
  count = 1000, 
  particleSize = 0.03,
  rotationSpeed = { x: 0, y: 0, z: 0 }, 
  initialRotation = [0, 0, 0],
  seed = 0
}: any) => {
  const ref = useRef<any>();
  const boostRef = useRef(0);
  
  // Trigger spin boost when seed/color changes
  useEffect(() => {
    boostRef.current = 15.0;
  }, [seed, color]);
  
  const speedOffset = useMemo(() => Math.random() * 2000, []);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      const spread = thickness; 
      const theta = Math.random() * Math.PI * 2;
      const rOffset = (Math.random() - 0.5) * spread;
      const yOffset = (Math.random() - 0.5) * spread; // Thickness in Y now
      
      // Create ring in XZ plane (Horizontal)
      let x = (radius + rOffset) * Math.cos(theta);
      let z = (radius + rOffset) * Math.sin(theta);
      let y = yOffset;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [color, radius, thickness, count, seed]);

  useFrame((state, delta) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      
      // Decay boost
      boostRef.current = THREE.MathUtils.lerp(boostRef.current, 0, delta * 2);
      
      const speedMultiplier = 1.5 + Math.sin(time * 0.5 + speedOffset) * 0.5 + Math.cos(time * 0.2 + speedOffset) * 0.5;

      // Apply rotation - mostly Y axis (spinning)
      // Add boost to Y rotation
      ref.current.rotation.y += delta * (rotationSpeed.y * speedMultiplier + boostRef.current);
      
      // Gentle wobble on X and Z axes to add life without going vertical
      // Keeps the ring mostly horizontal but dynamic
      ref.current.rotation.x = initialRotation[0] + Math.sin(time * 0.5 + speedOffset) * 0.2; 
      ref.current.rotation.z = initialRotation[2] + Math.cos(time * 0.3 + speedOffset) * 0.15;
      
      // Constant opacity
      ref.current.material.opacity = 1.0;
      ref.current.scale.setScalar(1.0);
    }
  });

  return (
    <group rotation={initialRotation as [number, number, number]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={particleSize}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={1.0}
        />
      </Points>
    </group>
  );
};

const StoryScene = ({ phase }: { phase: number }) => {
  const configs = [
    { color: "#009849" }, // Green
    { color: "#ff0077" }, // Pink
    { color: "#ffffff" }  // White
  ];

  return (
    <group>
      {/* Fin inside the scene */}
      <Html position={[0, 0, 0]} center className="pointer-events-none" zIndexRange={[100, 0]}>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[240px] md:w-[340px] flex items-center justify-center"
        >
          <AgentFin className="w-full h-full drop-shadow-[0_0_30px_rgba(0,255,136,0.2)]" />
        </motion.div>
      </Html>

      {/* Single Ring that changes properties */}
      <SingleRing 
        color={configs[phase].color}
        radius={3.5} 
        thickness={0.9} 
        count={1000}
        particleSize={0.08} 
        initialRotation={[0.2, 0, 0]} // Constant tilt to avoid jumping
        rotationSpeed={{ x: 0, y: 0.1, z: 0 }} // Constant base speed
        seed={phase} // Regenerate particles on phase change
      />
    </group>
  );
};

const FinStory = () => {
  const [phase, setPhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const stories = [
    {
      title: "Core Identity",
      text: "Fin is Stability & Trust",
      subtext: "Your reliable partner for financial success.",
      color: "#009849"
    },
    {
      title: "The Solver",
      text: "Fin is Intelligent & Efficient",
      subtext: "Differentiation through creative automation.",
      color: "#ff0077"
    },
    {
      title: "Neutral Clarity",
      text: "Fin is Clear & Transparent",
      subtext: "Pure data accuracy you can count on.",
      color: "#ffffff"
    }
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      
      {/* Full Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, isMobile ? 16 : 12], fov: 45 }}>
          <ambientLight intensity={1} />
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <StoryScene phase={phase} />
          </Float>
        </Canvas>
      </div>

      {/* Dialogue - Overlay at bottom */}
      <div className="absolute bottom-4 md:bottom-10 left-0 right-0 z-20 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center w-[90%] md:w-auto md:max-w-md mx-auto bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div 
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2"
              style={{ color: stories[phase].color }}
            >
              {stories[phase].title}
            </div>
            <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-1 md:mb-2">
              {stories[phase].text}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              {stories[phase].subtext}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinStory;
