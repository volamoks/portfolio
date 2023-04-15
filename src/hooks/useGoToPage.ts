import { useRouter } from 'next/router';

export const useGoToPage = () => {
    const router = useRouter();

    const handleGoToPage = (url: string) => {
        router.push(url);
    };
    return { handleGoToPage };
};
