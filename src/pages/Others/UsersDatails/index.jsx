import {users} from '../Users/usersapi'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

export const UsersDatails = ()=>{
    // const id ==> id in path in App file 
    // if 'id' was changed or decleared by 'x' for example
    // it will be decleared here as 'x' too .
    const {id} = useParams();
    // users ==> imported user from usersapi
    // 
    const userinfo = users.find(us => us.id === +id);
    
    return (
        <>
        <h1>User Details</h1>
        <h4>Welcome "{userinfo.name}" </h4>
        <h4>User Name : "{userinfo.username}" </h4>
        <h4>Email : {userinfo.email} </h4>
        <h4>Phone : {userinfo.phone} </h4>
        <h4>Phone : {userinfo.website} </h4>
        <Link to="/home">
        <button className="btn btn-primary">Back</button>
        </Link>
        </>
    )
}