import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../components/useInView';
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_65jrokc';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_zi89y67';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'eyJMxZaS3Kp_R8qec';

export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSending) {
            return;
        }

        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            const message = 'Please fill out all fields before sending.';
            setStatusMessage({ type: 'error', text: message });
            toast.error(message);
            return;
        }

        if (!emailPattern.test(trimmedEmail)) {
            const message = 'Please provide a valid email address.';
            setStatusMessage({ type: 'error', text: message });
            toast.error(message);
            return;
        }

        if (typeof window === 'undefined' || !window.emailjs) {
            const message = 'Email service is loading. Please wait a few seconds and try again.';
            setStatusMessage({ type: 'error', text: message });
            toast.error(message);
            return;
        }

        setIsSending(true);
        setStatusMessage(null);

        window.emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_name: trimmedName,
                from_email: trimmedEmail,
                message: trimmedMessage,
                reply_to: trimmedEmail,
            }
        ).then(() => {
            const successText = 'Your message has been sent successfully!';
            setStatusMessage({ type: 'success', text: successText });
            toast.success(successText);
            setFormData({ name: '', email: '', message: '' });
        }).catch((error) => {
            console.error('EmailJS send error:', error);
            const failureText = 'Failed to send message. Please try again later.';
            const detail = error?.text || error?.statusText || error?.message;
            setStatusMessage({ type: 'error', text: detail ? `${failureText} ${detail}` : failureText });
            toast.error(failureText);
        }).finally(() => {
            setIsSending(false);
        });
    };

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const initializeEmailJS = () => {
            if (window.emailjs) {
                window.emailjs.init(EMAILJS_PUBLIC_KEY);
            }
        };

        const existingScript = document.getElementById('emailjs-sdk');

        if (existingScript) {
            initializeEmailJS();
            return;
        }

        const script = document.createElement('script');
        script.id = 'emailjs-sdk';
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.async = true;
        script.onload = initializeEmailJS;
        script.onerror = () => {
            const message = 'Email service failed to load. Please refresh the page.';
            setStatusMessage({ type: 'error', text: message });
            toast.error(message);
        };

        document.body.appendChild(script);
    }, []);


    const socialLinks = [
        { icon: Mail, label: 'Email', href: 'mailto:rakeshreddymagam@gmail.com', color: 'from-cyan-500 to-blue-500' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/RAKESHREDDYMAGAM', color: 'from-gray-500 to-gray-400' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakeshreddy-magham', color: 'from-blue-600 to-blue-500' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mr_reddy__111/', color: 'from-pink-400 to-pink-300' }
    ];

    return (
        <section id="contact" className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to create something amazing
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <Input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your project..."
                                        rows={6}
                                        className="bg-gray-900/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500 resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full py-6 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-70"
                                    aria-busy={isSending}
                                >
                                    {isSending ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                                {statusMessage && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-sm ${statusMessage.type === 'success' ? 'text-emerald-300' : 'text-rose-300'} mt-2`}
                                        aria-live="polite"
                                    >
                                        {statusMessage.text}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        {/* Quick Contact Info */}
                        <div className="p-8 rounded-2xl border border-purple-500/20 bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300" style={{ position: 'relative', zIndex: 1 }}>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Let's Connect
                            </h3>
                            <div className="space-y-4" style={{ position: 'relative', zIndex: 2 }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 100 }}>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <button
                                            type="button"
                                            onClick={async () => {
                                                const email = 'rakeshreddymagam@gmail.com';
                                                const mailtoLink = `mailto:${email}?subject=Contact%20from%20Portfolio`;
                                                
                                                try {
                                                    const link = document.createElement('a');
                                                    link.href = mailtoLink;
                                                    link.style.position = 'fixed';
                                                    link.style.left = '-9999px';
                                                    document.body.appendChild(link);
                                                    link.click();
                                                    
                                                    setTimeout(() => {
                                                        document.body.removeChild(link);
                                                    }, 100);
                                                    
                                                    setTimeout(async () => {
                                                        try {
                                                            await navigator.clipboard.writeText(email);
                                                            toast.success('Email copied to clipboard!');
                                                        } catch (err) {
                                                        }
                                                    }, 500);
                                                } catch (error) {
                                                    try {
                                                        await navigator.clipboard.writeText(email);
                                                        toast.success('Email copied to clipboard!');
                                                    } catch (err) {
                                                        toast.error('Please copy the email manually: ' + email);
                                                    }
                                                }
                                            }}
                                            className="text-white hover:text-cyan-300 transition-colors duration-200 hover:underline cursor-pointer bg-transparent border-0 p-0 text-left font-normal"
                                            style={{ 
                                                position: 'relative',
                                                zIndex: 1000,
                                                display: 'inline-block',
                                                pointerEvents: 'auto',
                                                padding: '2px 0',
                                                minHeight: '20px',
                                                outline: 'none',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            rakeshreddymagam@gmail.com
                                        </button>
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 my-4" />

                                <p className="text-gray-400">
                                    I'm always interested in hearing about new projects and opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Follow Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks
                                    .filter(social => social.label !== 'Email')
                                    .map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                                className="group relative p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer block"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                        <Icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="text-white font-medium">{social.label}</span>
                                                </div>
                                                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`} />
                                            </motion.a>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-green-400 font-medium">Available for new projects</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

