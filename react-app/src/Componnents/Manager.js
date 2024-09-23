import * as React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Manager() {


    return (
        <>
            <Link to='../ListUser'>
                <Button style={{ width: "150px", height: "60px", color: "white", backgroundColor: 'black', fontSize: "25px", fontFamily: "Segoe UI", borderStyle: "none" }}>Users</Button>
            </Link>
            <Link to='../ListCategory'>
                <Button style={{ width: "150px", height: "60px", color: "white", backgroundColor: 'black', fontSize: "25px", fontFamily: "Segoe UI", borderStyle: "none" }}>Categories</Button>
            </Link>
            <Link to='../ListComment'>
                <Button style={{ width: "150px", height: "60px", color: "white", backgroundColor: 'black', fontSize: "25px", fontFamily: "Segoe UI", borderStyle: "none" }}>Comments</Button>
            </Link>
            <Link to='../ListLend'>
                <Button style={{ width: "150px", height: "60px", color: "white", backgroundColor: 'black', fontSize: "25px", fontFamily: "Segoe UI", borderStyle: "none" }}>Lends</Button>
            </Link>
            <Link to='../ListProduct'>
                <Button style={{ width: "150px", height: "60px", color: "white", backgroundColor: 'black', fontSize: "25px", fontFamily: "Segoe UI", borderStyle: "none" }}>Products</Button>
            </Link>
        </>
    )
}
