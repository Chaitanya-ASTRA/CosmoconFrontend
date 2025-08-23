import  { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles, Preload, AdaptiveDpr} from '@react-three/drei';
import * as THREE from 'three';

function ParallaxRig() {
  const { camera, mouse } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame(() => {
    target.current.set(mouse.x * 0.1, mouse.y * 0.05, camera.position.z);
    camera.position.lerp(target.current, 0.01);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function RotatingSpace() {
  const rotatingRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (rotatingRef.current) rotatingRef.current.rotation.y += delta * 0.005;
  });

  const starProps = useMemo(() => ({ radius: 280, depth: 80, count: 16000, factor: 6, saturation: 0 }), []);

  return (
    <group ref={rotatingRef}>
      <ParallaxRig />
      <Sparkles size={1.8} scale={[40, 40, 40]} speed={0.05} count={1800} opacity={1} />
      <Stars {...starProps} fade />
    </group>
  );
}

const BackgroundBeam = () => {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none" }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0); // transparent black
      }}
    >
      <AdaptiveDpr pixelated={false} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 5]} intensity={1.2} castShadow />
      <pointLight position={[-6, -4, -4]} intensity={0.5} />
      <RotatingSpace />
      <Preload all />
    </Canvas>
  );
};

export default BackgroundBeam;
