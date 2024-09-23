import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

//1
export const fetchAllProducts=createAsyncThunk("getAllProducts",async()=>{
    const {data}=await axios.get("https://localhost:7092/api/Product/GetProducts");
    return data; 
})
//2
export const getProductById=createAsyncThunk("getProductById",async(id)=>{
    const {data}=await axios.get(`https://localhost:7092/api/Product/GetById/${id.prodId}`);
    return data;
})
//3
export const getProductByName=createAsyncThunk("getByName",async(name)=>{
    const {data}=await axios.get(`https://localhost:7092/api/Product/GetByProductName/${name}`);
    return data;      
})
//4

export const addProduct=createAsyncThunk("addProduct",async(product)=>{
    const {data}=await axios.post(`https://localhost:7092/api/Product/AddProduct`,product);
    return data;
})
//5
export const deleteProduct=createAsyncThunk("deleteProduct",async(id)=>{
    const {data}=await axios.delete(`https://localhost:7092/api/Product/delete/${id}`);
    return data;
})
//6
export const updateProduct=createAsyncThunk("updateProduct",async(product)=>{
    const id=product.id;
    const {data}=await axios.put(`https://localhost:7092/api/Product/Update/${id}`,product);
    return data;
})