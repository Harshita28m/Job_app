import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../utilities/apiclient";

export const getAlljobs = createAsyncThunk("/alljobs", async () => {
    const response = await getJobs();
    console.log('data is', response.data);
    return response.data;
})
export const jobSlice = createSlice({
    name: 'jobSlice',
    initialState: { job: [],loading:false },
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getAlljobs.pending, (state, action) => {
            console.log('state is pending', state, "action is", action);
            state.loading = true;
        }).addCase(getAlljobs.fulfilled, (state, action) => {
            console.log('state is fulfilled', state, "action is", action);
            state.job = action.payload;
            state.loading = false;
        }).addCase(getAlljobs.rejected, (state, action) => {
            console.log('state is rejected', state, "action is", action);
        })
    },
})
export default jobSlice.reducer