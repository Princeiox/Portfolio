import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Role-Based Quiz API",
        description: "A robust backend system for managing quizzes with granular role-based access control.",
        features: [
            "Role-Based Access Control (RBAC)",
            "JWT Authentication",
            "Dynamic Quiz Management",
            "Score & Progress Tracking"
        ],
        tech: ["FastAPI", "PostgreSQL", "JWT", "Python"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: null // Placeholder handling in UI
    },
    {
        title: "Mentor-Mentee Application",
        description: "A full-stack platform connecting mentors with mentees for career guidance and skill development.",
        features: [
            "Real-time Chat",
            "Scheduling System",
            "Profile Matching Algorithm",
            "Video Call Integration"
        ],
        tech: ["React", "FastAPI", "PostgreSQL", "WebSockets"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: null
    },
    {
        title: "Employee Management App",
        description: "Comprehensive dashboard for managing employee records, attendance, and payroll.",
        features: [
            "CRUD Operations",
            "Attendance Tracking",
            "Payroll Calculation",
            "Admin Dashboard"
        ],
        tech: ["React", "Redux", "Node.js", "MongoDB"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: null
    },
    {
        title: "MotoHimalayas Website",
        description: "Adventure tour booking platform with integrated payments and review system.",
        features: [
            "Payment Gateway Integration",
            "User Reviews & Ratings",
            "Itinerary Management",
            "Automated Booking Emails"
        ],
        tech: ["React", "Django", "PostgreSQL", "Stripe"],
        github: "https://github.com",
        demo: "https://demo.com",
        image: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-dark relative px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400">
                        A selection of my recent work in web development and backend engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group"
                        >
                            {/* Image Placeholder Area */}
                            <div className="h-64 bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xl group-hover:scale-105 transition-transform duration-500">
                                    [ Project Preview: {project.title} ]
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-blue-300 border border-gray-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                        <FaGithub size={20} /> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                        <FaExternalLinkAlt size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
