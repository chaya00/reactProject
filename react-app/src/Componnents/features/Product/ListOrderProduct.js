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
import OrderProduct from './OrderProduct';
import { store } from '../../app/store';


const ListOrderProduct = () => {
    const status = useSelector(s => s.product.status)
    const arrProducts = useSelector(s => s.product.arrProducts)
    const currentUser = store.getState().user.currentUser;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    return (
        <>   <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems:'center'    
        }}>
            {currentUser !== null && <h1>שלום לך {currentUser.name}</h1>}
            {status == "pending" && <CircularProgress />}
            <div style={{
                display: 'flex', flexDirection: 'column',
                flexWrap: 'wrap',
                // width:'500px',height:'1000px',
                justifyContent: 'center',
                // alignContent: 'space-around',
                alignItems: 'center',
                gap: '60px', justifyContent: 'space-around'
            }}>
                {arrProducts.map((item) => <OrderProduct product={item} ></OrderProduct>, <Button></Button>)}
                <Link to={`../AddLend`} >
                <Button style={{
                    width: "150px", height: "60px", color: "red"
                    , backgroundColor: 'white', fontSize: "15px", fontFamily: "Segoe UI", border: '0px'
                }}>המשך לתשלום</Button>
            </Link>
            </div>
        </div>
        </>
    )
}
export default ListOrderProduct;
