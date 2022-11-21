import { FaCartPlus, FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LargeCard = ({imageSrc, textArray, footText}) => {

    return (
        <div className={`rounded-lg w-11/12 bg-white my-3`}>
            <div className={` w-full h-40 pt-2 overflow-hidden`}>
                {imageSrc && <img src={imageSrc} alt={'card'} className={`h-60 w-64 mx-auto`} />}
            </div>
            <div className={`rounded-t-2xl px-4 py-2`}>
                <p><strong>{textArray[0]}</strong></p>
                
                <p><strong>{textArray[1]}</strong></p>
                
                <p><strong>{textArray[2]}</strong></p>
            </div>
            <div className={`flex items-center justify-between px-4 py-2`}>
                <p className={`text-green-700`}><strong>₦{footText}</strong></p>
                <Link to={`/product`}><p className="flex items-center rounded-lg border px-4 py-2 bg-red-700 text-white"><span className="pb-1 mr-2"><FaCartPlus size={20} /></span> Add to Cart</p></Link>
            </div>
        </div>
    )
    
}

export default LargeCard;