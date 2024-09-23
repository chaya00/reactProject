
// import { useEffect } from 'react';
import { Form, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react'
import { addLend, fetchAllLends } from './LendApi'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { store } from '../../app/store'
import { fetchAllProducts, getProductById, updateProduct } from '../Product/ProductApi';
import Product from '../Product/Product';
import OrderProduct from '../Product/OrderProduct';
import { Dialog, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToArray, removeFromArray } from '../Product/ProductSlice'
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs from 'dayjs';
import * as React from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { reset } from '../Product/ProductSlice'
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { isEqual, isEqualDate } from '@progress/kendo-date-math';
const AddLend = () => {
    const { register, handleSubmit, getValues, formState: { errors, drityFields, isDirty, isValid } } = useForm({ mode: 'onChange' })
    let dd;
    const price = useSelector(s => s.product.price)
    const products = useSelector(s => s.product.arrCurrentProduct)
    const diary = useSelector(s => s.lend.diary)
    const times = useSelector(s => s.lend.times)
    const currentUser = store.getState().user.currentUser;
    const [flag, setFlag] = useState(true);
    let nav = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllLends())
    }, [])

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));
    // הוספה או מחיקת מוצר מהרשימה
    const add = (e, product) => {
        if (e.target.checked) {
            dispatch(removeFromArray(product))
            e.target.checked = false
        }
        else {
            dispatch(addToArray(product))
        }
    }

    const save = (lend) => {
        lend.preventDefault();
        // לקיחה
        let take = Number(lend.target[1].value.charAt(0) + lend.target[1].value.charAt(1))
        // החזרה
        let ret = Number(lend.target[2].value.charAt(0) + lend.target[2].value.charAt(1))
        console.log(lend.target[0].value);
        console.log({ take });
        console.log({ ret });
        console.log({ diary });
        let dates = diary.map((item, i) => new Date(item) - new Date(new Date(lend.target[0].value)?.setHours(0, 0, 0)) == 0 ? i : -1).filter(i => i != -1)
        console.log({ dates });
        console.log({ times });
        for (let i = 0; i < dates?.length; i++) {
            if (times[dates[i]][0] < take && times[dates[i]][1] > take) {
                setFlag(false)
            }
        }
        console.log(flag);
        if (flag == false) {
            setFlag(true)
        }
        // else {
        //     let l;
        //     console.log(lend.target[8].value);
        //     console.log({take});
        //     console.log({ret});
        //     products.map((item) => {
        //         l = { date: new Date(lend.target[8].value), takeHour: take, returnHour: ret, productId: item.id, userId: currentUser?.id };
        //         console.log({l});
        //         dispatch(addLend(l)).then(() => {
        //         });
        //     })
        //     nav('../ok')
        // }

    }

    return (
        <div dir="rtl" align="center" style={{ width: "1900px", height: "850px", justifyContent: "center" }}>
            <br></br>
            {currentUser && <h1>שלום לך {currentUser.name}</h1>}
            <br></br>
            <h5>בקשת להזמין</h5>
            {products.map((x) =>
                <div style={{ display: 'flex', flexDirection: 'row', width: '150px' }}>

                    <Tooltip title="להסרה">
                        <Checkbox onInput={(e) => add(e, x)} style={{ color: "red" }} icon={<CheckIcon />} checkedIcon={<CheckIcon />} />
                    </Tooltip>
                    <h6>{x.name}</h6>
                </div>
            )}
            <h5>המחיר לתשלום {price}</h5>
            <div style={{ width: "750px", height: "250px", display: "flex", flexDirection: "column", borderRight: "none", borderLeft: "none", borderStyle: "ridge" }}>
                <h2>יש לי קוד קופון</h2>
                <div style={{ display: "flex", flexDirection: "row", width: "250px", height: "15px", direction: "rtl" }}>
                    <FormControl style={{ width: "150px" }} variant="standard">
                        <InputLabel>בחר מועדון</InputLabel>
                        <Select
                            value="בחר מועדון"
                            input={<BootstrapInput />}
                        >
                            <MenuItem value=""> <em></em> </MenuItem>
                            <MenuItem value={10}>החברים שלנו</MenuItem>
                            <MenuItem value={20}>מועדון הזהב</MenuItem>
                            <MenuItem value={30}>הכי כיף לילדים</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
            <br></br>

            <div style={{ width: "750px", height: "250px", display: "flex", flexDirection: "column", borderRight: "none", borderLeft: "none", borderStyle: "ridge" }}>
                <h2>פרטי כרטיס האשראי</h2>
                <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", justifyContent: "space-around", justifyItems: "center" }}>
                    <input type="text" placeholder="שם מלא של בעל הכרטיס" style={{ width: "200px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                    <input type="text" placeholder='מספר ת"ז' style={{ width: "200px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                    <input type="text" placeholder="מספר כרטיס אשראי" style={{ width: "200px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                </div>

                <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", justifyContent: "space-around", justifyItems: "center" }}>
                    <h8>תוקף כרטיס:</h8>
                    <div style={{ width: "50%", height: "50%", justifyContent: "space-between", justifyItems: "center" }}>
                        <input type="month" placeholder=" חודש ושנה " style={{ width: "100px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                    </div>

                    <h8>קוד אימות כרטיס:</h8>
                    <div style={{ width: "50%", height: "50%", justifyContent: "space-between", justifyItems: "center" }}>
                        <input type="text" placeholder="קוד אימות" style={{ width: "100px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                        <input type="text" placeholder=" תשלומים" style={{ width: "100px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}></input>
                    </div>
                </div>
            </div>
            <br></br>
            <form onSubmit={(save)}>

                <div style={{ width: "750px", height: "250px", display: "flex", flexDirection: "column", borderRight: "none", borderLeft: "none", borderStyle: "ridge" }}>
                    <h2>פרטי השאלה</h2>
                    <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", justifyContent: "space-around", justifyItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>תאריך השאלה</label>
                            <br></br>
                            <input type="date" style={{ width: "120px", height: "37px", borderRadius: "5px", borderWidth: "0.2px", borderColor: "rgb(242, 156, 156)", fontSize: "17px" }}
                                {...register("dateLend", { validate: (value) => (dd = new Date(value)) >= new Date() })} />
                            {errors.dateLend && <label>בחרתם תאריך שכבר חלף</label>}
                        </div>
                        <div>
                            <div>

                                <select >
                                    <option>שעת לקיחה</option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                </select>

                                <select  >
                                    <option>שעת החזרה</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                    <option>00:00</option>
                                </select>
                            </div>

                        </div>

                    </div>
                </div>
                <br></br>


                <input type="submit" id="submit" value="לאישור תשלום"></input>

                <br></br>

            </form>
            {flag == false &&
                <>
                    <label>המוצר אינו זמין בשעות אילו</label>
                    <br></br>
                    <label>נסה לבחור שעות אחרות או לחילופין יום אחר</label>
                </>
            }
        </div >
    )
}
export default AddLend

