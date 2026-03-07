import { useEffect, useState } from "react";
import Button from "./../universal/button/Button";
import Sidebar from "./sidebar/Sidebar";
import styles from "./shopping.module.css";

const Shopping = ({ onClick }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
                setError(error);
            })
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className={styles.shopping}>
            <Sidebar 
                className={styles.sidebar}
                products={products}
                isLoading={loading}
                error={error}
            />
            <main className={styles.main}>
                {
                    products.map((item) => {
                        return (
                            <div 
                            key={item.id}
                            className={styles.product}
                        >
                            <h2 className={styles.title}>{item.title}</h2>
                            <img src={item.image} alt={item.title} width="150px" className={styles.image}/>
                            <p className={styles.desc}>{item.description}</p>
                            <p className={styles.cat}> Category: {item.category}</p>
                            <p className={styles.rate}>{`${item.rating.rate}/5 from ${item.rating.count} reviews`}</p>
                            <p className={styles.price}>${item.price}</p>
                            <Button 
                                onClick={onClick}
                                label="Add to cart"
                                type={styles.btn}
                            />
                        </div>
                        )
                    })
                }
            </main>
        </div>
    );
};
export default Shopping;