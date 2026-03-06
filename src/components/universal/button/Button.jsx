import styles from "./button.module.css";

const Button = ({ onClick, label, type = "default" }) => {
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