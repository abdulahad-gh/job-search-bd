import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Home from "../Pages/Home";

const routes = createBrowserRouter([{
    path:'/',
    element: <Main/>,
    children:[{
        path:'/',
        element:<Home/>
    },
{
    path:'signup',
     element:<Signup/>
},{
    path:'login',
    element:<Login/>
}]
}
])

export default routes