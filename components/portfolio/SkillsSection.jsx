import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import Image from 'next/image';

export default function SkillsSection() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const skills = [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JDBC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'ORM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg' },
        { name: 'Problem Solving (DSA)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1e] to-[#0a0a0a] relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        Skills & Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl" />
                                        <div className="absolute inset-0 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-xl" />
                                        <div className="relative flex items-center justify-center w-full h-full">
                                            <Image
                                                src={skill.logo}
                                                alt={skill.name}
                                                fill
                                                sizes="64px"
                                                className="object-contain drop-shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold text-white text-center">{skill.name}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}