import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Root from "../Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ],
    },
]);

export default router;