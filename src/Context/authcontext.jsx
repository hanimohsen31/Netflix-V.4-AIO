import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();


export const AuthContextProvider=({children})=>{
    const [token, setToken] = useState(null);
    const[isLoggedIn,setLoggedIn]=useState()
    // const post= usePost()

async function getuser_data(email,password){
        const response=  axios.post('http://localhost:8000/user/login', {
        email: email,
        password: password})
        const json =await response.then(data=>data)
        await login(json)

    }
    const login= async(response) =>{
        if(response.data.is_active===true){
            await setLoggedIn(true);

            localStorage.setItem("token",response.data.jwt)
            setToken(response.data.jwt)
        }
    }

    const logout=()=>{
        setLoggedIn(false);
    }
    return(
        <AuthContext.Provider
        value={{
        getuser_data   
        ,logout
        ,isLoggedIn,
        token
        }}>
        {children}
        </AuthContext.Provider>
    )
}