import { createContext, useState,useEffect } from "react";
import{usePost}from "../hooks"
import axios from "axios";

export const AuthContext = createContext();


export const AuthContextProvider=({children})=>{
    const [token, setToken] = useState(null);
    const[repo,setrepo]=useState()
    const[isLoggedIn,setLoggedIn]=useState()
    // const post= usePost()

async function getuser_data(email,password){
        console.log("fathi1")
        const response=  axios.post('http://localhost:8000/user/login', {
        email: email,
        password: password})
        console.log(response)
        const json =await response.then(data=>data)
        console.log(json)
        await login(json)

    }
    const login= async(response) =>{
        console.log("fdeee",response.data.is_active)
        if(response.data.is_active===true){
            console.log("dddddd")
            await setLoggedIn(true);

            localStorage.setItem("token",response.data.jwt)
            console.log(response.data.jwt,"rrtrerere")
            setToken(response.data.jwt)
            console.log(token)
            console.log(isLoggedIn,"meme")
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