import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden px-4 md:px-0">
            {/* Background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />

            <div className="z-10 text-center max-w-4xl mx-auto">
                <motion.h1
                    className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Prince Pandey
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-3xl font-light text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Building <span className="text-primary font-semibold">scalable backend systems</span> & <span className="text-secondary font-semibold">modern web applications</span>.
                </motion.h2>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a href="#projects" className="px-8 py-3 w-full md:w-auto rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold tracking-wide shadow-lg shadow-blue-500/25 transition-all transform hover:scale-105">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 w-full md:w-auto rounded-full border border-gray-600 hover:border-white hover:bg-white/5 text-gray-300 hover:text-white font-semibold transition-all backdrop-blur-sm">
                        Hire Me
                    </a>
                    <a href="/resume.pdf" download className="px-8 py-3 w-full md:w-auto rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold flex items-center justify-center gap-2 transition-all">
                        Download Resume
                    </a>
                </motion.div>

                <motion.div
                    className="flex gap-8 justify-center items-center text-3xl text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <a href="https://github.com/Princeiox" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/princeiox/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/p/DUuwsZJDJHT2tYivYUINYqY0UFKekROOuRBaPM0/?igsh=a2V4bW1mMHVwNXA4" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition-all duration-300"><FaInstagram /></a>
                    <a href="mailto:princepandey1604@gmail.com" className="hover:text-teal-400 hover:scale-110 transition-all duration-300"><FaEnvelope /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
