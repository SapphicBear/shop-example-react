import Header from "./universal/header/Header";
import { Link } from "react-router";

const Root = () => {
    return (
        <>
            <Header />
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/shopping-cart">Shopping Cart</Link>
                </li>
            </ul>
        </>
    );
}

export default Root;