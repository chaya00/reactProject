import './SignUp.css'
import './SignIn.js'
import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { useForm } from 'react-hook-form'
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUserByName } from './features/user/UserApi.js';
import { store } from './app/store.js';
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    let x;
    const [customer, setCustomer] = useState({ identity: "", name: "", password: "", email: "", phone: "", role: "user" });
    const { register, handleSubmit, getValues, formState: { errors, dirtyFields, isDirty, isValid } } = useForm({ mode: 'onChange' })
    let nav = useNavigate();
    const dispatch = useDispatch();
    let currentUser;
    const status = useSelector(s => s.user.status)
    function save(e) {
        e.preventDefault();
        let n = customer.name
        dispatch(addUser(customer)).then(() => {
            currentUser = store.getState().user.currentUser
            if (currentUser != null)
                console.log({currentUser});
        })
    }



    return (
        <div align="center">
            <form onSubmit={save}>

                <fieldset align="center" id="fieldset">
                    <legend>
                        <br></br><br></br>
                        <Avatar style={{ width: 110, height: 110 }} />
                        <div id="si">Sign Up</div>
                    </legend>
                    {/* 1 */}
                    <TextField id="name"
                        label="Username"
                        variant='standard'
                        onInput={(e) => setCustomer({ ...customer, name: e.target.value })}
                        // onBlur={(e)=>getUserByName(e.target.value)}
                        {...register("username", { validate: (value) => /^[a-zA-Z א-ת]+$/.test(value) })} />
                    {errors.username && <label>only letters</label>}
                    {status == "rejected" && <label>שם המשתמש קיים</label>}
                    {/* 2 */}
                    <TextField id="identity" label="identity" variant="standard" {...register("code", { minLength: 9, maxLength: 9, validate: (value) => /^[0-9]+$/.test(value) })}
                        onInput={(e) => setCustomer({ ...customer, identity: e.target.value })} />
                    {errors.id?.type == "minLength" && <label>The identity must contain minimum 9 digits</label>}
                    {errors.id?.type == "validate" && <label>only digits</label>}
                    {/* 3 */}
                    <TextField id="Phone" label="Phone" variant="standard" {...register("phone", { validate: (value) => /^[0-9]+$/.test(value) })}
                        onInput={(e) => setCustomer({ ...customer, phone: e.target.value })} />
                    {errors.phone && <label>only digits</label>}
                    {/* 4 */}
                    <Tooltip title="Your email address will be added to the metadata of packages that you publish, so it may be seen publicly."   >
                        <TextField id="Email" label="Email address" type="email" variant="standard"
                            onInput={(e) => setCustomer({ ...customer, email: e.target.value })} />
                    </Tooltip>
                    {/* 5 */}
                    <TextField id="password" label="Password" variant="standard" type='password'
                        onInput={(e) => setCustomer({ ...customer, password: e.target.value })} />
                    <br></br>
                    {/* 6 */}
                    <div id="checkbox">
                        <input type="checkbox" onInput={(e) => setCustomer({ ...customer, agree: e.target.checked })}></input>
                        <label id="agree">i agree to the End User License Agreement and the PrivacyPolicy.*</label>
                    </div>
                    <br></br>
                    <button type='submit'>Create an Account</button>

                </fieldset>
            </form>
        </div>
    )
}
