import React from 'react'
import './BestSeller.css'
import Hut from '../../images/4.webp'
import Vegetables from '../../images/7.webp'
import Hamburgers from '../../images/8.webp'
import Shawarme from '../../images/10.webp'
import Kebab from '../../images/11.webp'
import Pepproni from '../../images/13.webp'
import Chicken from '../../images/14.webp'
import Sushi from '../../images/16.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const BestSeller = () => {
    // const dispatch = useDispatch()

    // const addedBasket = (product) => {
    //     dispatch(addBasket(product))
    // };
    const [products, setProducts] = useState([]);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        
            fetch('http://localhost:1010/products',requestOptions)
            .then((response) => response.json())
            .then((result) => setProducts(result))
            .catch((error) => console.log("error", error));
        };

        useEffect(() => {
            getData();
          }, []);
        return (
            <div className='bestseller'>
                <div>
                    <div className='best'>BEST SELLER</div>
                    <div className='line2'></div>
                </div>
                <div className='seller'>Best Seller Product This Week!</div>
                <div className='boxs'>
                    {products.map((product) => (

                        <div className='box' key={product.id}>
                            <div className='box1'>
                                <div><img className='seller-img' src={product.image} alt="" /></div>
                                <div className='boxtexts'>{product.name}</div>
                                <div className='total'>${product.price.toFixed(2)}</div>
                                {/* <div><button className='add' onClick={()=>addedBasket(product)}>ADD TO CART</button></div> */}
                            </div>
                        </div>,
                        console.log(products)
                        //  <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Vegetables} alt="" /></div>
                        //         <div className='boxtexts'>Mixed Vegetables</div>
                        //         <div className='total'>$20.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Hamburgers} alt="" /></div>
                        //         <div className='boxtexts'>Hamburgers</div>
                        //         <div className='total'>$20.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Shawarme} alt="" /></div>
                        //         <div className='boxtexts'>Shawarma Kati</div>
                        //         <div className='total'><span className='price'>$22.00</span> $20.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Kebab} alt="" /></div>
                        //         <div className='boxtexts'>Shish Kebab Pizza</div>
                        //         <div className='total'>$21.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Pepproni} alt="" /></div>
                        //         <div className='boxtexts'>Pepperoni Pizza</div>
                        //         <div className='total'>$26.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Chicken} alt="" /></div>
                        //         <div className='boxtexts'>Marinated Chicken</div>
                        //         <div className='total'><span className='price'>$30.00</span> $28.00</div>
                        //     </div>
                        // </div>,
                        // <div className='box'>
                        //     <div className='box1'>
                        //         <div><img className='seller-img' src={Sushi} alt="" /></div>
                        //         <div className='boxtexts'>Sushi Sashimi</div>
                        //         <div className='total'>$20.00</div>
                        //     </div>
                        // </div> 
                    ))}
                </div>
            </div>
        )
    }

    export default BestSeller