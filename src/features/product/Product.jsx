import Header from "../../components/Header/Header";
import PaperWithChildren from "../../components/PaperWithChildren/PaperWithChildren"
import classes from './Product.module.scss';
import rice_and_stew from '../../assets/rice_stew_assorted.png';
import SmallCard from "../../components/Cards/SmallCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPepperHot, FaPlus, FaStar } from "react-icons/fa";
import gsap from "gsap";

const Product = ({product}) => {
    useEffect(()=>{
        const target = document.getElementById('productImage');
        if(target){
            gsap.to(target, {
                // this is the vars object
                // it contains properties to animate
                // x: 200,
                // y: 10,
                // rotation: 360,
                scale: 1.3,
                // and special properties
                duration: 0.5
            })
            .then(()=>{
                gsap.to(target, {
                    // this is the vars object
                    // it contains properties to animate
                    // x: 200,
                    y: 20,
                    // rotation: 360,
                    scale: 1.3,
                    // and special properties
                    duration: 1
                })
            })
        }
    }, [])

    const [orderForm, setOrderForm] = useState({
        side: [
            {
                name: 'Plantain (Fried)',
                size: 'medium',
            },
        ],
        protein: [
            {
                name: 'Beef',
                quantity: 2,
            },
        ],
    });

    return (
        <main>
            <Header />
            <PaperWithChildren variant={`long`}>
                <div className={`${classes.productImageContainer} `}>
                    <img id="productImage" className={`${classes.productImage}`} src={product?.image || rice_and_stew} alt="food" />
                </div>
                <PaperWithChildren variant={`short`}>
                <div className={`${classes.productDetailContainer} ${classes.productImageContainer} `}>
                    <h1>{product?.title || "Basmati Rice & Lardees Pepper Sauce "}</h1>
                    <div className={`${classes.subDiv} flex`}>
                        <Link to={"/"}><SmallCard imageSrc={<FaStar color="orange" />} text={`popular`} variant={`small`} /></Link>
                        <Link to={"/"}><SmallCard imageSrc={<FaPepperHot color="red" />} text={`hot`} variant={`small`} /></Link>
                    </div>
                    <div className={`${classes.subDiv}`}>
                        <small>Description</small>
                        <p className="text-sm">
                            Lardees Nigerian Jollof rice 
                            made with fresh vegetables and spice 
                            with a choice range of sides and proteins. 
                            Exquisite!
                        </p>
                    </div>
                    <form>
                        <div className={`${classes.subDiv} ${classes.selectOptionsContainer}`}>
                            <small>Choose side</small>
                            <div>
                            {
                                orderForm?.side?.map((item, index)=>{
                                    return (
                                        <label key={index} htmlFor={`side${index}`} className={`${classes.optionRow}`}>
                                            <select defaultValue={item[index]?.name}>
                                                <option >Plantain (Fried)</option>
                                                <option >Moin-moin</option>
                                                <option >Beans</option>
                                            </select>
                                            <select defaultValue={item[index]?.size}>
                                                <option >Small</option>
                                                <option >Medium</option>
                                                <option >Large</option>
                                            </select>
                                            <button 
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                setOrderForm((prev)=>({
                                                    ...prev, side: [...prev.side, {
                                                        name: 'Plantain (Fried)',
                                                        size: 'medium',
                                                    }]
                                                }))
                                            }}
                                            className={`${index === orderForm?.side?.length -1? 'visible': 'invisible'}`}
                                            ><FaPlus /></button>
                                            {index !== 0 && 
                                            <button 
                                                onClick={(e)=>{
                                                    e.preventDefault();
                                                    if(index !== 0) {
                                                        setOrderForm(prev=> ({
                                                            ...prev, side: prev.side.filter((_, i)=> index !== i ),
                                                        }))
                                                    }
                                                }} 
                                                className={`${classes.closeButton}`}
                                            >x</button>}
                                        </label>
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className={`${classes.subDiv} ${classes.selectOptionsContainer}`}>
                            <small>Choose protein</small>
                            <div>
                            {
                                orderForm?.protein?.map((item, index)=>{
                                    return (
                                        <label key={index} htmlFor={`protein${index}`} className={`${classes.optionRow}`}>
                                            <select defaultValue={item[index]?.name}>
                                                <option >Beef</option>
                                                <option >Chicken</option>
                                                <option >Turkey</option>
                                            </select>
                                            <div defaultValue={item[index]?.quantity} className={`${classes.buttonGroup}`}>
                                                <button onClick={(e)=>{ e.preventDefault()}}><FaArrowLeft /></button>
                                                <input type="number" defaultValue={item.quantity} />
                                                <button onClick={(e)=>{ e.preventDefault()}}><FaArrowRight /></button>
                                            </div>
                                            <button 
                                            onClick={(e)=>{
                                                e.preventDefault();
                                                setOrderForm((prev)=>({
                                                    ...prev, protein: [...prev.protein, {
                                                        name: 'Beef',
                                                        size: 'medium',
                                                    }]
                                                }))
                                            }}
                                            className={`${index === orderForm?.protein?.length -1? 'visible': 'invisible'}`}
                                            ><FaPlus /></button>
                                            {index !== 0 && 
                                            <button 
                                                onClick={(e)=>{
                                                    e.preventDefault();
                                                    if(index !== 0) {
                                                        setOrderForm(prev=> ({
                                                            ...prev, protein: prev.protein.filter((_, i)=> index !== i ),
                                                        }))
                                                    }
                                                }} 
                                                className={`${classes.closeButton}`}
                                            >x</button>}
                                        </label>
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className={`${classes.subDiv} ${classes.selectOptionsContainer}`}>
                            <small>Pack Serving</small>
                            <div>
                                <div  className={`${classes.optionRow} ${classes.checkOutRow}`}>
                                    
                                    <div className={`${classes.buttonGroup}`}>
                                        <button onClick={(e)=>{ e.preventDefault()}}><FaArrowLeft /></button>
                                        <input type="number" defaultValue={20} />
                                        <button onClick={(e)=>{ e.preventDefault()}}><FaArrowRight /></button>
                                    </div>
                                    <button
                                        className={` text-white`}
                                        onClick={(e)=>{ e.preventDefault()}}
                                    >
                                        <span className="mr-2">Add to cart</span>
                                        <p className={`text-gray-200 text-xs`}>₦ 55,000</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </PaperWithChildren>
            </PaperWithChildren>
        </main>
    )
}

export default Product;