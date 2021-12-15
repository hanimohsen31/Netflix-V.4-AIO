import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/authcontext";
export const ProtectedRoute = ({ path, children }) => {
    const authContext = useContext(AuthContext);
    return localStorage.getItem("token")? (
      <Route path={path}>{children}</Route>
    ) : (
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    );
    
  };