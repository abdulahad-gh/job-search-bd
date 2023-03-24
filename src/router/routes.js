import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Signup from "../Pages/Auth/Signup";
import Candidate from "../Pages/Candidate/Candidate";
import Employer from "../Pages/Employer/Employer";
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
},
{
    path:'login',
    element:<Login/>
}
,
{
    path:'register',
    element:<Register/>,
    children:[      
{
    path:'candidate',
    element:<Candidate/>
},
{
    path:'employer',
    element:<Employer/>
},
    ]
}



]


}])

export default routes