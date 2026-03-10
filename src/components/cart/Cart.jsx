import { useOutletContext } from "react-router";
import styles from "./cart.module.css";

const Cart = () => {
    const [itemsInCart, setItemsInCart] = useOutletContext();
    return (
        <main className={styles.shoppingCart}>
            <h1>Shopping cart area</h1>
            <p>Items in Shopping cart: {itemsInCart.length}</p>
        </main>
    );
};
export default Cart;