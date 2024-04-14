import React from 'react'
import './Fone.css'
import Hamb from '../../images/instagram2.webp'
import Susi from '../../images/instagram3.webp'
import Nuggets from '../../images/instagram4.webp'
import Cookies from '../../images/instagram5.webp'
import Coofee from '../../images/instagram6.webp'
import Frees from '../../images/instagram1.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fone = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1
    };
  return (
    <div>
        <div className='fone-section'>
            <div className='foneinsta'>FONE ON INSTAGRAM</div>
            <div className='line3'></div>
            <div className='fone'>#fone</div>
            <div className='fone-slider'>
            <Slider {...settings}>
                        <div className='fone-box'><img className='fone-img' src={Hamb} alt="" /></div>
                        <div className='fone-box'><img className='fone-img' src={Susi} alt="" /></div>
                        <div className='fone-box'><img className='fone-img' src={Nuggets} alt="" /></div>
                        <div className='fone-box'><img className='fone-img' src={Cookies} alt="" /></div>
                        <div className='fone-box'><img className='fone-img' src={Coofee} alt="" /></div>
                        <div className='fone-box'><img className='fone-img' src={Frees} alt="" /></div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Fone