import { createSlice } from '@reduxjs/toolkit'
import { addLend, deleteLend, fetchAllLends, getLendById, updateLend } from './LendApi'

const initialState = {
    arrLends: [],
    status: null,
    // timeLendsTemp: [],
    diary: [],
    times: [],
    numOfLends: 0
}
const hours=(item) =>{
    let n = 0
    const hours=[]
    hours[0]=(item.takeHour)
    hours[1]=(item.returnHour)
    // for (let i =item.takeHour; i <= item.returnHour; i++) {
    //     hours[n++] = i
    // }
    return hours;
}
export const LendSlice = createSlice({
    name: 'lend',
    initialState,
    extraReducers: (builder) => {
        // 1
        builder.addCase(fetchAllLends.fulfilled, (state, action) => {
            state.arrLends = action.payload;
            state.status = "fulfilled";
            state.diary=state.arrLends.map(item=>item.date)
            state.times=state.arrLends.map(item=>hours(item))

        })
            .addCase(fetchAllLends.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchAllLends.rejected, (state, action) => {
                state.status = "failed"
            })
            //2
            .addCase(getLendById.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getLendById.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getLendById.rejected, (state, action) => {
                state.status = "rejected";
            })
            //3
            .addCase(addLend.fulfilled, (state, action) => {
                state.status = "fulfilled";
                console.log("action",action.payload);
                // let n = 0
                // for (let i = action.payload.takeHour; i <= action.payload.returnHour; i++) {
                //     state.timeLendsTemp[n++] = i
                // }
                // state.diary[state.numOfLends] = action.payload.date;
                // state.times[state.numOfLends] = state.timeLendsTemp;
                // state.numOfLends++

            })
            .addCase(addLend.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(addLend.rejected, (state, action) => {
                state.status = "rejected";
            })
            //4
            .addCase(deleteLend.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(deleteLend.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(deleteLend.rejected, (state, action) => {
                state.status = "rejected";
            })
            //5
            .addCase(updateLend.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(updateLend.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(updateLend.rejected, (state, action) => {
                state.status = "rejected";
            })
    }
})

export default LendSlice.reducer;
