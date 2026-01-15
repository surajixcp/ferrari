export default function Features() {
    return (
        <section className="relative z-20 bg-black py-32 px-8 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

                {/* Left: Text Content */}
                <div className="space-y-12">
                    <div>
                        <h4 className="text-ferrari-red font-orbitron text-xl mb-4">AERODYNAMICS</h4>
                        <h3 className="text-5xl font-bold leading-tight mb-6">Sculpted by Wind</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Active aerodynamics allow the LaFerrari to adjust its configuration in real-time.
                            Diffusers, guide vanes, and the rear spoiler work in unison to deliver maximum downforce
                            without compromising drag coefficients.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-ferrari-red font-orbitron text-xl mb-4">HYBRID TECH</h4>
                        <h3 className="text-5xl font-bold leading-tight mb-6">F1 to Road</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            The HY-KERS system, derived directly from Formula 1, ensures instant torque delivery
                            across the entire rev range. It captures kinetic energy during braking and cornering
                            to recharge the batteries.
                        </p>
                    </div>
                </div>

                {/* Right: Visual (Placeholder for now, could be a video or image) */}
                <div className="aspect-square bg-neutral-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-ferrari-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="font-orbitron text-6xl text-white/5 font-bold">HY-KERS</span>
                </div>

            </div>
        </section>
    );
}
