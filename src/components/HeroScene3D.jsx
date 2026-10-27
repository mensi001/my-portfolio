import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function CinematicGeometry({ isDark }) {
  const coreRef = useRef();
  const innerRingRef = useRef();
  const middleRingRef = useRef();
  const outerRingRef = useRef();
  const particlesRef = useRef();

  // Mouse parallax interaction
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.25 + y * 0.4;
      coreRef.current.rotation.y = t * 0.35 + x * 0.4;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = -t * 0.3 + y * 0.2;
      innerRingRef.current.rotation.y = t * 0.2;
      innerRingRef.current.rotation.z = t * 0.15;
    }

    if (middleRingRef.current) {
      middleRingRef.current.rotation.x = t * 0.2;
      middleRingRef.current.rotation.y = -t * 0.35;
      middleRingRef.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.cos(t * 0.3) * 0.4;
      outerRingRef.current.rotation.y = t * 0.15;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  const coreColor = isDark ? '#0d1624' : '#f0f9ff';
  const accentCyan = isDark ? '#63d6ff' : '#0284c7';
  const accentGlow = isDark ? '#38bdf8' : '#0ea5e9';
  const ringSecondary = isDark ? '#1e293b' : '#cbd5e1';

  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={isDark ? 0.9 : 1.2} />
      <directionalLight position={[10, 10, 8]} intensity={isDark ? 3.0 : 2.5} color={accentCyan} />
      <directionalLight position={[-10, -10, -5]} intensity={2.0} color={isDark ? '#38bdf8' : '#93c5fd'} />
      <pointLight position={[0, 0, 4]} intensity={isDark ? 2.5 : 1.8} color="#ffffff" />
      <pointLight position={[0, -4, -2]} intensity={1.5} color={accentCyan} />

      {/* Floating Sparkle Particles */}
      <Sparkles
        count={65}
        scale={6}
        size={2.5}
        speed={0.4}
        opacity={isDark ? 0.7 : 0.4}
        color={accentCyan}
      />

      <group ref={particlesRef}>
        {/* Central Morphing Liquid Sphere */}
        <Float speed={2.8} rotationIntensity={1.4} floatIntensity={1.5}>
          <Sphere ref={coreRef} args={[1.25, 64, 64]} scale={1.15}>
            <MeshDistortMaterial
              color={coreColor}
              attach="material"
              distort={0.48}
              speed={2.6}
              roughness={isDark ? 0.15 : 0.1}
              metalness={isDark ? 0.85 : 0.4}
              clearcoat={1}
              clearcoatRoughness={0.08}
            />
          </Sphere>
        </Float>

        {/* Orbiting Gyroscope Ring 1 - Fast Primary Cyan Glowing Ring */}
        <Float speed={1.8} rotationIntensity={1.8} floatIntensity={0.8}>
          <mesh ref={innerRingRef} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.9, 0.038, 20, 100]} />
            <meshStandardMaterial
              color={accentCyan}
              emissive={accentCyan}
              emissiveIntensity={isDark ? 2.2 : 1.2}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>

        {/* Orbiting Gyroscope Ring 2 - Perpendicular Secondary Ring */}
        <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.0}>
          <mesh ref={middleRingRef} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.35, 0.026, 16, 100]} />
            <meshStandardMaterial
              color={accentGlow}
              emissive={accentGlow}
              emissiveIntensity={isDark ? 1.6 : 0.8}
              roughness={0.15}
            />
          </mesh>
        </Float>

        {/* Outer Orbit Halo Ring */}
        <Float speed={1.0} rotationIntensity={0.8} floatIntensity={0.6}>
          <mesh ref={outerRingRef} rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
            <torusGeometry args={[2.75, 0.018, 16, 120]} />
            <meshStandardMaterial
              color={ringSecondary}
              emissive={isDark ? '#63d6ff' : '#0284c7'}
              emissiveIntensity={isDark ? 0.6 : 0.3}
              roughness={0.3}
            />
          </mesh>
        </Float>

        {/* Orbiting Satellite Node 1 */}
        <Float speed={3.0} rotationIntensity={2} floatIntensity={1.8}>
          <mesh position={[2.0, 1.2, 0.5]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial
              color={accentCyan}
              emissive={accentCyan}
              emissiveIntensity={3}
            />
          </mesh>
        </Float>

        {/* Orbiting Satellite Node 2 */}
        <Float speed={2.4} rotationIntensity={1.5} floatIntensity={1.4}>
          <mesh position={[-1.8, -1.3, -0.6]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial
              color={accentGlow}
              emissive={accentGlow}
              emissiveIntensity={2.5}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}

export default function HeroScene3D() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[520px] relative pointer-events-auto flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <CinematicGeometry isDark={isDark} />
      </Canvas>
    </div>
  );
}
