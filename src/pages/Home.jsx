import React from 'react'
import Admin from '../admin/Admin';
import BestSeller from '../components/bestseller/BestSeller';
import Enjoy from '../components/enjoy/Enjoy';
import Fone from '../components/fone/Fone';
import Slider from '../components/slider/Slider';
import Visit from '../components/visit/Visit';
import BasketSlice from '../slice/BasketSlice';
import CategorySlice from '../slice/CategorySlice';

const Home = () => {
    return (
        <div>
            {/* <Admin/> */}
            {/* <CategorySlice/> */}
            {/* <BasketSlice/> */}
            <Slider />
            <Visit />
            {/* <BestSeller /> */}
            <Admin/>
            <Enjoy />
            <Fone />
        </div>
    )
}

export default Home