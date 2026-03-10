import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import Button from "./../universal/button/Button";
import Sidebar from "./sidebar/Sidebar";
import styles from "./shopping.module.css";
import largeStyles from "./shoppingLarge.module.css";

const ProductCard = ({ onClick, product, style }) => {
    return (
        <div 
            key={product.id}
            className={style.product}
        >
            <h2 className={style.title}>{product.title}</h2>
            <img src={product.image} alt={product.title} width="150px" className={style.image}/>
            <p className={style.desc}>{product.description}</p>
            <p className={style.cate}>Category: {product.category}</p>
            <p className={style.rate}>{`${product.rating.rate}/5 ${product.rating.count} reviews`}</p>
            <Button 
                onClick={onClick}
                label="Add to cart"
                type={`${style.btn} ${style.cart}`}
            />
        </div>
    );
};

const Shopping = () => {
    const [itemsInCart, setItemsInCart] = useOutletContext();
    const [initialProducts, setInitialProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function handleAddToCart(item) {
        let cart = [...itemsInCart];
        if (cart.includes(item)) {
            let newItem = {...item};
            newItem.id = crypto.randomUUID();
            cart.push(newItem);
        } else {
            item.id = crypto.randomUUID();
            cart.push(item);
        }
        setItemsInCart(cart);
    }

    const filterByCategory = (category) => {
        const productsByCat = initialProducts.filter((item) => item.category === category);
        setProducts(productsByCat);
    }
    const resetItems = () => {
        setProducts(initialProducts);
    }
    const handleProduct = (id) => {
        let product = initialProducts.filter((item) => item.id === id);
        
        setProducts(product);
    };
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
                setInitialProducts(data);
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
                reset={resetItems}
                handleProduct={handleProduct}
                className={styles.sidebar}
                products={initialProducts}
                isLoading={loading}
                error={error}
                filter={filterByCategory}
            />
            <main className={styles.main}>
                { loading ? (
                    <div className={styles.product}>Loading...</div>
                ) : error ? (
                    <div className={styles.product}>An error has occurred</div>
                ) : products.length === 1 == true ? (
                    <ProductCard 
                        style={largeStyles}
                        onClick={() => handleAddToCart(products[0])}
                        product={products[0]}
                    />
                ) :
                    products.map((item, i) => {
                        return (
                            <ProductCard
                                key={i}
                                style={styles}
                                onClick={() => {
                                    handleAddToCart(item);
                                }}
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