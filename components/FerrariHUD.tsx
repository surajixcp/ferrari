"use client";

import { MotionValue, useTransform, motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface FerrariHUDProps {
    scrollYProgress: MotionValue<number>;
}

export default function FerrariHUD({ scrollYProgress }: FerrariHUDProps) {
    // --- Phase 1: Hero (0 - 33%) ---
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

    // --- Phase 2: Design (33% - 66%) ---
    const designOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.6, 0.65], [0, 1, 1, 0]);
    const designX = useTransform(scrollYProgress, [0.3, 0.35], [-50, 0]);

    // --- Phase 3: Performance (66% - 100%) ---
    const perfOpacity = useTransform(scrollYProgress, [0.65, 0.7, 1], [0, 1, 1]);
    const perfY = useTransform(scrollYProgress, [0.65, 0.7], [50, 0]);


    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-12 mix-blend-difference text-white">

            {/* Decorative Grid Lines / HUD Elements */}
            <div className="absolute top-10 left-10 w-32 h-[1px] bg-ferrari-red opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-32 h-[1px] bg-ferrari-red opacity-50"></div>
            <div className="absolute top-10 right-10 w-[1px] h-32 bg-gold-accent opacity-30"></div>

            {/* PHASE 1: HERO */}
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-[12vw] leading-none tracking-tighter uppercase font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    LaFerrari
                </h1>
                <div className="mt-4 flex items-center gap-6">
                    <span className="text-ferrari-red font-orbitron tracking-widest text-xl">LIMITED SERIES</span>
                    <div className="h-[1px] w-12 bg-white/20"></div>
                    <span className="text-gold-accent font-bold text-2xl">€1.2M+</span>
                </div>
            </motion.div>


            {/* PHASE 2: DESIGN */}
            <motion.div
                style={{ opacity: designOpacity, x: designX }}
                className="absolute top-1/3 left-12 max-w-lg"
            >
                <h2 className="text-6xl font-orbitron text-ferrari-red mb-4">DESIGN</h2>
                <p className="text-2xl font-light text-gray-200 leading-relaxed border-l-4 border-ferrari-red pl-6">
                    Carbon Fiber Monocoque — <br />
                    <span className="text-white font-bold">F1-derived aerodynamics.</span>
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 opacity-80">
                    <div>
                        <span className="block text-xs text-gray-400 uppercase tracking-widest">Downforce</span>
                        <span className="text-xl font-orbitron">ACTIVE</span>
                    </div>
                    <div>
                        <span className="block text-xs text-gray-400 uppercase tracking-widest">Structure</span>
                        <span className="text-xl font-orbitron">T800 CARBON</span>
                    </div>
                </div>
            </motion.div>


            {/* PHASE 3: PERFORMANCE */}
            <motion.div
                style={{ opacity: perfOpacity, y: perfY }}
                className="absolute bottom-1/4 right-12 text-right"
            >
                <h2 className="text-6xl font-orbitron text-white mb-6">PERFORMANCE</h2>

                <div className="flex flex-col gap-6">
                    <div className="group">
                        <span className="block text-sm text-gold-accent uppercase tracking-[0.2em] mb-1">Powertrain</span>
                        <span className="text-5xl font-bold font-orbitron">V12 HY-KERS</span>
                    </div>

                    <div className="group">
                        <span className="block text-sm text-gold-accent uppercase tracking-[0.2em] mb-1">Power Output</span>
                        <span className="text-5xl font-bold font-orbitron">950 <span className="text-2xl">HP</span></span>
                    </div>

                    <div className="group">
                        <span className="block text-sm text-gold-accent uppercase tracking-[0.2em] mb-1">Max Speed</span>
                        <span className="text-5xl font-bold font-orbitron">350+ <span className="text-2xl">KM/H</span></span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
