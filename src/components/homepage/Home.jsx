import styles from "./home.module.css";
const Home = () => {

    return (
        <main aria-labelledby="call-to-action" className={styles.main}>
            <div className="call2ActionArea">
                <h1 id="call-to-action">Welcome to the store of the future.</h1>
            </div>
        </main>
    );
};

export default Home;