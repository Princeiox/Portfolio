import React from 'react';
import { motion } from 'framer-motion';
import { FaFlag, FaCode, FaServer, FaRocket, FaBriefcase } from 'react-icons/fa';

const timelineEvents = [
    {
        year: "Start",
        title: "The Beginning",
        description: "Started my journey with HTML & CSS, building static web pages and understanding the core structure of the web.",
        icon: <FaFlag />,
        color: "bg-blue-500"
    },
    {
        year: "Growth",
        title: "Frontend Mastery",
        description: "Learned JavaScript and React, creating interactive user interfaces and single-page applications.",
        icon: <FaCode />,
        color: "bg-purple-500"
    },
    {
        year: "Expansion",
        title: "Backend Engineering",
        description: "Dove into Python and FastAPI, mastering REST APIs, database design with PostgreSQL, and server-side logic.",
        icon: <FaServer />,
        color: "bg-green-500"
    },
    {
        year: "Advanced",
        title: "Full Stack Integration",
        description: "Combined frontend and backend skills to build complex full-stack applications like the Mentor-Mentee platform and Quiz APIs.",
        icon: <FaRocket />,
        color: "bg-orange-500"
    },
    {
        year: "Professional",
        title: "Production Ready",
        description: "Focused on scalability, security (JWT, RBAC), and deployment (Nginx, VPS), delivering real-world solutions.",
        icon: <FaBriefcase />,
        color: "bg-pink-500"
    }
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-24 bg-black relative px-6 md:px-12 overflow-hidden">
            {/* Decorative line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Growth Story
                    </h2>
                    <p className="text-gray-400">
                        From "Hello World" to Scalable Architecture.
                    </p>
                </motion.div>

                <div className="space-y-12 relative">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-5/12 order-1 md:order-1" />

                            <div className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-10 h-10 rounded-full border-4 border-gray-800 justify-center">
                                <div className={`w-3 h-3 rounded-full ${event.color}`} />
                            </div>

                            <div className="w-full md:w-5/12 order-1 md:order-1 px-6 py-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`p-2 rounded-lg ${event.color} bg-opacity-20 text-white`}>
                                        {event.icon}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{event.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
