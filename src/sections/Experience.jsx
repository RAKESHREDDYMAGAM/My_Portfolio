import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../components/useInView';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const timeline = [
        {
            icon: GraduationCap,
            title: '4-year UG Program',
            company: 'PW Institute of Innovation, Bengaluru',
            period: '2024 – Present',
            description: 'Immersive undergraduate curriculum in CS & AI with project work, labs, and research training.',
            color: 'cyan',
            link: 'https://www.pwioi.com/'
        },
        {
            icon: GraduationCap,
            title: 'BS in Data Science & Applications',
            company: 'IIT Madras, Chennai',
            period: '2025 – Present',
            description: 'Combines rigorous data science theory with hands-on applications in ML, systems, and analytics.',
            color: 'purple',
            link: 'https://study.iitm.ac.in/ds/'
        },
        {
            icon: GraduationCap,
            title: '12th Standard, 90.7%',
            company: 'SR Junior College, Hyderabad, Telangana',
            period: '2022 – 2024',
            description: '',
            color: 'cyan'
        },
        {
            icon: GraduationCap,
            title: '10th Standard, CGPA 8.7/10',
            company: 'Krishnaveni Talent School, Cherial, Telangana',
            period: '2021 – 2022',
            description: '',
            color: 'purple'
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1e] to-[#0a0a0a] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;
                            const colorClass = item.color === 'cyan' 
                                ? 'from-cyan-500 to-cyan-400' 
                                : 'from-purple-500 to-purple-400';
                            const glowClass = item.color === 'cyan' 
                                ? 'shadow-cyan-500/50' 
                                : 'shadow-purple-500/50';

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        {(() => {
                                            const card = (
                                                <div className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClass} shadow-lg ${glowClass}`}>
                                                            <Icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-sm text-gray-400">{item.period}</span>
                                                    </div>
                                                    
                                                    <h3 className="text-xl font-bold text-white mb-1">
                                                        {item.title}
                                                    </h3>
                                                    
                                                    <p className={`text-sm font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r ${colorClass}`}>
                                                        {item.company}
                                                    </p>
                                                    
                                                    {item.description && (
                                                        <p className="text-gray-400 text-sm">
                                                            {item.description}
                                                        </p>
                                                    )}

                                                    {/* Glow effect */}
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                                                </div>
                                            );

                                            return item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    {card}
                                                </a>
                                            ) : (
                                                card
                                            );
                                        })()}
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colorClass} shadow-lg ${glowClass} border-4 border-[#0a0a0a] animate-pulse`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm">
                            <p className="text-gray-300">
                                Continuously learning new frameworks, AI concepts, and system design principles to grow as a versatile engineer.
                            </p>
                        </div>
                    </motion.div>
            </div>
        </section>
    );
}

