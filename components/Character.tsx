
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshWobbleMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Agent } from '../types';
import { COLORS } from '../constants';

interface CharacterProps {
  agent: Agent;
}

const Character: React.FC<CharacterProps> = ({ agent }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + Number(agent.id)) * 0.1;
      // Soft rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group 
      position={agent.position} 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Body */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.8, 16]} />
        <meshStandardMaterial 
          color={agent.color === COLORS.NEON_GREEN ? '#111' : agent.color} 
          roughness={0.05} 
          metalness={0.9}
          emissive={agent.color}
          emissiveIntensity={hovered ? 0.8 : 0.2}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.1, 1.05, 0.2]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.1, 1.05, 0.2]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Hat/Accessory based on type */}
      {agent.type === 'Claude' && (
        <mesh position={[0, 1.25, 0]}>
          <coneGeometry args={[0.25, 0.4, 16]} />
          <meshStandardMaterial color={agent.color} emissive={agent.color} emissiveIntensity={1} />
        </mesh>
      )}

      {/* Name Label */}
      <Html position={[0, 1.6, 0]} center distanceFactor={10}>
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold select-none transition-all duration-300 border backdrop-blur-md ${
          hovered ? 'bg-[#ccff00] text-black border-[#ccff00] scale-110 shadow-[0_0_15px_rgba(204,255,0,0.5)]' : 'bg-black/60 text-white border-white/10'
        }`}>
          {agent.name}
        </div>
      </Html>

      {/* Base shadow/circle */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[0.6, 32]} />
        <meshBasicMaterial color={agent.color} transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

export default Character;
