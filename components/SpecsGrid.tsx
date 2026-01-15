export default function SpecsGrid() {
    const specs = [
        { label: "Engine", value: "6.3L V12" },
        { label: "Electric Motor", value: "120 kW" },
        { label: "Total Torque", value: "900 Nm" },
        { label: "0-100 km/h", value: "< 3 sec" },
        { label: "0-200 km/h", value: "< 7 sec" },
        { label: "0-300 km/h", value: "15 sec" },
    ];

    return (
        <section className="relative z-20 bg-carbon-gray py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl font-orbitron text-ferrari-red mb-16 text-center uppercase tracking-widest">Technical Specifications</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-carbon-gray p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-300 group">
                            <span className="text-sm text-gray-400 uppercase tracking-widest mb-2 group-hover:text-ferrari-red transition-colors">{spec.label}</span>
                            <span className="text-3xl font-orbitron font-bold text-white">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
