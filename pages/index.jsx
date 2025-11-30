import React from 'react';
import Hero3D from '../components/portfolio/Hero3D';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ToolsSection from '../components/portfolio/ToolsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
            {/* Hero with 3D animation */}
            <Hero3D />
            
            {/* About Section */}
            <AboutSection />
            
            {/* Skills Section */}
            <SkillsSection />

            {/* Tools Section */}
            <ToolsSection />
            
            {/* Projects Section */}
            <ProjectsSection />
            
            {/* Experience & Achievements */}
            <ExperienceSection />
            
            {/* Contact Section */}
            <ContactSection />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}