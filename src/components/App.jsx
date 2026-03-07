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
        <>
            <Header 
                onClick={onClick}
            />
            <Outlet />
        </>
    );
}

export default Root;