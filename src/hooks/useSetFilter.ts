import React, { useCallback } from 'react';

export const useSetFilter = <T>(initValue: T) => {
    const [filter, setFilter] = React.useState<T>(initValue);

    const handleSetFilter = useCallback((filterData: T) => {
        setFilter(filterData);
    }, []);
    return { filter, handleSetFilter };
};
