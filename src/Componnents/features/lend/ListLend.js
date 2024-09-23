import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { fetchAllLends } from './LendApi';
import CircularProgress from '@mui/material/CircularProgress'
import Lend from './Lend'

import { useParams } from 'react-router-dom'

const ListLend = () => {
    const status = useSelector(s => s.lend.status)
    const arrLends = useSelector(s => s.lend.arrLends)
    let userId = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllLends())

    }, [])

    return (
        <>
            {console.log(userId)}
            {status == "pending" && <CircularProgress />}
            {arrLends.map((item) => userId.userId != 0 ? item.userId == userId.userId && <Lend lend={item}></Lend> : <Lend lend={item}></Lend>)}

        </>
    )

}
export default ListLend;
