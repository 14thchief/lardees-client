import classes from './Button.module.css';

const Button = ({children, onClick, className, customID}) => {

    return (
        <button id={customID || 'defaultButton'} onClick={onClick} className={`${className || `rounded-xl px-4 py-2 bg-green-600`} ${classes.resizable}` }>
            {children}
        </button>
    )
}

export default Button;