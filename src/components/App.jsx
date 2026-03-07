// import styles from "./universal/default.module.css";
import Header from "./universal/header/Header";
import { Outlet } from "react-router";

const Root = () => {
    const onClick = {
        toShop() {

        },
        toCart() {

        },
    }

    return (
        <div>
            <Header 
                onClick={onClick}
            />
            <Outlet />
        </div>
    );
}

export default Root;