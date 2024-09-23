

import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { reset } from "./features/Product/ProductSlice";


export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reset())
    }, [])
    return (
        <>
            <h1>ok</h1>
        </>
    )
}