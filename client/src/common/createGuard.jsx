import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const CreateGuard = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children ? children : <Outlet />
};

export default CreateGuard;