import { MyContext } from '@/components/mainPage';
import { useRouter } from 'next/router';
import { useContext, useCallback } from 'react';

interface IHandleClick {
    myRef: React.RefObject<HTMLElement> | undefined;
    behavior: ScrollBehavior | undefined;
}

export const useGoToPageByRef = () => {
    const router = useRouter();
    const refName = router.query.ref as string;
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };

    const handleClick = useCallback(() => {
        if (!ref) return;
        if (refName && refName in ref) {
            ref[refName]?.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [refName, ref]);

    if (!ref) {
        return { ref: null, handleClick: () => {} };
    }

    return { ref, handleClick };
};
