import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../MainLAyout/MainLayout'
import Home from '../Pages/Home/Home'
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes2 from "./PrivateRoutes2";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../MainLAyout/DashboardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


const router = createBrowserRouter(
    
    [
        {
        
        
        path:'/',
        element: <MainLayout></MainLayout>,

        children:[
            {   
                path:'/',
                element: <Home></Home>,
            },
            {   
                path:'/menu',
                element: <Menu></Menu>
            },
           
            {   
                path:'/ourshop/:category',
                element: <OurShop></OurShop>
            },
            {   
                path:'/login',
                element:<PrivateRoutes2> <Login/> </PrivateRoutes2>
            },
            {   
                path:'/registration',
                element:<PrivateRoutes2> <Registration/></PrivateRoutes2>
            },
       
           


        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes> <DashboardLayout/> </PrivateRoutes> ,
        children:[
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path:'allusers',
                element: <AllUsers></AllUsers>
            },
        ]
    }
    ]);

    export default router;