import { NavLink } from "react-router";
import styles from "./header.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {

    return (
        <header className={styles.header} aria-labelledby="message">
            <div className={styles.logoArea}>
                <NavLink to="/"><h1 id="message">Example Shop in React!</h1></NavLink>
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
            </nav>
        </header>
    );
}

export default Header;