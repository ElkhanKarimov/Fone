import React from 'react'
import './Footer.css'
import Cards from '../../images/cards.png'
import logo from '../../images/logo.webp'
import { FaTwitter } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='first-footer'>
                <div className='ftrbox'>
                    <div><img className='logo-img' src={logo} alt="" /></div>
                    <div className='sop'>Sophisticated simplicity for the</div>
                    <div className='sop1'>independent mind.</div> 
                    <div className='ftr-icons'><FaTwitter /><IoBasketballOutline /><FaBehance /><FaInstagram /></div>
                </div>
                <div className='ftrbox'>
                    <div className='maintext'>Help & Information</div>
                    <div className='line4'></div>
                    <div><a className='ftra' href="">About Us</a></div>
                    <div><a className='ftra' href="">Privacy Policy</a></div>
                    <div><a className='ftra' href="">Terms & Conditions</a></div>
                    <div><a className='ftra' href="">Products Return</a></div>
                    <div><a className='ftra' href="">Wholesale Policy</a></div>
                </div>
                <div className='ftrbox'>
                    <div className='maintext'>About Us</div>
                    <div className='line4'></div>
                    <div><a className='ftra' href="">Pagination</a></div>
                    <div><a className='ftra' href="">Terms & Conditions</a></div>
                    <div><a className='ftra' href="">Contact</a></div>
                    <div><a className='ftra' href="">Accessories</a></div>
                    <div><a className='ftra' href="">Home Page</a></div>
                </div>
                <div className='ftrbox'>
                    <div className='maintext'>Categories</div>
                    <div className='line4'></div>
                    <div><a className='ftra' href="">Menu items</a></div>
                    <div><a className='ftra' href="">Help Center</a></div>
                    <div><a className='ftra' href="">Address Store</a></div>
                    <div><a className='ftra' href="">Privacy Policy</a></div>
                    <div><a className='ftra' href="">HomePage</a></div>
                </div>
            </div>
            <div className='line5'></div>
            <div className='last-footer'>
                <div>© Copyright 2022 | Fone By EngoTheme. Powered by Shopify.</div>
                <div><img src={Cards} alt="" /></div>
            </div>
        </div>
    )
}

export default Footer