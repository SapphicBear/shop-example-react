import styles from "./sidebar.module.css";

const Sidebar = ({ className = `${styles.sidebar}`, products, isLoading, error }) => {
    return (
        <aside className={className} aria-labelledby="aside-id">
            <h1 id="aside-id" className={styles.logo}>Look at our wares</h1>
            <ul className={styles.wares}>
                {isLoading ? (
                    <li>Loading...</li>
                ) : products.length === 0 == false ? (
                    products.map((item) => {
                        return (
                            <li key={item.id} className={styles.product}>
                                {item.title}
                            </li>
                        )
                    })
                ) : error ? (
                    <li>An error occurred...</li>
                ) : ""}
            </ul>
        </aside>
    );
};
export default Sidebar;