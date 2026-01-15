"use client";

import { MotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function ScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            // Filename format: ezgif-frame-001.jpg, ezgif-frame-002.jpg, etc.
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `${imageFolderPath}/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [totalFrames, imageFolderPath]);

    // Smoothing the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Render frame based on scroll
    useMotionValueEvent(smoothProgress, "change", (latest: number) => {
        if (!canvasRef.current || !isLoaded) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        // Enhance image quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        // Safety check for frame index
        if (frameIndex >= 0 && images[frameIndex]) {
            requestAnimationFrame(() => {
                const canvas = canvasRef.current!;
                const img = images[frameIndex];

                // Maintain aspect ratio and center
                const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width / 2) - (img.width / 2) * scale;
                const y = (canvas.height / 2) - (img.height / 2) * scale;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            });
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
        />
    );
}
