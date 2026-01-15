export default function Footer() {
    return (
        <footer className="relative z-20 bg-neutral-950 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-2xl font-orbitron font-bold tracking-widest text-white mb-4 md:mb-0">FERRARI</div>
                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Ferrari S.p.A. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
