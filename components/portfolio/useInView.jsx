import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (options.triggerOnce) {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                } else {
                    setInView(entry.isIntersecting);
                }
            },
            {
                threshold: options.threshold || 0,
                rootMargin: options.rootMargin || '0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.threshold, options.triggerOnce, options.rootMargin]);

    return [ref, inView];
}