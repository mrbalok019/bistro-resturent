import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loading)
      return  <span className="loading loading-infinity loading-lg text-indigo-700"></span>

    if(user)
        return children;
    
    return navigate('/login');
};

export default PrivateRoutes;