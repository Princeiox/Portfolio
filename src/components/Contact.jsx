import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Placeholder for EmailJS service connection
        // In a real scenario, you would replace these placeholders with actual keys
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        // Simulating network request
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            e.target.reset();

            setTimeout(() => setSuccess(false), 5000);
        }, 2000);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-dark to-black relative px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Let’s Build Something Together
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind? I'd love to help you bring it to life.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Company (Optional)</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                                    placeholder="Your Company Ltd."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Budget Range</label>
                                <select
                                    name="budget"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all appearance-none"
                                >
                                    <option value="<1k">&lt; $1,000</option>
                                    <option value="1k-5k">$1,000 - $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value=">10k">&gt; $10,000</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Project Type</label>
                            <select
                                name="project_type"
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                            >
                                <option value="web_dev">Full Stack Web Development</option>
                                <option value="backend">Backend API & System Architecture</option>
                                <option value="consulting">Consulting & DevOps</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Project Details</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all resize-none"
                                placeholder="Tell me about your project goals, timeline, and requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin"><FaSpinner /></span> Sending...
                                </>
                            ) : success ? (
                                <>
                                    <FaCheckCircle /> Message Sent!
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane /> Send Project Inquiry
                                </>
                            )}
                        </button>

                        {success && (
                            <p className="text-green-400 text-center mt-2 text-sm animate-pulse">
                                Thanks for reaching out! I'll get back to you shortly.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
