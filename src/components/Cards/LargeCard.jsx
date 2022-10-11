import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";

const LargeCard = ({imageSrc, textArray, footText}) => {

    return (
        <div className={`rounded-lg border w-11/12 bg-white`}>
            <div className={` w-full h-32 pt-2`}>
                {imageSrc && <img src={imageSrc} alt={'card'} />}
            </div>
            <div className={`rounded-t-2xl border-t-2 px-4 py-2`}>
                <p><strong>{textArray[0]}</strong></p>
                <FaRegDotCircle size={10} />
                <p><strong>{textArray[1]}</strong></p>
                <FaRegDotCircle size={10} />
                <p><strong>{textArray[2]}</strong></p>
            </div>
            <div className={`flex justify-end px-4 py-2`}>
                <p className={`text-green-700`}><strong>{footText}</strong></p>
            </div>
        </div>
    )
    
}

export default LargeCard;