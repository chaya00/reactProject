import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { logDOM } from '@testing-library/react';

//1
export const fetchAllCategories=createAsyncThunk("getAllCategories",async()=>{
    console.log("fetchAllCategories");
    const {data}=await axios.get("https://localhost:7092/api/Category/getcategories");
    return data;
})
//2
export const getCategoryById=createAsyncThunk("getCategoryById",async(id)=>{
    const {data}=await axios.get(`https://localhost:7092/api/Category/getById/${id}`);
    return data;
})
//3
export const getCategoryByName=createAsyncThunk("getByName",async(name)=>{
    const {data}=await axios.get(`https://localhost:7092/api/User/GetByCategoryName/${name}`);
    return data;
})
//4
export const addCategory=createAsyncThunk("addCategory",async(category)=>{
    const {data}=await axios.post(`https://localhost:7092/api/Category/AddCategory`,category);
    console.log({data});
    return data;
})
//5
export const deleteCategory=createAsyncThunk("deleteCategory",async(id)=>{
    const {data}=await axios.delete(`https://localhost:7092/api/Category/delete/${id}`);
    return data;
})
//6
export const updateCategory=createAsyncThunk("updateCategory",async(id)=>{
    const {data}=await axios.put(`https://localhost:7092/api/Category/Update/${id}`);
    return data;
})