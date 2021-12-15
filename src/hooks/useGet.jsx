import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

export const useGetPosts = () => {
    const apiContext = useContext(ApiContext);
    return async () => {
    const { data } = await apiContext.get("/posts");
    return data;
    };
};