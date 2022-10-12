import { useEffect, useRef } from "react";
import { FaArrowRight, FaCartPlus, FaFire } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import LargeCard from "../../components/Cards/LargeCard";
import MidCard from "../../components/Cards/MidCard";
import SmallCard from "../../components/Cards/SmallCard";
import Header from "../../components/Header/Header";
import classes from './Hero.module.scss';

const Hero = () => {
    const leftBox = useRef(null);
    const rightBox = useRef(null);
    
    useEffect(()=>{
        console.log(leftBox.current, rightBox.current)
    },[])

    return (
        <>
        <Header />
        <main className={`${classes.main}`}>
            <section className={`${classes.heading}`}>
                <h1><strong>Top Categories</strong></h1>
                <button>View all <FaArrowRight /></button>
            </section>
            <section className={`${classes.horizontalScroll}`}>
                <SmallCard imageSrc={null} text={`Rice`} variant={`big`} />
                <SmallCard imageSrc={null} text={`Swallow`} variant={`big`} />
                <SmallCard imageSrc={null} text={`Beans`} variant={`big`} />
                
            </section>
            <section className={`${classes.heading}`}>
                <h1><strong>Recommended for you</strong></h1>
                <button>View all <FaArrowRight /></button>
            </section>
            <section className={`${classes.horizontalScroll}`}>
                <MidCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
                <MidCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
                <MidCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
            </section>
            <section className={`${classes.heading}`}>
                <h1><strong>Popular Combos <FaFire color="red"/></strong></h1>
                <button>View all <FaArrowRight /></button>
            </section>
            <section className={`${classes.verticalScroll}`}>
                <LargeCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
            </section>
            <section className={`${classes.fixedBottom}`}>
                <div ref={leftBox} id={`${classes.left}`}>
                    <Button ><FaCartPlus size={35} /><span>{50}</span></Button>
                </div>
                <div ref={rightBox} id={`${classes.right}`}>
                </div>
            </section>
        </main>
        </>

        
      
        
    )
}

export default Hero;

// eslint-disable-next-line no-lone-blocks
{/* <PaperWithChildren>
            <SmallCard imageSrc={null} text={`Rice`} />
            <SmallCard imageSrc={null} text={`Rice`} variant={`big`} />
            <MidCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
            <LargeCard imageSrc={null} textArray={['Jollof rice', 'Fried plantain', 'X2 beef/chicken/Fish']} footText={`NGN 2,500`} />
        </PaperWithChildren> */}