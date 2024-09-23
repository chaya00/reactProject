import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchAllUsers } from './UserApi';
import CircularProgress from '@mui/material/CircularProgress'
import User from './User'
const ListUser = () => {
    const status = useSelector(s => s.user.status)
    const arrUsers = useSelector(s => s.user.arrUsers)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers())

    }, [])

    return (
        <>
            {status == "pending" && <CircularProgress />}
            {arrUsers.map((item) => item.role !== 'admin' && <User user={item}></User>)}

        </>
    )

}
export default ListUser;
