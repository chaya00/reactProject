import * as React from 'react'
import './Home.css'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ListProduct from './features/Product/ListProduct'
import tra12 from './img/tra12.jpg'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';



export default function Home() {


  return (
    <div dir="rtl">
     <div style={{ width: "1900px", height: "600px", backgroundImage: `url(${tra12})`, backgroundSize: "100%" }}></div>
        <br></br>
        <br></br>
        <div>
            <h1>C&E אטרקציות</h1>
            <h3>עולם שלם, חוויתי ומלא כיף לכל המשפחה הכולל מגוון אדיר של קארטינג, באגי, סירות</h3>
            <h3>לילדים ולכל הגילאים, אטרקציות ייחודיות שלא נראו בארץ</h3>
        </div>
        <br></br>
        <br></br>
        <Link to='/SignIn'>
            <Button type="button" style={{ backgroundColor: "red", width: "200px", height: "45px", fontSize: "20px", color: "white" }}>להנות איתנו</Button>
        </Link>
        <br></br>
        <br></br>
        <div style={{ width: "1900px",  backgroundColor: "rgba(245, 129, 148, 0.347)" }}>
            <br></br>
            <br></br>
            <br></br>
            <h1>האטרקציות</h1>
            <ListProduct></ListProduct>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/SignIn'>
            <Button type="button" style={{ backgroundColor: "red", width: "200px", height: "45px", fontSize: "20px", color: "white" }}>להנות איתנו</Button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <h1>הודעות חשובות</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>הנהלת האתר שומרת לעצמה את הזכות לא להפעיל מכשיר זה או אחר מכל סיבה שהיא 🏍️</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>על ההורים לשמור על ילדיהם ולעדכנם בכל הוראות הבטיחות 👨‍👩‍👧‍👦</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>הנהלת האתר שומרת לעצמה את הזכות לא להפעיל מכשיר זה או אחר מכל סיבה שהיא🏍️</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>לאחר הגעת האטרקציות למקום ההזמנה לא ינתן זיכוי כספי מכל סיבה שהיא 💸</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>🧸📲🖥️💰🍕🍟🍿🔞🚫⛔</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>השימוש בגלשן אסור מתחת לגיל 18 🔞</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>שעות פתיחה ומחירים רשמיים יוצגו אך ורק באתר הפארק. גורם חיצוני אינו מוסמך 📲</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>השימוש על ידי בעלי חיים אסור בהחלט ⛔</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>אין להכניס אוכל ושתיה לאטרקציות מלבד הכנסת מים וחטיפים וכמובן במקרים מיוחדים 🍔</div>
            <br></br>
            <div type="button" style={{height:"40px",width:"35%",textAlignLast:"center",backgroundColor:"rgba(191, 184, 184, 0.318)",borderRadius:"5px"}}>מומלץ לרכוש כרטיסים מראש בלשונית "מכירת כרטיסים" או בלחיצה כאן  💰</div>
            <br></br>
        </div>
    <SignIn></SignIn>

    </div>)
}


