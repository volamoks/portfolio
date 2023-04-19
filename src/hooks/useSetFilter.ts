import React, { useCallback } from 'react';

export const useSetFilter = <T>(value: T) => {
    const [filter, setFilter] = React.useState<T>(value);

    const handleSetFilter = useCallback((filter: T) => {
        setFilter(filter);
    }, []);
    return { filter, handleSetFilter };
};
