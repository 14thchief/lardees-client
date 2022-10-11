
const SmallCard = ({variant, imageSrc, text}) => {
    
    return (
        <div className={`${variant === 'big'? 'rounded-xl border p-2 w-36 h-16 text-lg' : 'rounded-full border px-2 p-1 w-28 h-12'} mr-2 min-w-max flex justify-between items-center font-bold bg-white`}>
            <div className={`rounded-lg border w-2/5 h-full`}>
                {imageSrc && <img src={imageSrc} alt={`icon`} />}
            </div>
            <div className={`w-3/5 h-full flex items-center`}>
                <p className={`w-full text-center text-sm`}>{text}</p>
            </div>
        </div>
    )
}

export default SmallCard;