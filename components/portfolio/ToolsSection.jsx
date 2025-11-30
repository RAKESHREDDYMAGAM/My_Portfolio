import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const tools = [
    {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        glow: 'shadow-orange-500/40',
        border: 'border-orange-500/30'
    },
    {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        glow: 'shadow-gray-500/40',
        border: 'border-gray-500/30'
    },
    {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        glow: 'shadow-sky-500/40',
        border: 'border-sky-500/30'
    },
    {
        name: 'Eclipse',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
        glow: 'shadow-purple-500/40',
        border: 'border-purple-500/30'
    },
    {
        name: 'Postman',
        logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        glow: 'shadow-orange-400/40',
        border: 'border-orange-400/30'
    },
    {
        name: 'n8n',
        logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg',
        glow: 'shadow-pink-500/40',
        border: 'border-pink-500/30'
    }
];

export default function ToolsSection() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <section className="py-20 px-6 bg-[#080808] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(192,132,252,0.15), transparent 40%)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        Workflow
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                        Tools I Use
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated stack of tools I rely on to design, build, and ship immersive digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group"
                        >
                            <div
                                className={`h-full rounded-2xl border ${tool.border} bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-3 py-6 shadow-lg ${tool.glow} transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl`}
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={tool.logo}
                                        alt={tool.name}
                                        fill
                                        sizes="64px"
                                        className="object-contain drop-shadow-lg"
                                    />
                                </div>
                                <p className="text-white font-medium text-sm tracking-wide">{tool.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


