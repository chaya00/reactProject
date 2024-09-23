import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchAllProducts, addProduct } from './ProductApi';
import CircularProgress from '@mui/material/CircularProgress'
import { useLocation } from 'react-router-dom'
import Product from './Product'
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react'
import Typography from '@mui/material/Typography';
import ListCategory from '../category/ListCategory';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { store } from '../../app/store'

const ListProduct = () => {
    const status = useSelector(s => s.product.status)
    const arrProducts = useSelector(s => s.product.arrProducts)
    const update = useSelector(s => s.product.update)
    const location = useLocation();
    let num = location.state;
    const admin = store.getState().user.isAdmin;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [update])

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
                {arrProducts.map((item) => num != null ? item.categoryId == num && <Product product={item} ></Product> : <Product product={item}></Product>)}
            </div>
            {admin && <Link to="/AddProduct" >
                <Button style={{
                    width: "150px", height: "80px", color: "red", fontSize: "15px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "blue", borderTopWidth: "4px", borderRight: "none"
                }}>
                    הוספת מוצר</Button></Link>}

        </>
    )
}
export default ListProduct;
