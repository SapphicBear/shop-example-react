import styles from "./header.module.css";
import Button from "../button/Button";
const Header = ({ onClick }) => {

    return (
        <header className={styles.header} aria-labelledby="message">
            <div className={styles.logoArea}>
                <h1 id="message">Example Shop in React!</h1>
                <p>Low prices, low morals!</p>
            </div>
            <Button 
                onClick={onClick}
                type="default"
                label="Go to shop"
            />
        </header>
    );
}

export default Header;