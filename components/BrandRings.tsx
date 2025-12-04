import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const SingleRing = ({ 
  color, 
  radius = 2.0, 
  thickness = 0.2, 
  count = 800, 
  particleSize = 0.03,
  rotationSpeed = { x: 0, y: 0, z: 0 }, 
  initialRotation = [0, 0, 0],
  opacity = 0.6
}: any) => {
  const ref = useRef<any>();
  
  const speedOffset = useMemo(() => Math.random() * 2000, []);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      const spread = thickness; 
      const theta = Math.random() * Math.PI * 2;
      const rOffset = (Math.random() - 0.5) * spread;
      const zOffset = (Math.random() - 0.5) * spread;
      
      let x = (radius + rOffset) * Math.cos(theta);
      let y = (radius + rOffset) * Math.sin(theta);
      let z = zOffset;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [color, radius, thickness, count]);

  useFrame((state, delta) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      const speedMultiplier = 1.0 + Math.sin(time * 0.5 + speedOffset) * 0.3;

      ref.current.rotation.x += delta * rotationSpeed.x * speedMultiplier;
      ref.current.rotation.y += delta * rotationSpeed.y * speedMultiplier;
      ref.current.rotation.z += delta * rotationSpeed.z * speedMultiplier;
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
          opacity={opacity}
        />
      </Points>
    </group>
  );
};

const RingsGroup = ({ scale = 1 }) => {
    const groupRef = useRef<any>();
    
    useFrame((state) => {
        if (groupRef.current) {
             const time = state.clock.getElapsedTime();
             const s = scale + Math.sin(time * 0.3) * 0.05;
             groupRef.current.scale.set(s, s, s);
             groupRef.current.rotation.y = time * 0.05;
        }
    })

    return (
        <group ref={groupRef}>
            {/* Ring 1 - Neon Green */}
            <SingleRing 
                color="#009849" 
                radius={2.0}
                thickness={0.4}
                count={800}
                particleSize={0.04}
                initialRotation={[0, 0, 0]}
                rotationSpeed={{ x: 0.02, y: 0.02, z: 0.1 }} 
            />
            
            {/* Ring 2 - Neon Pink */}
            <SingleRing 
                color="#ff0077" 
                radius={2.0}
                thickness={0.4}
                count={800}
                particleSize={0.04}
                initialRotation={[Math.PI / 3, 0, 0]}
                rotationSpeed={{ x: 0.02, y: -0.02, z: 0.08 }} 
            />
            
            {/* Ring 3 - White */}
            <SingleRing 
                color="#ffffff" 
                radius={2.0}
                thickness={0.4}
                count={800}
                particleSize={0.04}
                initialRotation={[-Math.PI / 3, 0, 0]}
                rotationSpeed={{ x: -0.02, y: 0.02, z: 0.05 }} 
            />
        </group>
    )
}

interface BrandRingsProps {
    className?: string;
    scale?: number;
}

const BrandRings: React.FC<BrandRingsProps> = ({ className = "w-full h-full", scale = 1 }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <RingsGroup scale={scale} />
        </Float>
      </Canvas>
    </div>
  );
};

export default BrandRings;
