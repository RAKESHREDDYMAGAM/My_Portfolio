import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import Image from 'next/image';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function AboutSection() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <section id="about" className="min-h-screen py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/30 backdrop-blur-sm bg-gray-900/50 shadow-2xl shadow-cyan-500/20">
                                <Image
                                    src="/WhatsApp Image 2025-10-06 at 19.35.53_e16fe538.jpg"
                                    alt="Rakesh Reddy"
                                    fill
                                    className="object-cover object-center rounded-2xl"
                                    style={{ objectPosition: 'center top' }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-md bg-gray-900/30 hover:border-cyan-500/40 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                                Passionate Developer and Lifelong Learner
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                I'm a passionate developer and lifelong learner, always curious to explore the latest in technology. Currently, I'm studying at PW IOI, Bengaluru, enrolled in a 4-year CS & AI undergraduate program, while also pursuing a BS in Data Science & Applications from IIT Madras. As a frontend developer in progress, I'm building a strong foundation while learning full-stack web development to grow into a versatile engineer. I'm also an aspiring AI & ML Engineer and a CP Enthusiast, consistently sharpening my problem-solving by mastering DSA. With expertise in designing responsive and modern web pages, I focus on creating digital solutions that combine clean design, functionality, and seamless user experience.
                            </p>
                            
                            {/* Coding Platforms */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <div className="flex flex-wrap items-center gap-3 justify-center">
                                {[
                                    {
                                        name: 'GeeksforGeeks',
                                        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
                                        url: 'https://www.geeksforgeeks.org/user/rakeshred6man/'
                                    },
                                    {
                                        name: 'LeetCode',
                                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg',
                                        url: 'https://leetcode.com/u/KR32gCL5Bt/'
                                    },
                                    {
                                        name: 'InterviewBit',
                                        logo: '',
                                        url: 'https://www.interviewbit.com/profile/magam-rakesh-reddy/'
                                    }
                                ].map((platform, index) => (
                                    <motion.a
                                        key={platform.name}
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="group flex flex-col items-center justify-center p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 cursor-pointer text-white"
                                    >
                                        <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
                                            {platform.logo ? (
                                                <Image
                                                    src={platform.logo}
                                                    alt={platform.name}
                                                    fill
                                                    className="object-contain filter brightness-125"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-semibold">
                                                    IB
                                                </div>
                                            )}
                                        </div>
                                        <h5 className="text-xs font-medium text-white text-center">
                                            {platform.name}
                                        </h5>
                                    </motion.a>
                                ))}
                            </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {/* {[
                                { label: 'Projects', value: '[X]' },
                                { label: 'Experience', value: '[Y Years]' },
                                { label: 'Clients', value: '[Z]' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                                >
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </motion.div>
                            ))} */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}