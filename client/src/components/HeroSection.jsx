import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import "../assets/LandingPage.css";

function QuranModel(props) {
  const { scene } = useGLTF("/al_quran.glb");
  return <primitive object={scene} scale={2} {...props} />;
}

export default function HeroSection() {
  return (
    <div className="landing-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <QuranModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Left text */}
      <motion.h1
        className="left-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
        Quran
      </motion.h1>

      {/* Right text */}
      <motion.h1
        className="right-title"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
        Explorer
      </motion.h1>

      <motion.h2
        className="tagline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
      >
        ✨ Start Your Journey ✨
      </motion.h2>

      <motion.p
        className="subtext"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 2.3 }}
      >
        Dive into the Quran with ease and beauty.
      </motion.p>
    </div>
  );
}
