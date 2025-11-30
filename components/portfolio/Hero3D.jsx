import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Create main geometric shape - Icosahedron with wireframe
        const geometry = new THREE.IcosahedronGeometry(2, 0);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ 
            color: 0x00f0ff,
            linewidth: 2
        });
        const wireframe = new THREE.LineSegments(edges, material);
        scene.add(wireframe);

        // Add glowing core sphere
        const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xa855f7,
            transparent: true,
            opacity: 0.8
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        // Add particle field
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.6
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 5;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate main shape
            wireframe.rotation.x += 0.001;
            wireframe.rotation.y += 0.002;
            
            // Pulse core sphere
            sphere.scale.x = sphere.scale.y = sphere.scale.z = 1 + Math.sin(Date.now() * 0.002) * 0.1;
            
            // Rotate particles slowly
            particlesMesh.rotation.y += 0.0005;
            
            // Interactive camera movement
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            geometry.dispose();
            edges.dispose();
            material.dispose();
            sphereGeometry.dispose();
            sphereMaterial.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1e] to-[#0a0a0a]">
            {/* 3D Canvas */}
            <div ref={mountRef} className="absolute inset-0 z-0" />
            
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none z-10" />
            
            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient">
                            Hi, I'm Rakesh Reddy
                        </h1>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
                    >
                        
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Button>
                        
                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            className="px-8 py-6 text-lg border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-xl backdrop-blur-sm transition-all duration-300"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="cursor-pointer"
                    onClick={() => scrollToSection('about')}
                >
                    <ChevronDown className="w-8 h-8 text-cyan-400" />
                </motion.div>
            </motion.div>
        </div>
    );
}