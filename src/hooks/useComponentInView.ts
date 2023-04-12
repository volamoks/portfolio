import { useEffect, useState } from 'react';

export const useComponentInView = (id: string, rootMargin = '-10px 0px'): boolean => {
    const [isComponentInView, setIsComponentInView] = useState(false);

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsComponentInView(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0.1,
            },
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [id, rootMargin]);

    return isComponentInView;
};
