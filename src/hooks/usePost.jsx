import { useContext } from "react";
import { ApiContext } from '../Context/ApiContext';

export const usePost = () => {
    const apiContext = useContext(ApiContext);

    return async (body) => {
    await apiContext.post("/user/login",body);

    };
};