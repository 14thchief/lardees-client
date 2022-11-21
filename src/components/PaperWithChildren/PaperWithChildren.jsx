import classes from './PaperWithChildren.module.scss';

const PaperWithChildren = ({children, variant='long'}) => {
    
    return (
        <div 
            className={`rounded-t-2xl ${classes.paper} ${classes[variant]}`}
        >
            {children}
        </div>
    )
}

export default PaperWithChildren;