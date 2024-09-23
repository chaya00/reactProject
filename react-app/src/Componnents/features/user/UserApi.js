import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



//1
export const fetchAllUsers = createAsyncThunk("getAllUsers", async () => {
    const { data } = await axios.get("https://localhost:7092/api/User/getusers");
    return data;
})
//2
export const getUserById = createAsyncThunk("getUserById", async (id) => {
    const { data } = await axios.get(`https://localhost:7092/api/User/getById/${id}`);
    return data;
})
//3
export const getUserByPassword = createAsyncThunk("getUserByPassword", async (password) => {
    const { data } = await axios.get(`https://localhost:7092/api/User/getByPassword/${password}`);
    return data;
})
//4
export const getUserByName = createAsyncThunk("getByName", async (name) => {
    console.log("getUserByName");
    const { data } = await axios.get(`https://localhost:7092/api/User/getByUserName/${name}`);
    return data;
})
//5
export const addUser = createAsyncThunk("addUser", async (user) => {
    const { data } = await axios.post(`https://localhost:7092/api/User/AddUser`, user);
    return data;
})
//6
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
    const { data } = await axios.delete(`https://localhost:7092/api/User/delete/${id}`);
    return data;
})
//7
export const updateUser = createAsyncThunk("updateUser", async (id) => {
    const { data } = await axios.put(`https://localhost:7092/api/User/Update/${id}`);
    return data;
})
//8
export const login = createAsyncThunk("login", async ({name, password}) => {
    const { data } = await axios.post(`https://localhost:7092/api/User/login/${name},${password}`);
    return data;
})