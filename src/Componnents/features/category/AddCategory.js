
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from "react";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, fetchAllCategories } from "../category/CategoryApi";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    let nav = useNavigate();


    const dispatch = useDispatch();
    // const arrCategories = useSelector(s => s.category.arrCategories)
    // let arrNamesCategories = [];
    // arrCategories.map((item) => arrNamesCategories?.push(item.name))
    // useEffect(() => {
    //     dispatch(fetchAllCategories())
    // }, [])
    const save = (e) => {
        e.preventDefault();

        const category = {
            name: e.target[0].value,
            descreption: e.target[1].value
        }
        dispatch(addCategory(category)).then(() => { 
            nav(`../ListCategory`)    

         })
    }
    return (
        <>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
             {console.log("return")}
            <h1>הוספת קטגוריה</h1>
            <form onSubmit={save}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
                    <TextField
                        label="שם"
                        variant="standard"
                        size="small"
                    />
                      <TextField
                        label="תיאור"
                        variant="standard"
                        size="small"
                    />

                </div>
                <button id="submit" type='submit'>אישור הפרטים</button>

            </form>
        </div>
        </>
    )
}
export default AddCategory;
