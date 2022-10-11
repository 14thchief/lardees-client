import classes from './PaperWithChildren.module.scss';

const PaperWithChildren = ({children, variant='long'}) => {
    
    return (
        <div 
            className={`rounded-t-2xl p-4 ${classes.paper} ${classes[variant]}`}
        >
            {children}
        </div>
    )
}

export default PaperWithChildren;