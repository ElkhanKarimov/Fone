import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.webp'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BasketSidebar from '../../components/sidebar/basket/BasketSidebar';
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Navbar = () => {
    const basket = useSelector(state => state.basket.items)

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            <nav>
                <div><img className='logo-img' src={logo} alt="" /></div>
                <div className='menuLinks'>
                    <a className='menua' href="">Home</a>
                    <div className='hot'>HOT</div>
                    <a className='menua' href="">Shop</a>
                    <a className='menua' href="">Featured</a>
                    <a className='menua' href="">Pages</a>
                    <a className='menua' href="">Blogs</a>
                </div>
                <div className='nav-icons'>
                    <CiSearch />
                    <CiUser />
                    <CiHeart />
                    <AiOutlineShopping />
                </div>
            </nav>
            <div>
                <div id="sideBar" className={sidebarOpen ? "sidebar1 open" : "sidebar1"}>
                    <div className="x-images">
                        <div className="your-x">
                            <div>
                                <h3 className="your-cart">YOUR CART</h3>
                            </div>
                            <div id='closeBar' onClick={toggleSidebar}><IoClose /></div>
                        </div>
                        <div className="cart-images">
                            {basket ? basket.map((item) => (
                                <div key={item.id} className='product-div'>
                                    <div>
                                        <img src={item.image} alt="" className='product-image1' />
                                        {/* <MdDelete className='delete-icon' onClick={()=>removeProduct(item.id)}></MdDelete> */}
                                    </div>
                                    <div>
                                        <p className='p-info'>{item.info}</p>
                                        <p>Price : {item.price}</p>
                                    </div>
                                </div>
                            )) : (<p>The basket is empty</p>)}
                        </div>
                    </div>
                    <div className="total-button">
                        <div>
                            <p className="total-btn">Total: $0.00</p>
                        </div>
                        <div className="cart-buttons">
                            <button className="view-cart">VIEW CART</button>
                            <button className="view-cart">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar