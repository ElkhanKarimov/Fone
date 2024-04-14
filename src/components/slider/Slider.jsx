import React from 'react'
import './Slider.css'
import slider1 from '../../images/slider1.webp'
import slider2 from '../../images/s2.webp'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='slider1texts'>
                            <div className='style'>S t y l e D e s t i n a t i o n</div>
                            <div className='burger'>Burger Delicious</div>
                            <div className='content'>It is a long established fact
                                that a reader will be distracted by
                                the readable content</div>
                            <div><button className='shopnow'>SHOP NOW</button></div>
                        </div>
                        <img src={slider1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <div className='slider2texts'>
                            <div className='style'>S t y l e D e s t i n a t i o n</div>
                            <div className='burger'>Delicious Foods</div>
                            <div className='content'>It is a long established fact
                                that a reader will be distracted by
                                the readable content</div>
                            <div><button className='shopnow'>SHOP NOW</button></div>
                        </div>
                        <img src={slider2} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider