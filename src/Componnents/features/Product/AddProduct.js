import React from "react";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "./ProductApi";
import { fetchAllCategories } from "../category/CategoryApi";
import { useEffect } from 'react'



const AddProduct = () => {

    const dispatch = useDispatch();
    const arrCategories = useSelector(s => s.category.arrCategories)
    let arrNamesCategories = [];
    arrCategories.map((item) => arrNamesCategories?.push(item.name))
    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])
    const save = (e) => {
        e.preventDefault();
        let categoryId =arrCategories.filter((x)=>x.name==(e.target[6].value))
        const product = {
            name: e.target[0].value,
            company: e.target[1].value,
            amount: e.target[2].value,
            miniDescription: e.target[3].value,
            description: e.target[4].value,
            price: e.target[5].value,
            categoryId: categoryId[0].id
        }
        dispatch(addProduct(product)).then(() => {  })
    }
    return (
       
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
             {console.log("return")}
            <h1>הוספת מוצר</h1>
            <form onSubmit={save}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
                    <TextField
                        label="שם"
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="חברה"
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="כמות"
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="תיאור קצר"
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="תיאור"
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="מחיר"
                        variant="standard"
                        size="small"
                    />
                    <select style={{ height: '50px' }}>{arrNamesCategories.map((i) => <option>{i}</option>)}</select>

                </div>
                <button id="submit" type='submit'>אישור הפרטים</button>

            </form>
        </div>
    )



}
export default AddProduct;