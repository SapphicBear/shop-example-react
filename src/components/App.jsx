import styles from "./universal/default.module.css";
import Header from "./universal/header/Header";
import { Outlet } from "react-router";
import { useState } from "react";



const Root = () => {
    const [itemsInCart, setItemsInCart] = useState([]);


    return (
        <div className={styles.mainBG}>
            <Header />
            <Outlet context={[itemsInCart, setItemsInCart]} />
        </div>
    );
}

export default Root;