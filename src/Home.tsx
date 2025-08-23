import './Home.css';
import { Canvas,useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Info from "./info";
import Objectives from "./Objectives";
import Event from "./Events";
import NavBar from "./NavBar";
import astraimg from "./astrafull.png";
import CountdownTimer from "./CountdownTimer"; // Import the new component
import Logos from "./Logos";
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'; // Import lucide-react icons
import Gallery from "./Gallery"; // Import Gallery component

// Removed InteractiveModel component as its logic is now merged into Model.

function Model() {
  const { scene } = useGLTF("/models/scene.gltf");
  const ref = useRef<THREE.Object3D>(null);
  const { viewport } = useThree();
  const [startTime] = useState(() => Date.now());

  const scale = viewport.width < 5 ? 1 : 1.7;

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = 0; // Set initial x-rotation to 0
      ref.current.rotation.y = 0; // Set initial y-rotation to 0
    }
  }, [ref]);

  useFrame(() => {
    if (!ref.current) return;
    const elapsed = (Date.now() - startTime) / 1000; // seconds

    if (elapsed >= 2) {
      // After 2 seconds, start the animation
      // Smoothly tilt x-rotation to a positive value (e.g., 0.1 for a slight front tilt)
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        0.2, // Target slight tilt towards front
        0.02 // Smoothing factor
      );
      // Start continuous rotation
      ref.current.rotation.y += 0.01; // Continuous rotation speed
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={[0, -1.0, 0]}
    />
  );
}

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home"> {/* Added id="home" for navigation */}
      {showText && (<>
        <NavBar />
        <Logos />
      </>)}


      <div className="w-full">
        {/* First Page (Canvas Section) */}
        <section className="relative h-screen w-full">
          <Canvas
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10, pointerEvents: "auto" }}
            dpr={Math.min(window.devicePixelRatio, 2)}
            camera={{ position: [0, 0, 8], fov: 50 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            onCreated={({ gl }) => {
              gl.setClearColor("#000000", 0);
            }}
            eventSource={document.body} // Re-added this for robust event capturing
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model /> {/* Model now handles its own interaction and animation */}
          </Canvas>

          {/* Overlay Text */}
          {showText && (
            <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
              <h1 className="cosmo-text">COSMOCON</h1>
              <h1 className="cosmo-text year">2025</h1>
              <div className="z-40 md:block mt-4 pointer-events-auto">
                <a
                  href="https://cosmocon2025.fillout.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3  bg-amber-500 hover:bg-amber-400 text-black font-bold text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-300/50"
                >
                  Register Now
                </a>
              </div>
              <CountdownTimer targetDate="2025-08-27T00:00:00" />
            </div>
          )}

        </section>


        <section className="w-full bg-[#0B0F1A] text-white py-10">
          <div className="w-full">
            <Info active={true} />
          </div>
        </section>

        <section className="w-full bg-[#0B0F1A] text-white py-10">
          <div className="w-full">
            <Objectives />
          </div>
        </section>

        <section className="w-full bg-[#0B0F1A] text-white py-10">
          <div className="w-full">
            <Event />
          </div>
        </section>


        <footer className="w-full bg-black text-white py-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-around space-y-6 md:space-y-0">

            {/* Left Side: Image */}
            <div className="md:w-1/3 flex justify-center ">
              <img
                src={astraimg}
                alt="Astra Logo"
                className="max-w-[500px] w-full h-auto object-contain"
              />
            </div>
            {/* Middle Section:Address */}
            <div className='flex flex-col md:w-1/3 items-center text-center'> 
            <h2 className="text-xl font-semibold mb-4">Address</h2>
             <div className="flex flex-col items-center  space-y-4">
            <h2>Gandipet, Hyderabad, Telangana,</h2>
            <h2>PIN : 500075</h2>
            <h2>Mobile : 9949375526 </h2>
            </div>
            </div>

            {/* Right Side: Contact Links */}
            <div className="flex flex-col md:w-1/3 items-center ">
              <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
              <div className="flex flex-col items-center  space-y-4">

                {/* Instagram */}
                <a href="https://www.instagram.com/chaitanyaastra" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Instagram size={28} className="text-purple-400 group-hover:text-white" />
                  <span className="text-lg">Instagram</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/chaitanya-astra-cbit/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin size={28} className="text-blue-400 group-hover:text-white" />
                  <span className="text-lg">LinkedIn</span>
                </a>

                {/* Mail */}
                <a href="mailto:chaitanyaastra_cc@cbit.ac.in" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Mail size={28} className="text-red-400 group-hover:text-white" />
                  <span className="text-lg">chaitanyaastra_cc@cbit.ac.in</span>
                </a>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
};


export default Home;