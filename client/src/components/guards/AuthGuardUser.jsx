import AuthContext from "../../contexts/authContext";
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuardUser() {
    const { isAuthenticated } = useContext(AuthContext);

    if(isAuthenticated) {
        
        return <Navigate to="/"/>;
    }

    return <Outlet/>
}