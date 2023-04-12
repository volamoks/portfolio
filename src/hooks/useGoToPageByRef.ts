import { MyContext } from '@/components/mainPage';
import { useContext, useCallback } from 'react';

export const useGoToPageByRef = () => {
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };
    if (!ref) return null;

    const handleClick = useCallback((myRef: React.RefObject<HTMLElement>) => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return { ref, handleClick };
};
