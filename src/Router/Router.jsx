import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Appoinment from '../pages/Apoinment/Appoinment';
import Login from '../pages/Login/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },

]);

export default Router;