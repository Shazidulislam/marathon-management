import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import Marathon from "../Pages/Marathon";
import PriviteRoute from "../PriviteRoute/PriviteRoute";
import Dashboard from "../Layout/DashbordLayout/DashBoard";
import AddMarathon from "../Pages/AddMarathon";
import MyMarathonList from "../Pages/MyMarathonList";
import MyApplyList from "../Pages/MyApplyList";
import MarathonDeatils from "../Pages/MarathonDeatils";
import Error from "../Pages/Error";
import UpdateMarathon from "../Contexts/UpdateMarathon";
import UpdateRegistion from "../Component/UpdateRegistion";
import DashboardHome from "../Pages/Dashboard/DashboardHome";



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
                element:<PriviteRoute><Marathon></Marathon></PriviteRoute>
            },
            {
                path:"/deatils/:id",
                element:<PriviteRoute><MarathonDeatils></MarathonDeatils></PriviteRoute>
            },
           
        ]
    },
    {
        path:"/board",
        element:<PriviteRoute><Dashboard></Dashboard></PriviteRoute>,
        children:[
            {
                path:"/board",
                element:<PriviteRoute><DashboardHome></DashboardHome></PriviteRoute>
            },
            {
               path:"/board/addmarathon",
                element:<PriviteRoute><AddMarathon></AddMarathon></PriviteRoute>
            },
            {
                path:"/board/mymarathon",
                element: <PriviteRoute><MyMarathonList></MyMarathonList></PriviteRoute> ,
            },
            {
                path:"/board/myapply",
                element:<PriviteRoute><MyApplyList></MyApplyList></PriviteRoute>
            },
            {
                path:"/board/mymarathon/:id",
                element:<PriviteRoute><UpdateMarathon></UpdateMarathon></PriviteRoute>
            },
            {
                path:"/board/myapplylist/:id",
                element:<PriviteRoute><UpdateRegistion></UpdateRegistion></PriviteRoute>     
            }
        ]
    },
    {
        path:"/*",
        element:<Error></Error>
    }
])