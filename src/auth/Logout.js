import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, []);

    return null;
}
 
export default Logout;