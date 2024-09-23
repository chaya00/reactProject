import * as React from 'react'
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
import { red } from '@mui/material/colors';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import shkiha from '../../img/shkiha.png'
import Button from '@mui/material/Button';
import boats from '../../img/boats.jpg'
import hoverboard from '../../img/hoverboard.jpg'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
import she1 from '../../img/sho1.jpg'
import she2 from '../../img/sho2.jpg'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom';
import ListComment from '../comment/ListComment'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from '../../app/store'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchAllProducts, updateProduct } from './ProductApi';
import { fetchAllCategories } from '../category/CategoryApi';
import { useEffect } from 'react'
import ListProduct from './ListProduct';
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const arrCategories = useSelector(s => s.category.arrCategories)
    // let arrNumbersCategories=[];
    // arrCategories.map((item) => arrNumbersCategories?.push(item.id))
    let arrNamesCategories = [];
    arrCategories.map((item) => arrNamesCategories?.push(item.name))
    let arr;
    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])
    const admin = store.getState().user.isAdmin;
    const image1 = [sir1, sir2, sir3, sir4, sir5, sir6, sir7, sir8, sir9, sir10, sir11, boats];
    const image2 = [tra1, tra2, tra3, tra4, tra5, tra6, tra8, tra9, tra10, tra11, tra12, tra13, tra14, tra15, tra16, tra17, hoverboard]
    const image3 = [she1, she2];
    switch (product.categoryId) {
        case 1: arr = image1;
            break;
        case 2: arr = image2;
            break;
        case 3: arr = image3;
            break;
        default: arr = image1;
    }
    const [expanded, setExpanded] = React.useState(false);
    const [expandedDelete, setExpandedDelete] = React.useState(false);
    const [expandedComment, setExpandedComment] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // מחיקה
    const handleExpandClickDelete = () => {
        setExpandedDelete(!expandedDelete);
    };
    const ExpandMoreDelete = styled((props) => {
        const { expandedDelete, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expandedDelete }) => ({
        transform: !expandedDelete ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // תגובות
    const handleExpandClickComment = () => {
        setExpanded(!expanded);
    };
    const ExpandMoreComment = styled((props) => {
        const { expandComment, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expandComment }) => ({
        transform: !expandComment ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openComment, setOpenComment] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const handleClickOpenComment = () => {
        setOpenComment(true);
    };

    const handleCloseComment = () => {
        setOpenComment(false);
    };
    let nav = useNavigate();

    const save = (prod) => {
        prod.preventDefault();
        let categoryId = arrCategories.filter((x) => x.name == (prod.target[6].value))

        let p = {
            id: Number(product.id),
            name: prod.target[0].value,
            company: prod.target[1].value,
            amount: Number(prod.target[2].value),
            miniDescription: prod.target[3].value,
            description: prod.target[4].value,
            price: Number(prod.target[5].value),
            // categoryId: Number(prod.target[6].value)
            categoryId: categoryId[0].id
        }
        dispatch(updateProduct(p)).then(() => {
            nav(`../ListProduct`)

        })
    };
    const del = (prod) => {
        prod.preventDefault();
        handleCloseDelete();
        // dispatch(deleteProduct(product.id)).then(() => {            
        console.log("delete");
        // })
    }
    return (
        <>
            <div style={{ width: "275px", height: "525px", display: "flex", flexDirection: "column", borderRadius: "15px", backgroundColor: "white" }}>
                <div style={{ backgroundImage: `url(${image2[product.id]})`, backgroundSize: "100%", width: "100%", height: "35%", backgroundSize: "100%", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}></div>
                <h2>{product.name}</h2>
                <br></br>
                <br></br>
                <div style={{ fontSize: "18px", width: "100%", height: "45%" }}>{product.miniDescription}</div>

                {admin === true &&
                    <div style={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", paddingLeft: "50px", justifyContent: "space-around" }}>

                        {/* //מחיקה */}
                        <IconButton onClick={handleClickOpenDelete}>
                            <button type='b' ><DeleteIcon></DeleteIcon></button>
                        </IconButton>
                        <Dialog
                            fullScreen={fullScreen}
                            open={openDelete}
                            onClose={handleCloseDelete}
                        >
                            <DialogTitle >
                                {product.name}
                            </DialogTitle>
                            <DialogContent>
                                <>?האם אתה בטוח שברצונך למחוק מוצר זה</>
                            </DialogContent>
                            <DialogActions>
                                <button type="submit" id='submit' onClick={del}>כן</button>
                                <button id='submit' onClick={handleCloseDelete}>לא</button>

                            </DialogActions>
                        </Dialog>

                        {/* עריכה */}
                        <IconButton onClick={handleClickOpen}>
                            <AppRegistrationIcon></AppRegistrationIcon>
                        </IconButton>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            component="form"
                            onSubmit={save}
                        >
                            <DialogTitle >
                                {product.name}
                            </DialogTitle>
                            <DialogContent>
                                <TextField
                                    label="שם"
                                    defaultValue={product?.name}
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    label="חברה"
                                    defaultValue={product?.company}
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    label="כמות"
                                    defaultValue={product?.amount}
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    label="תיאור קצר"
                                    defaultValue={product?.miniDescription}
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    label="תיאור"
                                    defaultValue={product?.description}
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    label="מחיר"
                                    defaultValue={product?.price}
                                    variant="standard"
                                    size="small"
                                />

                                <select >{arrNamesCategories.map((i) => <option>{i}</option>)}</select>

                            </DialogContent>
                            <DialogActions>
                                <button type="submit" id='submit' onClick={handleClose}>אשר פרטים</button>
                            </DialogActions>
                        </Dialog>

                    </div>
                }
                <div>
                    {/* תגובות */}
                    <IconButton onClick={handleClickOpenComment}>
                        <AppRegistrationIcon></AppRegistrationIcon>
                    </IconButton>
                    <Dialog
                        fullScreen={fullScreen}
                        open={openComment}
                        onClose={handleCloseComment}
                    >
                        <DialogTitle >
                            {product.name}
                        </DialogTitle>
                        <DialogContent>
                            <ListComment prodId={product.id}></ListComment>
                        </DialogContent>
                    </Dialog>


                </div>
            </div>

        </>
    )
}
export default Product;

