// // App — 3D Space Landing Page (Cosmicon)
// import {useMemo, useRef,useState,useEffect} from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars, Float, Sparkles, Preload, AdaptiveDpr} from "@react-three/drei";
// import { FontLoader,Font } from 'three-stdlib';
// import { TextGeometry } from 'three-stdlib';

// import * as THREE from "three";
// import "./Home.css";



// interface AsteroidTextProps {
//   text?: string;
//   count?: number;
// }

// function AsteroidText({ text = "COSMOCON", count = 300 }: AsteroidTextProps) {
//   const meshRef = useRef<THREE.InstancedMesh | null>(null);
//   const dummy = useMemo(() => new THREE.Object3D(), []);
//   const [targetPositions, setTargetPositions] = useState<THREE.Vector3[]>([]);
//   const [formWord, setFormWord] = useState(false);

//   // Generate target positions from text geometry
//   useEffect(() => {
//     const fontLoader = new FontLoader();
//     fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font:Font) => {
//       const geo = new TextGeometry(text, {
//         font,
//         size: 2,
//         height: 0.2,
//         curveSegments: 8,
//       });
//       geo.center();

//       const pos: THREE.Vector3[] = [];
//       const posAttr = geo.attributes.position as THREE.BufferAttribute;

//       // Sample positions from text geometry
//       const step = Math.max(1, Math.floor(posAttr.count / count));
//       for (let i = 0; i < posAttr.count; i += step) {
//         pos.push(
//           new THREE.Vector3(
//             posAttr.getX(i),
//             posAttr.getY(i),
//             posAttr.getZ(i)
//           )
//         );
//       }
//       setTargetPositions(pos);
//     });

//     // After 3 seconds, trigger word formation
//     const timer = setTimeout(() => setFormWord(true), 3000);
//     return () => clearTimeout(timer);
//   }, [text, count]);

//   // Random start positions
//   const startPositions = useMemo(
//     () =>
//       Array.from({ length: count }, () =>
//         new THREE.Vector3(
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20
//         )
//       ),
//     [count]
//   );

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (!meshRef.current) return;

//     for (let i = 0; i < count; i++) {
//       const start = startPositions[i];

//         dummy.position.set(
//           start.x + Math.sin(t + i) * 2,
//           start.y + Math.cos(t * 0.5 + i) * 2,
//           start.z + Math.sin(t * 0.3 + i) * 2
//         );
//       dummy.scale.set(0.2, 0.2, 0.2);
//       dummy.updateMatrix();
//       meshRef.current.setMatrixAt(i, dummy.matrix);
//     }
//     meshRef.current.instanceMatrix.needsUpdate = true;
//   });

//   return (
//     <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count]}>
//       <dodecahedronGeometry args={[1, 0]} />
//       <meshStandardMaterial color="#cfd9ff" />
//     </instancedMesh>
//   );
// }


// function ParallaxRig() {
//   const { camera, mouse } = useThree();
//   const target = useRef(new THREE.Vector3());
//   useFrame(() => {
//     target.current.set(mouse.x * 0.5, mouse.y * 0.3, camera.position.z);
//     camera.position.lerp(target.current, 0.03);
//     camera.lookAt(0, 0, 0);
//   });
//   return null;
// }

// function Planet() {
//   const planetRef = useRef<THREE.Mesh>(null!);
//   useFrame((_, delta) => {
//     planetRef.current.rotation.y += delta * 0.15;
//   });
//   return (
//     <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
//       <mesh ref={planetRef} castShadow receiveShadow position={[0, 0, 0]}>
//         <icosahedronGeometry args={[2.2, 5]} />
//         <meshStandardMaterial color="#C8D6FF" roughness={0.6} metalness={0.15} />
//       </mesh>
//       {/* Planet ring */}
//       <mesh rotation={[Math.PI / 2.2, 0, 0]}>
//         <ringGeometry args={[2.6, 3.2, 64]} />
//         <meshBasicMaterial color="#7FB8FF" opacity={0.25} transparent />
//       </mesh>
//     </Float>
//   );
// }

// type SatelliteProps = { radius?: number; speed?: number; size?: number; phase?: number };
// function Satellite({ radius = 4.2, speed = 0.5, size = 0.22, phase = 0 }: SatelliteProps) {
//   const ref = useRef<THREE.Mesh>(null!);
//   const hover = useRef(false);
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed + phase;
//     const x = Math.cos(t) * radius;
//     const z = Math.sin(t) * radius;
//     const y = Math.sin(t * 1.8) * 0.4;
//     ref.current.position.set(x, y, z);
//     const s = hover.current ? size * 1.8 : size;
//     ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, s, 0.2));
//     ref.current.rotation.x += 0.02;
//     ref.current.rotation.y += 0.02;
//   });
//   return (
//     <mesh
//       ref={ref}
//       onPointerOver={() => (hover.current = true)}
//       onPointerOut={() => (hover.current = false)}
//       castShadow
//     >
//       <icosahedronGeometry args={[1, 0]} />
//       <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.25} />
//     </mesh>
//   );
// }

// function SpaceScene() {
//   const starProps = useMemo(() => ({ radius: 280, depth: 80, count: 16000, factor: 6, saturation: 0 }), []);

//   function RotatingSpace() {
//     const rotatingRef = useRef<THREE.Group>(null!);
//     useFrame((_, delta) => {
//       if (rotatingRef.current) rotatingRef.current.rotation.y += delta * 0.05;
//     });

//     function AsteroidField({ count = 120, radius = 10, spread = 10 }) {
//       const meshRef = useRef<THREE.InstancedMesh>(null!);
//       const dummy = useMemo(() => new THREE.Object3D(), []);
//       const params = useMemo(
//         () =>
//           Array.from({ length: count }).map(() => ({
//             r: radius + Math.random() * spread,
//             speed: 0.05 + Math.random() * 0.25,
//             size: 0.08 + Math.random() * 0.22,
//             phase: Math.random() * Math.PI * 2,
//             tilt: (Math.random() - 0.5) * 0.6
//           })),
//         [count, radius, spread]
//       );

//       useFrame((state) => {
//         const t = state.clock.getElapsedTime();
//         params.forEach((p, i) => {
//           const x = Math.cos(t * p.speed + p.phase) * p.r;
//           const y = Math.sin(t * p.speed + p.phase * 0.5) * (p.r * 0.2);
//           const z = Math.sin(t * p.speed + p.phase) * p.r;
//           dummy.position.set(x, y, z);
//           dummy.rotation.set(t * p.speed, t * p.speed * 0.8, 0);
//           dummy.scale.set(p.size, p.size, p.size);
//           dummy.updateMatrix();
//           meshRef.current.setMatrixAt(i, dummy.matrix);
//         });
//         meshRef.current.instanceMatrix.needsUpdate = true;
//       });

//       return (
//         <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count]}>
//           <dodecahedronGeometry args={[1, 0]} />
//           <meshStandardMaterial color="#cfd9ff" roughness={0.6} metalness={0.2} />
//         </instancedMesh>
//       );
//     }

//     return (
//       <group ref={rotatingRef}>
//         <ParallaxRig />
//         {/* <Planet /> */}
//         <Satellite radius={4.2} speed={0.5} size={0.22} phase={0} />
//         <Satellite radius={5.2} speed={0.35} size={0.18} phase={1.2} />
//         <Satellite radius={6.0} speed={0.28} size={0.16} phase={2.4} />
//         {/* <AsteroidText text="COSMOCON" count={100} /> */}
//         <AsteroidField count={100}  />
//         <AsteroidField count={100} />

//         <Sparkles size={1.8} scale={[40, 40, 40]} speed={0.5} count={1800} opacity={1} />
//         <Stars {...starProps} fade />
//       </group>
//     );
//   }

//   return (
//     <Canvas
//   style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
//   dpr={Math.min(window.devicePixelRatio, 2)}
//   camera={{ position: [0, 0, 8], fov: 50 }}
//   gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} // alpha back to true
//   onCreated={({ gl }) => {
//     gl.setClearColor("#000000", 0); // transparent black
//   }}
// >




//     <AdaptiveDpr pixelated={false} />


//       <ambientLight intensity={0.35} />
//       <directionalLight position={[6, 8, 5]} intensity={1.2} castShadow />
//       <pointLight position={[-6, -4, -4]} intensity={0.5} />

//       <RotatingSpace />

//       <AdaptiveDpr pixelated />
//       <Preload all />
//     </Canvas>
//   );
// }



// export default function Home() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden">

//       {/* Background 3D Scene */}
//       <div className="absolute inset-0 z-0">
//         <SpaceScene />
//       </div>

//       {/* Navbar - stays fixed at top */}
//       {/* <NavBar /> */}

//       {/* Foreground content */}
//       {/* <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
//         <h1 className="text-6xl font-bold mb-4">COSMOCON</h1>
//         <p className="text-lg mb-6">
//           The Ultimate Space Technology Conference — Explore the Future Beyond Earth 🚀
//         </p>
//         <div className="space-x-4">
//           <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition">
//             Register
//           </button>
//           <button className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition">
//             View Venue
//           </button>
//         </div>
//       </div> */}
//     </div>
//   );
// }












































// App — 3D Space Landing Page (Cosmicon)
import {useMemo, useRef} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, Sparkles, Preload, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import "./Home.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";





function ParallaxRig() {
  const { camera, mouse } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame(() => {
    target.current.set(mouse.x * 0.5, mouse.y * 0.3, camera.position.z);
    camera.position.lerp(target.current, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Planet() {
  const planetRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    planetRef.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={planetRef} castShadow receiveShadow position={[0, 0, 0]}>
        <icosahedronGeometry args={[2.2, 5]} />
        <meshStandardMaterial color="#C8D6FF" roughness={0.6} metalness={0.15} />
      </mesh>
      {/* Planet ring */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[2.6, 3.2, 64]} />
        <meshBasicMaterial color="#7FB8FF" opacity={0.25} transparent />
      </mesh>
    </Float>
  );
}

type SatelliteProps = { radius?: number; speed?: number; size?: number; phase?: number };
function Satellite({ radius = 4.2, speed = 0.5, size = 0.22, phase = 0 }: SatelliteProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const hover = useRef(false);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 1.8) * 0.4;
    ref.current.position.set(x, y, z);
    const s = hover.current ? size * 1.8 : size;
    ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, s, 0.2));
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.02;
  });
  return (
    <mesh
      ref={ref}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      castShadow
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.25} />
    </mesh>
  );
}

function SpaceScene() {
  const starProps = useMemo(() => ({ radius: 280, depth: 80, count: 16000, factor: 6, saturation: 0 }), []);

  function RotatingSpace() {
    const rotatingRef = useRef<THREE.Group>(null!);
    useFrame((_, delta) => {
      if (rotatingRef.current) rotatingRef.current.rotation.y += delta * 0.05;
    });

    function AsteroidField({ count = 120, radius = 10, spread = 10 }) {
      const meshRef = useRef<THREE.InstancedMesh>(null!);
      const dummy = useMemo(() => new THREE.Object3D(), []);
      const params = useMemo(
        () =>
          Array.from({ length: count }).map(() => ({
            r: radius + Math.random() * spread,
            speed: 0.05 + Math.random() * 0.25,
            size: 0.08 + Math.random() * 0.22,
            phase: Math.random() * Math.PI * 2,
            tilt: (Math.random() - 0.5) * 0.6
          })),
        [count, radius, spread]
      );

      useFrame((state) => {
        const t = state.clock.getElapsedTime();
        params.forEach((p, i) => {
          const x = Math.cos(t * p.speed + p.phase) * p.r;
          const y = Math.sin(t * p.speed + p.phase * 0.5) * (p.r * 0.2);
          const z = Math.sin(t * p.speed + p.phase) * p.r;
          dummy.position.set(x, y, z);
          dummy.rotation.set(t * p.speed, t * p.speed * 0.8, 0);
          dummy.scale.set(p.size, p.size, p.size);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
      });

      return (
        <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#cfd9ff" roughness={0.6} metalness={0.2} />
        </instancedMesh>
      );
    }

    return (
      <group ref={rotatingRef}>
        <ParallaxRig />
        {/* <Planet /> */}
        <Satellite radius={4.2} speed={0.5} size={0.22} phase={0} />
        <Satellite radius={5.2} speed={0.35} size={0.18} phase={1.2} />
        <Satellite radius={6.0} speed={0.28} size={0.16} phase={2.4} />
        <AsteroidField count={160} />
        <AsteroidField count={100} />
        <Sparkles size={1.8} scale={[40, 40, 40]} speed={0.5} count={1800} opacity={1} />
        <Stars {...starProps} fade />
      </group>
    );
  }

  return (
    <Canvas
  style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
  dpr={Math.min(window.devicePixelRatio, 2)}
  camera={{ position: [0, 0, 8], fov: 50 }}
  gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} // alpha back to true
  onCreated={({ gl }) => {
    gl.setClearColor("#000000", 0); // transparent black
  }}
>




    <AdaptiveDpr pixelated={false} />


      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 5]} intensity={1.2} castShadow />
      <pointLight position={[-6, -4, -4]} intensity={0.5} />

      <RotatingSpace />

      <AdaptiveDpr pixelated />
      <Preload all />
    </Canvas>
  );
}

export default function Home() {
  return (
    <div className="relative  h-screen overflow-hidden overflow-y-hidden">
      {/* Background (Canvas on top to capture mouse) */}

      <NavBar />
      <div className="absolute inset-0 z-0">
        <SpaceScene />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pointer-events-none">
        
        {/* Title */}
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-wider drop-shadow-lg">
          COSMOCON
        </h1>
        
        {/* Year */}
        <h2 className="text-2xl md:text-3xl mt-2 text-blue-300 font-semibold">
          2025
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          The Ultimate Space Technology Conference — Explore the Future Beyond Earth 🚀
        </p>

        {/* Countdown */}
        <div className="mt-6 flex space-x-4 text-lg md:text-2xl font-mono text-blue-200">
          <span>00h</span>
          <span>00m</span>
          <span>00s</span>
        </div>

        {/* Buttons (re-enable clicks) */}
        <div className="mt-8 flex space-x-6 pointer-events-auto">
            <Link to="/register">
          <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-400/50">
            Register
          </button>
          </Link>
          <button className="px-6 py-3 rounded-2xl border border-blue-400 text-blue-300 hover:bg-blue-500/20 active:scale-95 transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-400/30">
            View Venue
          </button>
        </div>
      </div>
    </div>
  );
}


