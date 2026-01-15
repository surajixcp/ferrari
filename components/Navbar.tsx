"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300",
                isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                {/* Simple text logo for now, could be SVG */}
                <span className="text-2xl font-orbitron font-bold tracking-widest text-ferrari-red">FERRARI</span>
            </div>

            {/* Right: CTA */}
            <button className="group relative px-6 py-2 overflow-hidden border border-white/20 hover:border-ferrari-red transition-colors duration-300">
                <div className="absolute inset-0 bg-ferrari-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 font-rajdhani font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">Inquire</span>
            </button>
        </motion.nav>
    );
}
