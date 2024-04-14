import React from 'react'
import './Visit.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Saurma from '../../images/ba3.webp';
import Burger from '../../images/ba2.webp';
import Sandwich from '../../images/ba4.webp';
import Free from '../../images/ba1.webp'


const Visit = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="slider-container">
            <div className='visit'>VISIT OUR STORE</div>
            <div className='line'></div>
                <Slider {...settings}>
                    <div className='foodbox'>
                        <div><img className='product-img' src={Saurma} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Ham Sandwich</div>
                            <div><p className='ptext'>It is a long established fact that a reader</p></div>
                        </div>
                    </div>
                    <div className='foodbox'>
                        <div><img className='product-img' src={Burger} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Hamburger Veggie</div>
                            <div><p className='ptext'>It is a long established fact that a reader</p></div>
                        </div>
                    </div>
                    <div className='foodbox'>
                        <div><img className='product-img' src={Sandwich} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Sushi Sashimi</div>
                            <div><p className='ptext'>It is a long established fact that a reader</p></div>
                        </div>
                    </div>
                    <div className='foodbox'>
                        <div><img className='product-img' src={Free} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Pepperoni Pizza</div>
                            <div><p className='ptext'>It is a long established fact that a reader</p></div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Visit