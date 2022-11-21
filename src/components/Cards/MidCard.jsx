import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * MidCard - renders a card with an image and three blocks of text.
 * @param {imageSrc}: The source image to render
 * @param {textArray} - The array[3] of texts to render
 * @param {bottmText} - The small-text to render at the bottom right of the card.
 *  
 * @returns: The rendered card div.
 */
const MidCard = ({imageSrc, textArray, footText}) => {

    return (
        <div className={`rounded-xl w-48 h-52 min-w-56 bg-white mr-4`}>
            <div className={` w-full h-28 pt-1 overflow-hidden`}>
                {imageSrc && <img src={imageSrc} alt={'card'} className={`h-40 w-44 mx-auto`} />}
            </div>
            <div className={`bg-white rounded-t-xl text-start px-4 py-2`}>
                <p className="text-black h-4"><strong><small>{textArray[0]}</small></strong></p>
                <p className="text-black h-4"><small>{textArray[1]}</small></p>
                <p className="text-black h-4"><small>{textArray[2]}</small></p>
            </div>
            <div className={`flex justify-between px-4 pb-2`}>
                <p className={`text-green-700`}><strong><small>₦{footText}</small></strong></p>
                <span className="rounded-lg border px-2 pt-1 bg-red-700 text-white"><Link to={`/product`}><FaArrowRight size={14} /></Link></span>
            </div>
        </div>
    )
    
}

export default MidCard;