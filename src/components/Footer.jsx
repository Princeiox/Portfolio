import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Prince Pandey</h3>
                    <p className="text-gray-500 text-sm">
                        Building scalable backend systems & modern web applications.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/Princeiox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/princeiox/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-xl"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/p/DUuwsZJDJHT2tYivYUINYqY0UFKekROOuRBaPM0/?igsh=a2V4bW1mMHVwNXA4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-xl"><FaInstagram /></a>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-600 text-sm flex items-center justify-center gap-2">
                <p>&copy; {new Date().getFullYear()} Prince Pandey. All rights reserved.</p>
                <span className="hidden md:inline">|</span>
                <p className="flex items-center gap-1">Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind</p>
            </div>
        </footer>
    );
};

export default Footer;
