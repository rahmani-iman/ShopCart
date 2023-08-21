import React from 'react';

//Style
import style from './Banner.module.css';

//Images
import banner from '../assets/images/banner.png';
import arrow from '../assets/images/arrow.png';

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={banner}  />
            </div>
            <div className={style.title}>
                <h1>Shop<span>Cart</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quos ea est, excepturi cupiditate in assumenda modi perspiciatis eum vitae sed harum repellat beatae at ab accusamus numquam quod laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quos ea est, excepturi cupiditate in!</p>
                <img src={arrow} alt='arrow'  />
            </div>
        </div>
    );
};

export default Banner;