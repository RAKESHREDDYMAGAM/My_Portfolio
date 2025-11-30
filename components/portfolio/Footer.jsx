import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Rakesh Reddy
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}