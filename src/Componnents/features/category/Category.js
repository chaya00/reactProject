
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Category = ({ category }) => {

    const isAdmin = useSelector(s => s.user.isAdmin)
    return (
        <>
            {/* לקוח */}
            {isAdmin == false &&
                <Link to='../ListProduct' state={category.id}>
                    <Button style={{
                        width: "150px", height: "60px", color: "red"
                        , backgroundColor: 'white', fontSize: "15px", fontFamily: "Segoe UI", border: '0px'
                    }}>{category.name}</Button>
                </Link>}
            {/* מנהל */}
            {isAdmin == true &&
                <>
                <fieldset align="center" >
                    <div style={{  display: 'flex', flexDirection: 'column',}}>
                        <h2>{category.name}</h2>
                        <Link to='../ListProduct' state={category.id}>
                            <Button style={{
                                width: "150px", height: "60px", color: "red"
                                , backgroundColor: 'white', fontSize: "15px", fontFamily: "Segoe UI", border: '0px'
                            }}>מוצרים בקטגוריה זו</Button>
                        </Link>
                    </div>
                    </fieldset>
                </>}

        </>
    )
}
export default Category;
