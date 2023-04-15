import axios, { AxiosResponse } from 'axios';

import { useState, useEffect } from 'react';

export const useFetchData = <T>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(null as any);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T[]> = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};
