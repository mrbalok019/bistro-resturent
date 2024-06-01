import React, { useContext } from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import Nav from '../Component/Nav/Nav';
import Footer from '../Component/Footer/Footer';


const MainLayout = () => {
   
    const location = useLocation();
    const noFooter = location.pathname.includes('login') || location.pathname.includes('registration');


    return (

        <div>
            <div className=''>
            <Nav></Nav>
            </div>
            <div className='max-w-6xl mx-auto'>
                
                <Outlet></Outlet>  
            </div> 
            <div>
                {noFooter || <Footer ></Footer>}
                
            </div>
            
        </div>
    );
};

export default MainLayout;