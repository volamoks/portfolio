import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useGoToPage = () => {
    const router = useRouter();

    const handleGoToPage = useCallback(
        (url: string) => {
            router.push(url);
        },
        [router],
    );

    return { handleGoToPage };
};
