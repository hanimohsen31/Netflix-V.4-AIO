import { Route, Redirect } from "react-router-dom";
export const Logout=()=>{
localStorage.removeItem("token")

return ( <Route path="/">
<Redirect to="/homeout" />
</Route>
)

}
