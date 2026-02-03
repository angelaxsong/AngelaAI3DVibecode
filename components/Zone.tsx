
import React from 'react';
import { Float, Box, MeshDistortMaterial } from '@react-three/drei';
import { WorkZone } from '../types';

interface ZoneProps {
  zone: WorkZone;
}

const Zone: React.FC<ZoneProps> = ({ zone }) => {
  return (
    <group position={zone.position}>
      {/* Floor Area */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial 
          color={zone.color} 
          transparent 
          opacity={0.08} 
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Border Lines */}
      <mesh position={[0, 0.03, 0]}>
        <Box args={[2.5, 0.02, 2.5]}>
          <meshStandardMaterial color={zone.color} wireframe emissive={zone.color} emissiveIntensity={0.5} />
        </Box>
      </mesh>

      {/* Center Icon/Object */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0.8, 0]}>
          {zone.type === 'App Development' && <octahedronGeometry args={[0.4]} />}
          {zone.type === 'Website Design' && <torusKnotGeometry args={[0.2, 0.08, 64, 8]} />}
          {zone.type === 'Blueprint Archive' && <boxGeometry args={[0.5, 0.5, 0.5]} />}
          <MeshDistortMaterial 
            color={zone.color} 
            speed={2} 
            distort={0.3} 
            metalness={1} 
            roughness={0}
            emissive={zone.color}
            emissiveIntensity={1}
          />
        </mesh>
      </Float>

      {/* Label */}
      <group position={[0, 1.5, 0]}>
         <mesh position={[0,0,0]}>
            <planeGeometry args={[1, 0.4]} />
            <meshBasicMaterial color="black" transparent opacity={0.7} />
         </mesh>
      </group>
    </group>
  );
};

export default Zone;
