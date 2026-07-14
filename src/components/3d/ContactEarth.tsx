"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Simplified wireframe globe for the Glowing Earth effect
function Earth() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial 
        color="#3B82F6" 
        wireframe={true} 
        transparent 
        opacity={0.15} 
      />
      {/* Location Marker Simulation (New York, London, etc.) */}
      <mesh position={[1.5, 1, 1]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#06B6D4" />
      </mesh>
      <mesh position={[-1, 1.2, -1.5]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#7C3AED" />
      </mesh>
    </mesh>
  );
}

export function ContactEarth() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Earth />
    </Canvas>
  );
}
