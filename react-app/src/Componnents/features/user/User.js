import { Link } from 'react-router-dom';

const User=({user})=>{



    return(
        <>
        <h1>{user.id}</h1>
        <h3>{user.code}</h3>
        <h3>{user.name}</h3>
        <h3>{user.password}</h3>
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <Link to={`../ListLend/${user.id}`} >השאלות </Link>
        </>
    )
}
export default User;


// public List<Lend> lends { get; set; }
// public List<Comment> Comments { get; set; }