import React, { useState } from "react";
import pic1 from '../../img/sir1.jpg'
import { addLend } from "../lend/LendApi";
import { store } from '../../app/store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddLend from "../lend/AddLend";
import sir1 from '../../img/sir1.jpg'
import sir2 from '../../img/sir2.jpg'
import sir3 from '../../img/sir3.jpg'
import sir4 from '../../img/sir4.jpg'
import sir5 from '../../img/sir5.jpg'
import sir6 from '../../img/sir6.png'
import sir7 from '../../img/sir7.jpg'
import sir8 from '../../img/sir8.jpg'
import sir9 from '../../img/sir9.jpg'
import sir10 from '../../img/sir10.jpg'
import sir11 from '../../img/sir11.jpg'
import tra1 from '../../img/tra1.png'
import tra2 from '../../img/tra2.png'
import tra3 from '../../img/tra3.jpg'
import tra4 from '../../img/tra4.png'
import tra5 from '../../img/tra5.jpg'
import tra6 from '../../img/tra6.jpg'
import tra8 from '../../img/tra8.png'
import tra9 from '../../img/tra9.jpg'
import tra10 from '../../img/tra10.jpg'
import tra11 from '../../img/tra11.jpg'
import tra12 from '../../img/tra12.jpg'
import tra13 from '../../img/tra13.jpg'
import tra14 from '../../img/tra14.jpg'
import tra15 from '../../img/tra15.jpg'
import tra16 from '../../img/tra16.jpg'
import tra17 from '../../img/tra16.jpg'
import { getUserByName } from "../user/UserApi";
import { Tooltip } from "@mui/material";
import { addToArray, removeFromArray } from './ProductSlice'
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useDispatch, useSelector } from 'react-redux';


const OrderProduct = ({ product }) => {

    let currentUser;
    const arrCurrentProduct = useSelector(s => s.product.arrCurrentProduct)
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const image2 = [tra1, tra2, tra3, tra4, tra5, tra6, tra8, tra9, tra10, tra11, tra12, tra13, tra14, tra15, tra16, tra17]

    const add = (e) => {
        if (e.target.checked) {
            dispatch(addToArray(product))
        }
        else {
            dispatch(removeFromArray(product))
        }
    }
    return (<>
        <div dir="rtl"
            style={{ display: 'flex', flexDirection: 'row', width: '900px', height: '220px', justifyContent: 'center', gap: '50px', }}>
            <div style={{ backgroundImage: `url(${image2[product.id]})`, width: '450px', height: '220px' }}></div>
            <p>{product.name}</p>
            <p>{product.miniDescription}</p>

            {product.amount == 0 && <h5>אזל מהמלאי</h5>}

            {arrCurrentProduct?.findIndex(x => x.id == product.id)!=0 &&
                <Tooltip title="להזמנת המוצר">
                    <Checkbox onInput={(e) => add(e)} style={{ backgroundSize: "150px", fontSize: "20px", color: "red", marginTop: "80px", marginRight: "35px" }} icon={<QuestionMarkIcon />} checkedIcon={<CheckIcon />} />
                </Tooltip>
            }

            {(arrCurrentProduct?.findIndex(x => x.id == product.id)) ==0&&
                <Tooltip title="להסרת המוצר">
                    <Checkbox onInput={(e) => add(e)} style={{ backgroundSize: "150px", fontSize: "20px", color: "red", marginTop: "80px", marginRight: "35px" }} icon={<CheckIcon />} checkedIcon={<QuestionMarkIcon />} />
                </Tooltip>
            }
        </div>
    </>)

}
export default OrderProduct;