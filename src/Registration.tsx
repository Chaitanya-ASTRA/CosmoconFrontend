import React, { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { Input } from "./components/ui/input";
import NavBar from "./NavBar";
import { DollarSign, Mail, Phone, School, User, Image as ImageIcon } from "lucide-react";

export interface Register {
  email: string;
  name: string;
  phone: string;
  college: string;
  transactionId: string;
  screenShot?: File;
}

function GlowSphere() {
  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh position={[2, 1, -6]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          emissive="#ffffff"
          color="#d4d4d4"
          emissiveIntensity={1.2}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function WireTorus() {
  return (
    <Float speed={0.4} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh position={[-2.5, -0.5, -7]}>
        <torusKnotGeometry args={[0.9, 0.18, 180, 32]} />
        <meshBasicMaterial wireframe color="#aaaaaa" />
      </mesh>
    </Float>
  );
}

export default function Registration() {
  const [input, setInput] = useState<Register>({
    email: "",
    name: "",
    phone: "",
    college: "",
    transactionId: "",
    screenShot: undefined,
  });
  const [error, setError] = useState<Record<string, string>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!input.email) errs.email = "Email is required";
    if (!input.name) errs.name = "Name is required";
    if (!/^\d{10}$/.test(input.phone || "")) errs.phone = "Enter a valid 10 digit phone number";
    if (!input.college) errs.college = "College is required";
    if (!input.transactionId) errs.transactionId = "Transaction ID is required";

    setError(errs);
    if (Object.keys(errs).length === 0) {
      console.log("Form data:", input);
    }
  };

  const fileName = useMemo(() => input.screenShot?.name || "", [input.screenShot]);

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Register Now Button (aligned with navbar height) */}
      <a
        href="https://cosmocon2025.fillout.com/register"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-[2%] right-[4%] h-16 flex items-center px-6 
                   bg-purple-600 hover:bg-purple-500 text-white font-bold 
                   transition-all duration-300 hover:scale-105 
                   hover:shadow-lg hover:shadow-purple-500/70 
                   rounded-lg z-50"
      >
        Register Now
      </a>

      {/* 3D background layer */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 3, 2]} intensity={1.0} />
          <Stars radius={80} depth={50} count={2000} factor={4} saturation={0} fade />
          <GlowSphere />
          <WireTorus />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* form card */}
      <div className="min-h-screen text-white flex items-center justify-center px-4 py-28">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-black/60 border border-white/20 shadow-[0_10px_40px_rgba(255,255,255,0.15)] p-6 md:p-8 backdrop-blur-md relative"
        >
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 blur-2xl" />

          <h1 className="relative text-center text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-400">
            Registration Form
          </h1>
          <p className="relative mt-2 text-center text-white/70 text-sm">
            Join the event and secure your spot
          </p>

          <div className="relative mt-8 space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                id="email"
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="pl-10 h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-white"
              />
              {error.email && <span className="text-sm text-red-400 mt-1 block">{error.email}</span>}
            </div>

            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                id="name"
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter your name"
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-cyan-400"
              />
              {error.name && <span className="text-sm text-red-400 mt-1 block">{error.name}</span>}
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                id="phone"
                type="text"
                name="phone"
                value={input.phone}
                onChange={changeEventHandler}
                placeholder="Enter your phone number"
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-cyan-400"
              />
              {error.phone && <span className="text-sm text-red-400 mt-1 block">{error.phone}</span>}
            </div>

            {/* College */}
            <div className="relative">
              <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                id="college"
                type="text"
                name="college"
                value={input.college}
                onChange={changeEventHandler}
                placeholder="Enter your college name"
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-cyan-400"
              />
              {error.college && <span className="text-sm text-red-400 mt-1 block">{error.college}</span>}
            </div>

            {/* Transaction ID */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                id="transactionId"
                type="text"
                name="transactionId"
                value={input.transactionId}
                onChange={changeEventHandler}
                placeholder="Transaction ID"
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-cyan-400"
              />
              {error.transactionId && <span className="text-sm text-red-400 mt-1 block">{error.transactionId}</span>}
            </div>

            {/* Screenshot */}
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Input
                    id="screenshot"
                    type="file"
                    name="screenShot"
                    accept="image/*"
                    onChange={(e) =>
                      setInput({ ...input, screenShot: e.target.files?.[0] || undefined })
                    }
                    className="h-12 bg-white/10 border-white/20 text-white file:text-white file:bg-white/10 file:border-0 file:px-3 file:py-2 file:mr-3 focus-visible:ring-1 focus-visible:ring-cyan-400"
                  />
                  <ImageIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                </div>
              </div>
              {fileName && <span className="text-xs text-white/70 mt-1 block">{fileName}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="relative mt-8 w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-gray-200 to-white text-black shadow-lg shadow-white/10 hover:brightness-110 active:scale-[0.99] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
