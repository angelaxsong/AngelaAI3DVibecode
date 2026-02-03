
import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Grid, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows, 
  Stars,
  Float
} from '@react-three/drei';
import Character from './Character';
import Zone from './Zone';
import { INITIAL_AGENTS, INITIAL_ZONES, COLORS } from '../constants';

const SimulationScene: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#050505]">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }} onCreated={({ gl }) => gl.setClearColor('#050505')}>
        {/* Cinematic Isometric Camera */}
        <PerspectiveCamera makeDefault position={[12, 12, 12]} fov={35} />
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          maxPolarAngle={Math.PI / 2.1} 
          minDistance={10}
          maxDistance={30}
        />

        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={COLORS.NEON_GREEN} castShadow />
        <spotLight position={[-10, 15, 10]} angle={0.3} penumbra={1} intensity={2.5} color={COLORS.NEON_GREEN} castShadow />

        {/* Floor Grid */}
        <Grid 
          infiniteGrid 
          fadeDistance={40} 
          fadeStrength={8} 
          cellSize={1} 
          sectionSize={5} 
          sectionThickness={1.5}
          sectionColor={COLORS.GRID}
          cellColor="#0c1400"
        />

        {/* Scene Elements */}
        {INITIAL_AGENTS.map((agent) => (
          <Character key={agent.id} agent={agent} />
        ))}

        {INITIAL_ZONES.map((zone) => (
          <Zone key={zone.id} zone={zone} />
        ))}

        {/* Signboard / Logo */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, 4, -8]} rotation={[0, Math.PI / 4, 0]}>
             <mesh>
               <boxGeometry args={[6, 1.5, 0.3]} />
               <meshStandardMaterial color="#000" metalness={1} roughness={0} />
             </mesh>
             <mesh position={[0, 0, 0.16]}>
               <planeGeometry args={[5.8, 1.3]} />
               <meshStandardMaterial 
                 color="#000" 
                 emissive={COLORS.NEON_GREEN} 
                 emissiveIntensity={1.5} 
               />
             </mesh>
          </group>
        </Float>

        {/* Ambient Effects */}
        <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={0.5} />
        <ContactShadows opacity={0.6} scale={20} blur={2.5} far={4.5} color={COLORS.NEON_GREEN} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default SimulationScene;
