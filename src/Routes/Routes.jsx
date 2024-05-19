import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../MainLAyout/MainLayout'
import Home from '../Pages/Home/Home'


const router = createBrowserRouter(
    
    [
        {
        
        
        path:'/',
        element: <MainLayout></MainLayout>,

        children:[
            {   
                path:'/',
                element: <Home></Home>,
                // loader:()=>fetch('/estatesData.json')
            },
           


        ]
    }
    ]);

    export default router;