import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

/**
 * A reusable component for the starry background canvas.
 * It creates a container with a consistent radial gradient and sets up a
 * Three.js canvas with stars, lighting, and camera controls.
 * It accepts children to render custom 3D models inside the scene.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - 3D elements to render inside the canvas.
 */
export default function BackgroundCanvas({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it's behind other UI elements
        width: "100%",
        height: "100%",
        // The consistent background gradient for all components
        // background: 'radial-gradient(circle at top, #0f172a, #020617 80%)',
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Common lighting for the scene */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Suspense fallback={null}>
          {/* The stars background */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          
          {/* Render any custom models passed as children */}
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
