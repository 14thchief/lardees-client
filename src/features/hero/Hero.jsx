import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCartPlus, FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import LargeCard from "../../components/Cards/LargeCard";
import MidCard from "../../components/Cards/MidCard";
import SmallCard from "../../components/Cards/SmallCard";
import Header from "../../components/Header/Header";
import classes from './Hero.module.scss';
import axios from 'axios';
import rice_and_stew from '../../assets/rice_stew_assorted.png';

const Hero = () => {
    const leftBox = useRef(null);
    const rightBox = useRef(null);

    const [data, setData] = useState([])
    useEffect(()=>{
        console.log(leftBox.current, rightBox.current);
        axios.get('http://localhost:1414/')
        .then(({data})=>{
            setData(data);
        })
        .catch((err)=> console.log(err.response))
        
    },[])

     console.log({data})

    return (
        <>
        <Header />
        <main className={`${classes.main}`}>
            <section className={`${classes.topCategorySection}`}>
                <div className={`${classes.heading}  ${classes.subSection}`}>
                    <h1><strong>Top Categories</strong></h1>
                    <button>View all <FaArrowRight /></button>
                </div>
                <div className={`${classes.horizontalScroll}  ${classes.subSection}`}>
                {
                    [
                        {
                            id: null,
                            title: "Rice",
                            image: null,
                        },
                        {
                            id: null,
                            title: "Swallow",
                            image: null,
                        },
                        {
                            id: null,
                            title: "Beans",
                            image: null,
                        },
                    ].map((category, index)=>{
                        return (
                            <Link key={index} to={`category/${category.id || index}`}><SmallCard imageSrc={category.image} text={category.title} variant={`big`} /></Link>
                        )
                    })
                }                
                </div>
            </section>
            <section className={`${classes.recomendedSection}`}>
                <div className={`${classes.heading}  ${classes.subSection}`}>
                    <h1><strong>Recommended for you</strong></h1>
                    <button>View all <FaArrowRight /></button>
                </div>
                <div className={`${classes.horizontalScroll}  ${classes.subSection}`}>
                    <Link to={`product`}><MidCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} /></Link>
                    <Link to={`product`}><MidCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} /></Link>
                    <Link to={`product`}><MidCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} /></Link>
                </div>
            </section>
            <section className={`${classes.popularComboSection}`} >
                <div className={`${classes.heading}  ${classes.subSection}` }>
                    <h1><strong>Hot Combos <span className="ml-2"><FaFire color="orangered"/></span></strong></h1>
                    {/* <button>View all <FaArrowRight /></button> */}
                </div>
                <div className={`${classes.verticalScroll}  ${classes.subSection}`}>
                    <LargeCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} />
                    <LargeCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} />
                    <LargeCard imageSrc={rice_and_stew} textArray={['Jollof rice', 'Fried plantain', 'Beef/Chicken/Fish']} footText={`2,500`} />
                </div>
            </section>
            <section className={`${classes.fixedBottom}`}>
                <div ref={leftBox} id={`${classes.left}`}>
                    <button >Check out <span>{50}</span> packages</button>
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