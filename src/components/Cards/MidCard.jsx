
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
        <div className={`rounded-xl border w-1/2 min-w-max bg-white mr-2`}>
            <div className={` w-full h-24 pt-2`}>
                {imageSrc && <img src={imageSrc} alt={'card'} />}
            </div>
            <div className={`rounded-t-2xl border-t-2 px-4 py-2`}>
                <p><strong>{textArray[0]}</strong></p>
                <p><strong>{textArray[1]}</strong></p>
                <p><strong>{textArray[2]}</strong></p>
            </div>
            <div className={`flex justify-end px-4 py-2`}>
                <p className={`text-green-700`}><strong>{footText}</strong></p>
            </div>
        </div>
    )
    
}

export default MidCard;