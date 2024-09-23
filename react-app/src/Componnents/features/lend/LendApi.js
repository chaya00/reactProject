import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

//1
export const fetchAllLends=createAsyncThunk("getAllLends",async()=>{
    const {data}=await axios.get("https://localhost:7092/api/Lend/GetLends");
    return data;
})
//2
export const getLendById=createAsyncThunk("getLendById",async(id)=>{
    const {data}=await axios.get(`https://localhost:7092/api/Lend/GetById/${id}`);
    return data;
})
//3

export const addLend=createAsyncThunk("addLend",async(lend)=>{
    console.log({lend});
    const {data}=await axios.post(`https://localhost:7092/api/Lend/AddLend`,lend);
    return data;
})
//4
export const deleteLend=createAsyncThunk("deleteLend",async(id)=>{
    const {data}=await axios.delete(`https://localhost:7092/api/Lend/delete/${id}`);
    return data;
})
//5
export const updateLend=createAsyncThunk("updateLend",async(id)=>{
    const {data}=await axios.put(`https://localhost:7092/api/Lend/Update/${id}`);
    return data;
})