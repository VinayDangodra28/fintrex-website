import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, RoundedBox, Environment, Center } from '@react-three/drei';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import * as THREE from 'three';

const SingleRing = ({ 
  color, 
  radius = 2.0, 
  thickness = 0.2, 
  count = 1500, 
  particleSize = 0.03,
  rotationSpeed = { x: 0, y: 0, z: 0 }, 
  initialRotation = [0, 0, 0] 
}: any) => {
  const ref = useRef<any>();
  
  // Random offset so each ring accelerates/decelerates independently
  const speedOffset = useMemo(() => Math.random() * 150, []);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      const spread = thickness; 
      const theta = Math.random() * Math.PI * 2;
      const rOffset = (Math.random() - 0.5) * spread;
      const zOffset = (Math.random() - 0.5) * spread;
      
      // Create ring in XY plane
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
      // Smoothly vary speed multiplier between ~0.5 and ~2.5
      const speedMultiplier = 1.5 + Math.sin(time * 0.5 + speedOffset) * 0.5 + Math.cos(time * 0.2 + speedOffset) * 0.5;

      // Apply rotation
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
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const ParticleRings = () => {
  const groupRef = useRef<any>();
  
  useFrame((state, delta) => {
      if (groupRef.current) {
           const time = state.clock.getElapsedTime();
           const scale = 1 + Math.sin(time * 0.5) * 0.02;
           groupRef.current.scale.set(scale, scale, scale);
      }
  })

  return (
    <group ref={groupRef}>
      {/* Ring 1 - Neon Green (Brand) - Flat-ish, spinning Z */}
      <SingleRing 
        color="#009849" 
        radius={2.0}
        thickness={0.4}
        count={1000}
        particleSize={0.05}
        initialRotation={[0, 0, 0]}
        rotationSpeed={{ x: 0.05, y: 0.05, z: 0.2 }} 
      />
      
      {/* Ring 2 - Neon Pink (Opposite) - Tilted 60 deg X */}
      <SingleRing 
        color="#ff0077" 
        radius={2.0}
        thickness={0.4}
        count={1000}
        particleSize={0.05}
        initialRotation={[Math.PI / 3, 0, 0]}
        rotationSpeed={{ x: 0.05, y: -0.05, z: 0.15 }} 
      />
      
      {/* Ring 3 - White - Tilted -60 deg X */}
      <SingleRing 
        color="#ffffff" 
        radius={2.0}
        thickness={0.4}
        count={1000}
        particleSize={0.05}
        initialRotation={[-Math.PI / 3, 0, 0]}
        rotationSpeed={{ x: -0.05, y: 0.05, z: 0.1 }} 
      />
      
    </group>
  );
};

const BackgroundStars = () => {
    const count = 200;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for(let i=0; i<count; i++) {
            // Spread them wide to fill negative space gently
            pos[i*3] = (Math.random() - 0.5) * 15;
            pos[i*3+1] = (Math.random() - 0.5) * 15;
            pos[i*3+2] = (Math.random() - 0.5) * 10 - 5; // Push them back a bit
        }
        return pos;
    }, []);

    const ref = useRef<any>();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z -= delta * 0.02; // Slow rotation of the background
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial transparent color="#004422" size={0.04} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
        </Points>
    )
}

const IconInvoice = ({ color }: { color: string }) => (
  <group>
    {/* Paper */}
    <RoundedBox args={[0.7, 0.9, 0.05]} radius={0.02} smoothness={4}>
      <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
    </RoundedBox>
    {/* Lines */}
    <mesh position={[0, 0.2, 0.04]}>
      <boxGeometry args={[0.5, 0.08, 0.02]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
    <mesh position={[0, 0, 0.04]}>
      <boxGeometry args={[0.5, 0.08, 0.02]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
    <mesh position={[0, -0.2, 0.04]}>
      <boxGeometry args={[0.5, 0.08, 0.02]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
  </group>
)

const IconChart = ({ color }: { color: string }) => (
  <group position={[0, -0.3, 0]}>
    <mesh position={[-0.25, 0, 0]}>
      <boxGeometry args={[0.15, 0.4, 0.15]} />
      <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
    </mesh>
    <mesh position={[0, 0.15, 0]}>
      <boxGeometry args={[0.15, 0.7, 0.15]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
    <mesh position={[0.25, 0.3, 0]}>
      <boxGeometry args={[0.15, 1.0, 0.15]} />
      <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
    </mesh>
  </group>
)

const IconRupee = ({ color }: { color: string }) => {
  const shapes = useMemo(() => {
    const pathData = "M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z";
    const loader = new SVGLoader();
    const data = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="${pathData}"/></svg>`);
    const paths = data.paths;
    const shapes: THREE.Shape[] = [];
    paths.forEach((p) => {
        shapes.push(...p.toShapes(true));
    });
    return shapes;
  }, []);

  return (
    <Center>
        <mesh rotation={[Math.PI, 0, 0]} scale={0.12}> 
            <extrudeGeometry args={[shapes, { depth: 1, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1, bevelSegments: 4 }]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
        </mesh>
    </Center>
  )
}

const IconPercent = ({ color }: { color: string }) => (
    <group>
        <mesh position={[-0.2, 0.2, 0]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh position={[0.2, -0.2, 0]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.1, 0.8, 0.1]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
        </mesh>
    </group>
)

const IconSafe = ({ color }: { color: string }) => (
    <group>
        <mesh position={[0, -0.1, 0]}>
            <boxGeometry args={[0.5, 0.4, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
            <torusGeometry args={[0.15, 0.05, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
        </mesh>
    </group>
)

const ThreeDIcon = ({ type, color, scale = 1 }: { type: string, color: string, scale?: number }) => {
    return (
        <group scale={[scale, scale, scale]}>
            {type === 'rupee' && <IconRupee color={color} />}
            {type === 'invoice' && <IconInvoice color={color} />}
            {type === 'chart' && <IconChart color={color} />}
            {type === 'percent' && <IconPercent color={color} />}
            {type === 'shield' && <IconSafe color={color} />}
        </group>
    )
}

const ParticleIcons = () => {
  const groupRef = useRef<any>();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the whole cluster slowly
      groupRef.current.rotation.y -= delta * 0.15;
    }
  });

  // Defined shapes for the icons
  const symbols = [
    { type: 'rupee', pos: [0, 0, 0], color: "#00ff88", scale: 1.2 }, // Central core - Indian Accounting
    { type: 'invoice', pos: [-0.8, 0.5, 0.5], color: "#00ff88", scale: 0.4 },
    { type: 'chart', pos: [0.8, -0.5, -0.5], color: "#00ff88", scale: 0.4 },
    { type: 'percent', pos: [-0.5, -0.8, -0.5], color: "#00ff88", scale: 0.5 },
    { type: 'shield', pos: [0.5, 0.8, 0.5], color: "#00ff88", scale: 0.5 },
  ];

  return (
    <group ref={groupRef}>
      {symbols.map((s, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1} position={s.pos as [number, number, number]}>
            <ThreeDIcon type={s.type} color={s.color} scale={s.scale} />
        </Float>
      ))}
    </group>
  );
};

const ParticleSphere = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00ff88" />
        <Environment preset="city" />
        {/* Float makes the whole object gently bob up and down */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <ParticleRings />
            <ParticleIcons />
        </Float>
        <BackgroundStars />
      </Canvas>
    </div>
  );
};

export default ParticleSphere;
