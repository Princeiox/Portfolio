import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const About = () => {
    return (
        <section id="about" className="py-32 bg-dark relative px-6 md:px-12 z-10 overflow-hidden">
            {/* Subtle Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Floating Background Icons - Adds depth */}
            <motion.div
                className="absolute top-20 left-10 text-blue-500/20 text-6xl z-0"
                animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaReact />
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-10 text-yellow-500/20 text-5xl z-0"
                animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <SiJavascript />
            </motion.div>
            <motion.div
                className="absolute top-40 right-10 text-green-500/20 text-4xl z-0"
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <FaPython />
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Image/Visual Side - Seamless Blend */}
                    <div className="relative w-full max-w-sm md:max-w-md mx-auto">

                        {/* Atmospheric Lighting - No defined box */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                        {/* Image - Free standing */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="/profile.png"
                                alt="Prince Pandey"
                                className="w-full h-auto object-cover drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.1))',
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                }}
                            />

                            {/* Heavy Bottom Fade to Match Background #0a0a0a */}
                            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20"></div>
                        </motion.div>

                        {/* Floating Badge - Minimal & Clean */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-12 -right-4 md:-right-8 backdrop-blur-sm bg-white/5 border border-white/10 px-5 py-3 rounded-2xl shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </div>
                                <span className="text-gray-200 font-medium text-sm tracking-wide">Open to Work</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side - Refined Typography */}
                    <div className="relative pt-12 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[1px] w-12 bg-blue-500"></span>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">About Me</h2>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                                Engineering <span className="italic font-serif text-gray-400">Classic Quality</span> in a Digital World.
                            </h3>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                                <p>
                                    I believe in the elegance of code. My journey wasn't just about learning syntax; it was about understanding the <span className="text-white font-medium">architecture of ideas</span>.
                                </p>
                                <p>
                                    Specializing in <span className="text-blue-300">scalable backend systems</span> and <span className="text-purple-300">modern interfaces</span>, I bridge the gap between complex logic and intuitive user experiences.
                                </p>
                                <p>
                                    Whether it's optimizing database queries or crafting pixel-perfect UI, I bring a craftsman's attention to detail to every project.
                                </p>
                            </div>

                            {/* Signature / Call to action */}
                            <div className="mt-10 flex items-center gap-6">
                                <a href="#contact" className="group relative px-6 py-3 font-semibold text-white transition-colors duration-300">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-100 group-hover:opacity-0 border border-white/30 rounded-full"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-white/10 rounded-full border border-white/50 blur-sm"></span>
                                    <span className="relative">Get in Touch</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
