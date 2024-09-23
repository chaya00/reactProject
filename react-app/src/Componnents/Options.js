import React from "react";
import { Link } from "react-router-dom";
import { store } from './app/store';
import Button from '@mui/material/Button';

const Options = () => {

    const currentUser = store.getState().user.currentUser;
    const isAdmin = store.getState().user.isAdmin;


    return (
        <div dir="rtl">
            {currentUser !== null && <h1>שלום לך {currentUser.name}</h1>}

            <Link to="/ListOrderProduct">
                <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>להזמנת חוויה</Button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/ListLend">
                <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>לצפיה בהזמנות קודמות שלך</Button>
            </Link>

            {isAdmin &&

                <>
                    <br></br>
                    <br></br>
                    <Link to='../ListUser'>
                        <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>לקוחות</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to='../ListCategory'>
                        <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>קטגוריות</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to='../ListComment'>
                        <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>תגובות</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to='../ListLend/0'>
                        <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>השאלות</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to='../ListProduct'>
                        <Button style={{ backgroundColor: "red", width: "220px", height: "60px", fontSize: "20px", color: "white" }}>מוצרים</Button>
                    </Link>
                </>


            }
        </div>
    )
}
export default Options




