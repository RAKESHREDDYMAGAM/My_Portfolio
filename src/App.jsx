import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Tools from './sections/Tools';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/toaster';
import './styles/global.css';

function App() {
    return (
        <BrowserRouter basename="/My_Portfolio">
            <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
                <Hero />
                <About />
                <Skills />
                <Tools />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
                <Toaster />
            </div>
        </BrowserRouter>
    );
}

export default App;

