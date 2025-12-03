import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import AuthContext from "../../contexts/authContext";
import Path from "../../lib/paths";


export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home)
                })
            .catch((err) => {
                console.log(`Error logging out: ${err.message}`);               
                navigate(Path.Home)
            })
    });

    return null;
}