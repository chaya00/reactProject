import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

//1
export const fetchAllComments=createAsyncThunk("getAllComments",async()=>{
    const {data}=await axios.get("https://localhost:7092/api/Comment/GetComments");
    return data;
})
//2
export const getCommentById=createAsyncThunk("getCommentById",async(id)=>{
    const {data}=await axios.get(`https://localhost:7092/api/Comment/GetById/${id}`);
    return data;
})
//3

export const addComment=createAsyncThunk("addComment",async(lend)=>{
    const {data}=await axios.post(`https://localhost:7092/api/Comment/AddComment`);
    return data;
})
//4
export const deleteComment=createAsyncThunk("deleteComment",async(id)=>{
    const {data}=await axios.delete(`https://localhost:7092/api/Comment/delete/${id}`);
    return data;
})
//5
export const updateComment=createAsyncThunk("updateComment",async(id)=>{
    const {data}=await axios.put(`https://localhost:7092/api/Comment/Update/${id}`);
    return data;
})