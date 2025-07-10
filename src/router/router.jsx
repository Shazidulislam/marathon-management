import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import Marathon from "../Pages/Marathon";
import PriviteRoute from "../PriviteRoute/PriviteRoute";
import Dashboard from "../Pages/Dashboard";
import AddMarathon from "../Pages/AddMarathon";
import MyMarathonList from "../Pages/MyMarathonList";
import MyApplyList from "../Pages/MyApplyList";



export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                // Component:Home,
                element:<Home></Home>
            },
            {
                path:"/register",
                // Component:Register,
                element:<Register></Register>
            },
            {
                path:"/signin",
                // Component:Signin,
                element:<Signin></Signin>
            },
            {
                path:"/marathon",
                // Component:Marathon
                element:<Marathon></Marathon>
            },
        ]
    },
    {
        path:"/board",
        element:<PriviteRoute><Dashboard></Dashboard></PriviteRoute>,
        children:[
            {
               index:true,
                element:<PriviteRoute><AddMarathon></AddMarathon></PriviteRoute>
            },
            {
                path:"/board/mymarathon",
                element: <PriviteRoute><MyMarathonList></MyMarathonList></PriviteRoute> ,
            },
            {
                path:"/board/myapply",
                element:<PriviteRoute><MyApplyList></MyApplyList></PriviteRoute>
            }
        ]
    }
])