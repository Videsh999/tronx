"use client";

import { Canvas } from "@react-three/fiber";
import { AICore } from "./AICore";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Post processing bloom can be added here if needed */}
          <AICore />
          <Environment preset="city" />
          
          {/* Allow limited mouse interaction without breaking scroll */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.2}
            minPolarAngle={Math.PI / 2 - 0.2}
            maxAzimuthAngle={0.2}
            minAzimuthAngle={-0.2}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
