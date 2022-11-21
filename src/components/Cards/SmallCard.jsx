import { FaFireAlt } from "react-icons/fa";

const SmallCard = ({variant, imageSrc, text}) => {
    
    return (
        <div className={`${variant === 'big'? 'rounded-xl p-2 w-28 h-12 text-lg' : 'rounded-full border px-2 p-1 w-20 h-8 bg-gray-100'} mr-2 min-w-max flex justify-between items-center font-bold bg-white`}>
            <div className={`flex justify-center items-center rounded-lg w-1/3 h-full`}>
                {false && imageSrc && <img src={imageSrc} alt={`icon`} />}
                <FaFireAlt color="orangered" />
            </div>
            <div className={`w-3/5 h-full flex items-center`}>
                <p className={`w-full text-center text-xs`}>{text}</p>
            </div>
        </div>
    )
}

export default SmallCard;