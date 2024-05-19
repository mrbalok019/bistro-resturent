import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom'
// import Nav from '../components/Nav/Nav';
import Footer from '../Component/Footer/Footer';
// import { AuthContext } from '../provaider/AuthProvider';

const MainLayout = () => {
   
    // }


    return (

        <div>
            {/* <div className='mx-20'>
            <Nav></Nav>
            </div> */}
            <div className='max-w-6xl mx-auto'>
                
                <Outlet></Outlet>
               
            </div> 
            <Footer ></Footer>
        </div>
    );
};

export default MainLayout;