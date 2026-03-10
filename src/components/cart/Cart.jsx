import { useOutletContext } from "react-router";
import Button from "./../universal/button/Button";
import styles from "./cart.module.css";

const Product = ({ title, price, img, onClick}) => {
    return (
        <article className={`${styles.product} ${styles.border}`}>
            <h3 className={styles.title}>{title}</h3>
            <img src={img} className={styles.image} />
            <h4 className={styles.price}>Price: ${price}</h4>
            <div className={styles.buttonArea}>
                <Button 
                    type={`${styles.btn} ${styles.remove}`}
                    label="Remove"
                    onClick={onClick}
                />
            </div>
        </article>
    );
};

const Cart = () => {
    const [itemsInCart, setItemsInCart] = useOutletContext();
    
    const handleDeleteItem = (id) => {
        let filtered = itemsInCart.filter((item) => item.id !== id)
        console.log(filtered)
        setItemsInCart(filtered);
    }
    return (
        <main className={styles.shoppingCart}>
            <h1>Your Shopping Cart</h1>
            <div className={styles.itemsArea}>
                <h2>Your items:</h2>
                <ul className={styles.list}>
                    { itemsInCart.length === 0 == false ? (
                        itemsInCart.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Product 
                                        key={i}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        img={item.image}
                                        onClick={() => handleDeleteItem(item.id)}
                                    />
                                </li>
                            )
                            })
                    ) : (
                        <li className={styles.empty}>
                            No items in cart
                        </li>
                    )
                    }
                </ul>
                <div className={styles.checkout}>
                    <h3>
                        
                    </h3>
                    <Button 
                        label="Checkout"
                        type={`${styles.btn}`}
                        onClick={() => alert("Congrats! Nothing was bought no money was spent!")}/>
                </div>
            </div>
        </main>
    );
};
export default Cart;