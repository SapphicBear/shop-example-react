import Root from "./components/App";
const routes = [
    {
        path: "/",
        element: <Root />,
        errorElement: null,
    },
    {
        path: "/shop",
        element: <h1>The shop</h1>
    },
    {
        path: "/shopping-cart",
        element: <h1>Shopping-cart</h1>
    }
];

export default routes;