export const useNavigateById = () => {
    const handleGoToById = (link: string) => {
        document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    };
    return { handleGoToById };
};
