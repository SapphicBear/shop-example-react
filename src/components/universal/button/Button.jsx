import styles from "./button.module.css";

const Button = ({ onClick, label, type = styles.btn }) => {
    return (
        <button 
            onClick={onClick} 
            className={type}
            >
            {label}
        </button>
    )
}

export default Button;