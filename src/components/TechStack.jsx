import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaLinux, FaCloudflare } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiFastapi, SiPostgresql, SiNginx, SiVercel, SiJsonwebtokens } from 'react-icons/si';

const techCategories = [
    {
        title: "Frontend",
        icon: <FaReact className="text-blue-400" />,
        skills: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
        ]
    },
    {
        title: "Backend",
        icon: <FaPython className="text-blue-300" />,
        skills: [
            { name: "Python", icon: <FaPython className="text-blue-300" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
            { name: "REST APIs", icon: <span className="font-bold text-xs border border-gray-500 rounded px-1">API</span> },
            { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        ]
    },
    {
        title: "DevOps & Tools",
        icon: <FaLinux className="text-gray-300" />,
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-white" /> },
            { name: "SSH", icon: <span className="font-bold text-xs text-green-400">&gt;_</span> },
            { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
            { name: "Cloudflare", icon: <FaCloudflare className="text-orange-400" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
        ]
    }
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 bg-dark relative px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                        Top Notch Tech Stack
                    </h2>
                    <p className="text-gray-400">
                        The tools and technologies I use to build scalable, high-performance applications.
                    </p>
                </motion.div>

                {/* Infinite Scrolling Marquee */}
                <div className="relative w-full overflow-hidden mb-16 py-4 bg-gray-900/20 border-y border-gray-800/50">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex w-max gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...techCategories.flatMap(cat => cat.skills), ...techCategories.flatMap(cat => cat.skills)].map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/40 border border-gray-700/50 whitespace-nowrap">
                                <span className="text-xl">{skill.icon}</span>
                                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                                <div className="text-3xl p-3 bg-gray-800 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                                        <div className="text-2xl">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
