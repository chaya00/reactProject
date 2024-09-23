import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchAllComments } from './CommentApi';
import CircularProgress from '@mui/material/CircularProgress'
import Comment from './Comment'


const ListComment = ({ prodId }) => {
    const status = useSelector(s => s.comment.status)
    const arrComments = useSelector(s => s.comment.arrComments)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllComments())
    }, [])

    return (
        <>
       { console.log({prodId})}

            {status == "pending" && <CircularProgress />}
            {arrComments.map((item) => prodId != undefined ? item.productId == prodId && <Comment comment={item}></Comment> : <Comment comment={item}></Comment>)}
        </>
    )

}
export default ListComment;
