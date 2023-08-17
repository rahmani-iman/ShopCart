import React, { useState } from 'react';

//Style
import style from './Navbar.module.css';

//Images 
import cart from '../assets/images/cart.png';
import user from '../assets/images/user.png';
import search from '../assets/images/search.png';

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const clickHandler = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={style.navbar}>
            <div className={style.title}>
                <h1>Shop<span>Cart</span></h1>
            </div>
            <div className={style.hamburger_menu} onClick={clickHandler}>
                <span className={`${style.bar} ${style.bar_one} ${isExpanded && style.expanded}`}></span>
                <span className={`${style.bar} ${style.bar_two} ${isExpanded && style.expanded}`}></span>
                <span className={`${style.bar} ${style.bar_three} ${isExpanded && style.expanded}`}></span>
            </div>
            <div className={`${style.options} ${isExpanded && style.expanded}`}>
                <ul className={style.category}>
                    <li>Bags</li>
                    <li>Shoes</li>
                    <li>T-Shirts</li>
                </ul>
                <div className={style.user_btns}>
                    <div className={style.cart}>
                        <span className={style.counter}>0</span>
                        <img src={cart} alt="cart"/>
                    </div>
                    <div className={style.user}>
                        <img src={user} alt="user"/>
                    </div>
                </div>
                <div className={style.searchbar}>
                    <input type="text" placeholder="search ..." className={style.search}/>
                    <img src={search} alt="search" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;