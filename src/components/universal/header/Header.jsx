import { NavLink } from "react-router";
import styles from "./header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const Header = ({ itemsInCart }) => {


    return (
        <header className={styles.header} aria-labelledby="message">
            <div className={styles.logoArea}>
                <NavLink to="/"><h1 id="message" className={styles.h1}>Example Shop in React!</h1></NavLink>
                <p>Low prices, low morals!</p>
            </div>
            <nav className={styles.buttonArea}>
                <NavLink 
                    className={`${styles.btn} ${styles.toShop}`}
                    to="/shop"
                >Go to shop</NavLink>
                <NavLink 
                    to="/shopping-cart"
                    className={`${styles.btn} ${styles.shopCart}`}
                ><FontAwesomeIcon icon={faBasketShopping}/></NavLink> 
                    {
                        itemsInCart === 0 == true ? (
                            ""
                        ) : (
                            <span className={styles.span}>{itemsInCart}</span>
                        )
                    }
            </nav>
        </header>
    );
}

export default Header;