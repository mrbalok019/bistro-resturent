import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../MainLAyout/MainLayout'
import Home from '../Pages/Home/Home'
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";


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
       
           


        ]
    }
    ]);

    export default router;