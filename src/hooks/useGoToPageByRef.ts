import { MyContext } from '@/components/mainPage';
import { useContext, useCallback } from 'react';

interface IHandleClick {
    myRef: React.RefObject<HTMLElement> | undefined;
    behavior: ScrollBehavior | undefined;
}

export const useGoToPageByRef = () => {
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };

    if (!ref) {
        return { ref: null, handleClick: () => {} };
    }

    const handleClick = useCallback((myRef: React.RefObject<HTMLElement> | undefined) => {
        myRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return { ref, handleClick };
};
