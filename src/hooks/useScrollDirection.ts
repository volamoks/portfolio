import { useCallback, useEffect, useState } from 'react';
import { useScrollDirection } from './UseScroll';

export const UseScrollDirections = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const scrollDirection = useScrollDirection();
    const setScroll = useCallback(() => {
        if (scrollDirection === 'down') {
            setIsScroll(true);
        }

        if (scrollDirection === 'up') {
            setIsScroll(false);
        }
    }, [scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', setScroll);
        return () => {
            window.removeEventListener('scroll', setScroll);
        };
    }, [setScroll]);

    return { isScroll, scrollDirection };
};
