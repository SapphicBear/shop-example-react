import styles from "./sidebar.module.css";
import { NavLink } from "react-router";
import { useState } from "react";

const Accordian = ({ title, content, id, handleProduct, filter }) => {
    const [activeId, setActiveId] = useState(null);

    return (
        <>
            <div className={styles.accordian}>
                <div className={styles.accordianCat} onClick={() => {
                    filter(title)
                }}>
                <p 
                    className={styles.accordianTitle} 
                    onClick={() => {
                        activeId === id ? setActiveId(null) : setActiveId(id);
                    }}>
                        {title}
                    </p>
                    <span className={styles.accordianOpener}>{activeId === id ? "-" : "+"}</span>
                </div>
                <ul className={styles.items}>
                    { activeId === id &&
                        content.map((item) => {
                            return (
                                <li 
                                    key={item.id} 
                                    className={styles.product}
                                    onClick={() => {
                                        handleProduct(item.id);
                                    }}
                                >
                                    {item.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    );
}

const Sidebar = ({ className = `${styles.sidebar}`, products, isLoading, error, handleProduct, reset, filter }) => {
    const categories = ["men's clothing", "electronics", "jewelery", "women's clothing"];
    return (
        <aside className={className} aria-labelledby="aside-id">
            <h1 id="aside-id" className={styles.logo} onClick={reset}>Categories</h1>
            <ul className={styles.accordianArea}>
            { isLoading ? (
                <div className={styles.product}>Loading...</div>
            ) : error ? (
                <div className={styles.product}>An error occurred</div>
            ) :
                categories.map((cat, i) => {
                    return (
                        <Accordian 
                            filter={filter}
                            reset={reset}
                            title={cat}
                            content={products.filter((item) => item.category == cat)}
                            id={i}
                            handleProduct={handleProduct}
                        />
                    )
                })
            }
            </ul>
        </aside>
    );
};
export default Sidebar;