import { createBrowserRouter } from "react-router-dom";
import Home from '../container/Home';
import Login from '../container/Login';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default router;