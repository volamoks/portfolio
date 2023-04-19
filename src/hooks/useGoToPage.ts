import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useGoToPage = () => {
    const router = useRouter();
    const { pathname, query } = router;

    const handleGoToPage = useCallback(
        (url: string) => {
            router.push(url);
            // router.replace(
            //     {
            //         pathname,
            //         query,
            //     },
            //     pathname,
            //     { shallow: true },
            // );
        },

        [router],
    );

    return { handleGoToPage };
};
