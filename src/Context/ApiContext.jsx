import { createContext, useContext,useState } from "react";
import axios from "axios";
import { AuthContext } from "./authcontext";
export const ApiContext = createContext();
export const ApiContextProvider = ({ children, baseURL }) => {
    const authContext = useContext(AuthContext);
    const [results,setresults] = useState()
    const [vids, setVids] = useState([]);
    const [movies, setmovies] = useState([]);
    const [episodes, setepisodes] = useState([]);

    const api = axios.create({
        baseURL,
    });
    const createHeaders = () => {
        return {
            headers: {
           
            Authorization: `Bearer ${authContext.token}`,
            
            },
        };
    };
    const get = (path) => {
        return api.get(path, createHeaders());
    
    };
    const post =(path,payload)=>{
        console.log (path)
        console.log (payload)


        return api.post(path,payload,createHeaders())
    }
    return <ApiContext.Provider value={{ episodes, setepisodes,movies, setmovies, vids, setVids,results,setresults, get,post }}>{children}</ApiContext.Provider>;
    
}