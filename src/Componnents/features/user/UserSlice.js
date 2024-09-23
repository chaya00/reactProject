import { createSlice } from '@reduxjs/toolkit'
import { getUserByPassword, fetchAllUsers, addUser, deleteUser, getUserById, getUserByName, updateUser, login } from './UserApi'

const initialState = {
    currentUser: null,
    isAdmin: false,
    arrUsers: [],
    status: null,
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        // 1
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.arrUsers = action.payload;
            state.status = "fulfilled";
        })
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = "failed"
            })
            //2
            .addCase(getUserById.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getUserById.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.status = "rejected";
            })
            //3
            .addCase(getUserByPassword.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.currentUser = action.payload;

            })
            .addCase(getUserByPassword.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getUserByPassword.rejected, (state, action) => {
                state.status = "rejected";
            })
            //4
            .addCase(getUserByName.fulfilled, (state, action) => {
                // state.currentUser = action.payload;
                state.status = "fulfilled";
            })
            .addCase(getUserByName.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getUserByName.rejected, (state, action) => {
                state.status = "rejected";
            })
            //5
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.currentUser = action.payload;
                state.arrUsers.push(action.payload);
                state.isAdmin = action.payload.role === 'admin' ? true : false;
            })
            .addCase(addUser.pending, (state, action) => {
                state.status = "pending";

            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = "rejected";
            })
            //6
            .addCase(deleteUser.fulfilled, (state, action) => {
                let index = state.arrUsers.findIndex(x => x.id == action.payload.id)
                state.arrUsers.splice(index, 1);
                state.status = "fulfilled";
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = "rejected";
            })
            //7
            .addCase(updateUser.fulfilled, (state, action) => {
                let index = state.arrUsers.findIndex(x => x.id == action.payload.id)
                state.arrUsers.splice(index, 1, action.payload);
                state.status = "fulfilled";
            })
            .addCase(updateUser.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = "rejected";
            })
            //8
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.currentUser = action.payload.user;
                state.status = "fulfilled";
                state.isAdmin = state.currentUser.role === 'admin' ? true : false
            })
            .addCase(login.pending, (state, action) => {
                // state.status = "pending";
            })
            .addCase(login.rejected, (state, action) => {
                // state.status = "rejected";
            })

    }
})


export default UserSlice.reducer;


