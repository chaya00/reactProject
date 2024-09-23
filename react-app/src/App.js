import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Componnents/SignIn'
import SignIn from './Componnents/SignIn';
import SignUp from './Componnents/SignUp';
import MyButton from './Componnents/SelectAutoWidth';
import ListUsers from './Componnents/features/user/ListUser'
import ListProduct from './Componnents/features/Product/ListProduct'
import Home from './Componnents/Home';
import Ok from './Componnents/Ok';
import ListCategory from './Componnents/features/category/ListCategory';
import ListComment from './Componnents/features/comment/ListComment';
import AddCategory from './Componnents/features/category/AddCategory';
import BackToTop from './Componnents/SelectAutoWidth';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Manager from './Componnents/Manager';
import ListUser from './Componnents/features/user/ListUser';
import ListLend from './Componnents/features/lend/ListLend';
import NavBar from './Componnents/NavBar';
import ListOrderProduct from './Componnents/features/Product/ListOrderProduct';
import AddLend from './Componnents/features/lend/AddLend';
import Options from './Componnents/Options';
import { InputOutlined } from '@mui/icons-material';
import AddProduct from './Componnents/features/Product/AddProduct'
import DateCalendarServerRequest from './Componnents/SelectAutoWidth';
import TimePickerViewRenderers from './Componnents/SelectAutoWidth';
import SelectAutoWidth from './Componnents/SelectAutoWidth';
// import { store } from './Componnents/app/store'


function App() {
  // לא מתרנדר כל פעם מחדש צריך למצוא פתרון
  // גם כאן וגם בנב בר
  // const admin = store.getState().user.isAdmin;

  return (
    <>
      {/* {console.log(admin)} */}
      
      <BrowserRouter>
      <NavBar></NavBar>

        <Routes>
          <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
          <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='ListProduct' element={<ListProduct></ListProduct>}></Route>
          <Route path='ListUser' element={<ListUser></ListUser>}></Route>
          <Route path='ListComment/:prodId' element={<ListComment></ListComment>}></Route>
          <Route path='ListCategory' element={<ListCategory></ListCategory>}></Route>
          <Route path='ListLend/:userId' element={<ListLend></ListLend>}></Route>
          <Route path='Manager' element={<Manager></Manager>}></Route>
          <Route path='/ListOrderProduct' element={<ListOrderProduct></ListOrderProduct>}></Route>
          <Route path='AddLend' element={<AddLend></AddLend>}></Route>
          <Route path='Options' element={<Options></Options>}></Route>
          <Route path='AddProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='AddCategory' element={<AddCategory></AddCategory>}></Route>
          <Route path='ok' element={<Ok></Ok>}></Route>

        </Routes>
      </BrowserRouter> 
      {/* <SelectAutoWidth></SelectAutoWidth> */}
      {/* <TimePickerViewRenderers></TimePickerViewRenderers> */}

      {/* <DateRangeCalendarCalendarsProp></DateRangeCalendarCalendarsProp> */}
      {/* <DateCalendarServerRequest></DateCalendarServerRequest> */}

      {/* <ListOrderProduct></ListOrderProduct> */}
      {/* <SignIn></SignIn> */}
      {/* <ListUsers></ListUsers> */}
      {/* <ListProduct></ListProduct> */}
      {/* <ListCategory></ListCategory> */}
      {/* <MyButton></MyButton> */}
      {/* <BackToTop></BackToTop> */}

    </>
  );
}


export default App;
