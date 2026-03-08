import { useEffect, useState } from "react";
import Button from "./../universal/button/Button";
import Sidebar from "./sidebar/Sidebar";
import styles from "./shopping.module.css";

const ProductCard = ({ onClick, product }) => {
    return (
        <div 
            key={product.id}
            className={styles.product}
        >
            <h2 className={styles.title}>{product.title}</h2>
            <img src={product.image} alt={product.title} width="150px" className={styles.image}/>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.cate}>Category: {product.category}</p>
            <p className={styles.rate}>{`${product.rating.rate}/5 ${product.rating.count} reviews`}</p>
            <Button 
                onClick={onClick}
                label="Add to cart"
                type={`${styles.btn} ${styles.cart}`}
            />
        </div>
    )
};

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
                { loading ? (
                    <div className={styles.product}>Loading...</div>
                ) : error ? (
                    <div className={styles.product}>An error has occurred</div>
                ) :
                    products.map((item) => {
                        return (
                            <ProductCard 
                                onClick={onClick}
                                product={item}
                            />
                        );
                    })
                }
            </main>
        </div>
    );
};
export default Shopping;