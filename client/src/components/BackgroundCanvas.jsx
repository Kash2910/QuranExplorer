import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function BackgroundCanvas({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Common lighting for the scene */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Suspense fallback={null}>
          {/* The stars background */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />

          {children}
        </Suspense>

        {/* Common camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
