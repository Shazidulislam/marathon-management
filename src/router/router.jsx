import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home,
            },
            {
                path:"/register",
                Component:Register,
            },
            {
                path:"/signin",
                Component:Signin,
            }
        ]
    }
])