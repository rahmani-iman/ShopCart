import React from 'react';

//Style
import style from './Navbar.module.css';

//Images 
import cart from '../assets/images/cart.png';
import user from '../assets/images/user.png';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.title}>
                <h1>Shop<span>Cart</span></h1>
            </div>
            <div className={style.options}>
                <div className={style.cart}>
                    <img src={cart} alt="cart"/>
                </div>
                <div className={style.user}>
                    <img src={user} alt="user"/>
                </div>
                <input type="text" placeholder="search ..." className={style.search}/>
            </div>
        </div>
    );
};

export default Navbar;