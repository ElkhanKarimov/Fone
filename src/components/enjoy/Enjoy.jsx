import React from 'react'
import './Enjoy.css'
import Food from '../../images/ba7.webp'

const Enjoy = () => {
  return (
    <div>
        <div className='enjoy-section'>
            <img className='food-img' src={Food} alt="" />
            <div className='enjoytexts'>
                <div className='enjoy'>Enjoy The Delicious Taste</div>
                <div className='when'>When you’ve got your health, you got everything.</div>
                <div><button className='now'>SHOP NOW</button></div>
            </div>
        </div>
    </div>
  )
}

export default Enjoy