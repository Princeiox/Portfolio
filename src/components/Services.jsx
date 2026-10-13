import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaNetworkWired, FaTools, FaCogs } from 'react-icons/fa';

const services = [
    {
        title: "Full Stack Web Development",
        description: "Custom web applications built with React, FastAPI, and PostgreSQL for performance and scalability.",
        icon: <FaLaptopCode />,
        color: "text-blue-400",
        bg: "group-hover:bg-blue-500/10"
    },
    {
        title: "Secure Backend Development",
        description: "Robust REST APIs with JWT authentication, role-based access control, and secure data handling.",
        icon: <FaServer />,
        color: "text-green-400",
        bg: "group-hover:bg-green-500/10"
    },
    {
        title: "API Integration",
        description: "Seamless integration of third-party services and building scalable internal APIs.",
        icon: <FaNetworkWired />,
        color: "text-purple-400",
        bg: "group-hover:bg-purple-500/10"
    },
    {
        title: "Deployment & DevOps",
        description: "Production-ready setups using VPS, Nginx, SSH security handling, and Cloudflare optimizations.",
        icon: <FaTools />,
        color: "text-orange-400",
        bg: "group-hover:bg-orange-500/10"
    },
    {
        title: "Custom Software Solutions",
        description: "Tailored software architecture designed to meet specific business needs and technical requirements.",
        icon: <FaCogs />,
        color: "text-pink-400",
        bg: "group-hover:bg-pink-500/10"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-dark relative px-6 md:px-12">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Work With Me
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        I help bring ideas to life with robust engineering and intuitive design.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className={`text-4xl mb-6 ${service.color} p-4 rounded-xl bg-gray-800 w-fit ${service.bg} transition-colors duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
