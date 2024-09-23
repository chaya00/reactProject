import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { fetchAllCategories } from './CategoryApi';
import CircularProgress from '@mui/material/CircularProgress'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Category from './Category'

const ListCategory = () => {
    const { status } = useSelector(s => s.category)
    const arrCategories = useSelector(s => s.category.arrCategories)
    const admin = useSelector(s => s.user.isAdmin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])


    return (
        <>



            {status == "pending" && <CircularProgress />}
            <div style={{
                display: 'flex', flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'space-around',
                alignItems: 'center',
                gap: '60px', justifyContent: 'space-around'
            }}>
                {arrCategories.map((item) => <Category category={item}></Category>)}
            </div>
            {admin && <Link to="/AddCategory" >
                <Button style={{
                    width: "150px", height: "80px", color: "red", fontSize: "15px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "blue", borderTopWidth: "4px", borderRight: "none"
                }}>
                    הוספת קטגוריה</Button></Link>}
        </>
    )

}
export default ListCategory;
