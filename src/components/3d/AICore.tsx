"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

export function AICore() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(t / 4);
      sphereRef.current.rotation.y = Math.sin(t / 2);
    }
    
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.2;
      outerRingRef.current.rotation.y = t * 0.3;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = -t * 0.3;
      innerRingRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group>
      {/* Background Stars / Particles */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={15} size={2} speed={0.4} color="#3B82F6" />

      {/* Main AI Core Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={sphereRef} scale={1.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#050505"
            emissive="#06B6D4"
            emissiveIntensity={0.5}
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>

        {/* Inner Solid Core */}
        <mesh scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#050505"
            emissive="#3B82F6"
            emissiveIntensity={2}
            roughness={0.2}
            metalness={1}
          />
        </mesh>
      </Float>

      {/* Holographic Rings (Positioned strictly behind the sphere) */}
      <mesh ref={outerRingRef} position={[0, 0, -1.5]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={innerRingRef} position={[0, 0, -1]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.5} />
      </mesh>

      {/* Dynamic Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#7C3AED" />
    </group>
  );
}
