import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataType } from '../../types';

interface DataState {
    users: DataType[];
    filterCriteria: string; 
}

const initialState: DataState = {
    users: [],
    filterCriteria: '', 
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<DataType[]>) {
            state.users = action.payload;
        },
        setFilterCriteria(state, action: PayloadAction<string>) {
            state.filterCriteria = action.payload;
        },
    },
});

export const { setData, setFilterCriteria } = dataSlice.actions;
export default dataSlice.reducer;
