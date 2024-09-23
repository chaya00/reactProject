import './SignIn.css'
import './SignUp.js'
import { Link } from 'react-router-dom'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from './features/user/UserApi.js'
import { store } from './app/store.js';
import {reset} from './features/Product/ProductSlice.js'
export default function SignIn() {
    const [customer, setCustomer] = useState({ name: "", password: "" });

    const dispatch = useDispatch();
    let nav = useNavigate();
    let currentUser;
    const save = (e) => {
        e.preventDefault();
        dispatch(login(customer), dispatch(reset())).then(() => {
            currentUser = store.getState().user.currentUser
            if(currentUser!=null)
            nav(`../ListOrderProduct`)    
        else{
            nav(`../SignUp`)    

        }

        })
    }

    return (
        <div align="center" id='component' dir='rtl'>
        {/*  style={{ backgroundImage: `url(${pic1})` }} */} 
            <form onSubmit={save}>
                <fieldset align="center" id="all">
                    <div id="npdiv">
                        {/* 1 */}
                        <TextField id="username" label="שם"
                            onInput={(e) => setCustomer({ ...customer, name: e.target.value })} />
                        {/* 2 */}
                        <TextField id="password" label="סיסמא" type='password'
                            onInput={(e) => setCustomer({ ...customer, password: e.target.value })} />
                        <button id="submit" type='submit'>הכנס</button>
                    </div>
                    <div id='link'>
                        <a href='' id="forgot">?שכחת סיסמא</a>
                        <Link id="signUp" to="../signUp" >לקוח חדש</Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
