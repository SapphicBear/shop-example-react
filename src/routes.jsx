import Root from "./components/App";
import Home from "./components/homepage/Home";
import Shopping from "./components/shopping/Shopping";
import Cart from "./components/cart/Cart";

const routes = [
    {
        path: "/",
        element: <Root />,
        errorElement: null,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shopping />,
            },
            {
                path: "/shopping-cart",
                element: <Cart />
            },
        ],
    },
    
];

export default routes;