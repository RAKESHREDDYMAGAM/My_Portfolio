import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const handleProjectLink = (link) => {
        if (typeof window === 'undefined') {
            return;
        }

        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const handleProjectKeyDown = (event, link) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleProjectLink(link);
        }
    };

    const projects = [
        {
            title: 'Book Showcase',
            description:
                'A simple, interactive space where visitors can browse curated books with clean visuals, intuitive navigation, and thoughtful typography.',
            link: 'https://rakeshreddymagam.github.io/Bookshowcase/',
            image: '/logo.2.png',
            tags: ['HTML', 'CSS', 'Bootstrap'],
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            title: 'SkillPort',
            description:
                'A comprehensive platform for tracking coding practice progress on LeetCode, GeeksforGeeks, and other platforms. Features mentorship, leaderboards, analytics, and browser extension integration.',
            link: 'https://skillport-backend.onrender.com',
            image: '/logo.2.png',
            tags: ['HTML', 'CSS', 'Node', 'MongoDB'],
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and creative projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-4"
                            role="link"
                            tabIndex={0}
                            onClick={() => handleProjectLink(project.link)}
                            onKeyDown={(event) => handleProjectKeyDown(event, project.link)}
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 mb-4">
                                        Tech stack: HTML · CSS · Bootstrap
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-500/60 to-blue-500/60 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-500/80"
                                        aria-label="View the Book Showcase project"
                                        onClick={(event) => event.stopPropagation()}
                                    >
                                        View Project
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}