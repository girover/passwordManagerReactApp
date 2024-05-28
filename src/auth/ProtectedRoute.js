import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    console.log(user);
    const location = useLocation();

    if (!user) {
        // Redirect them to the login page, but save the current location they were trying to go to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};
