import React from "react"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import { store } from './app/store'
import { useEffect } from 'react';
import { Label } from "@mui/icons-material";


const NavBar = () => {
    const admin = useSelector(s => s.user.isAdmin)
    const user = useSelector(s => s.user.currentUser)
    const arrProducts = useSelector(s => s.product.arrCurrentProduct)
    const price = useSelector(s => s.product.price)


    return (<>

        <ButtonGroup aria-label="Basic button group" style={{ width: "2000px", justifyContent: "center", position: "sticky", top: "15px", boxShadow: "none", backgroundColor: "white" }}>
            { user != null &&
                <Link to={`/ListOrderProduct`}>
                    <Button style={{ width: "180px", height: "80px", color: "rgb(150, 60, 35)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "rgb(150, 60, 35)", borderTopWidth: "4px", borderRight: 'none' }}>
                        להזמנה
                    </Button>
                </Link>
            }
            {admin == false &&
                <Link to="/SignIn" style={{ position: "sticky", button: "15px" }}>
                    <Button
                        style={{ width: "180px", height: "80px", color: "black", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "black", borderTopWidth: "4px" }}>
                        הכנס כמנהל
                    </Button>
                </Link>}
            {admin == false && <Link to='/'>
                <Button
                    style={{ width: "180px", height: "80px", color: "red", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "red", borderTopWidth: "4px" }}>
                    עוד עלינו
                </Button>
            </Link>}
            {admin == false && <Link to='/'>
                <Button
                    style={{
                        width: "180px", height: "80px", color: "blue", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "blue", borderTopWidth: "4px", borderRight: "none"
                    }}>
                    צור קשר
                </Button>
            </Link>}
            <Link to='/ListProduct'>
                <Button
                    style={{ width: "180px", height: "80px", color: "rgb(4, 145, 28)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "rgb(4, 145, 28)", borderTopWidth: "4px" }}>
                    כל המוצרים
                </Button>
            </Link>
            {admin == false && <Link to='/SignIn'>
                <Button
                    style={{ width: "180px", height: "80px", color: "rgb(243, 220, 13)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderRight: "none", borderTopColor: "rgb(243, 220, 13)", borderTopWidth: "4px" }}>
                    לחגוג איתנו
                </Button>
            </Link>}
            <Link to='/ListCategory'>
                <Button
                    style={{ width: "180px", height: "80px", color: "rgb(227, 147, 19)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderRight: "none", borderTopColor: "rgb(227, 147, 19)", borderTopWidth: "4px" }}>
                    קטגוריות
                </Button>
            </Link>
            {admin == false && user != null &&
                <>
                    <Link to={`/ListLend/${user?.id}`}>
                        <Button style={{ width: "180px", height: "80px", color: "rgb(150, 60, 35)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "rgb(150, 60, 35)", borderTopWidth: "4px", borderRight: 'none' }}>
                            ההזמנות שלי
                        </Button>
                    </Link>
                </>
            }
            {admin &&
                <>
                    <Link to='../ListUser'>
                        <Button style={{ width: "180px", height: "80px", color: "rgb(243, 220, 13)", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "rgb(243, 220, 13)", borderTopWidth: "4px", borderRight: 'none' }}
                        >לקוחות
                        </Button>
                    </Link>

                    <Link to={`../ListComment/${undefined}`}>
                        <Button style={{ width: "180px", height: "80px", color: "red", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "red", borderTopWidth: "4px", borderRight: 'none' }}>
                            תגובות
                        </Button>
                    </Link>
                    <Link to='../ListLend/0'>
                        <Button style={{ width: "180px", height: "80px", color: "blue", fontSize: "20px", fontFamily: "Segoe UI", backgroundColor: "white", borderLeft: "none", borderBottom: "none", borderTopColor: "blue", borderTopWidth: "4px", borderRight: 'none' }}>
                            השאלות
                        </Button>
                    </Link>

                </>

            }


            {arrProducts.length > 0 &&
            <fieldset>
                <div style={{dir:'rtl'}}>
                    <label>                    :הזמנתך הפעילה
                    </label>
                    {arrProducts.map((x) =>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '150px' }}>
                            
                            <h5>{x.name}</h5>
                        </div>
                    )}
                    <div>
                    <label>                      המחיר לתשלום
                    :{price} </label>
                    </div>
                </div>
                </fieldset>
            }

        </ButtonGroup>
        <br></br>
        <br></br>

    </>)
}

export default NavBar;

