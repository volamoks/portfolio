import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
