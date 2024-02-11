import { createSlice } from "@reduxjs/toolkit"; 3

const INITIAL_STATE = {
    data: {
        
    }
}

const arSlice = createSlice({
    name: "ar",
    initialState: INITIAL_STATE,
    reducers: {
        SET_INITIAL_STATE_AR: (state, action) => {
            state.data = INITIAL_STATE.data;
        },
    },
});

export const { } = arSlice.actions;
export default arSlice.reducer;