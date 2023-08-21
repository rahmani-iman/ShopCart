import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Style
import style from './Navbar.module.css';

//Images 
import cartIcon from '../../assets/images/cart.png';
import userIcon from '../../assets/images/user.png';
import searchIcon from '../../assets/images/search.png';

//Actions
import { setInputValue } from "../../redux/searchValues/searchValuesAction";

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const clickHandler = () => {
        setIsExpanded(!isExpanded)
    };

    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartState);

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
                <div className={style.searchbar}>
                    <input type="text" placeholder="search ..." className={style.search} onChange={(e) => dispatch(setInputValue(e.target.value))}/>
                    <img src={searchIcon} alt="search" />
                </div>
                <div className={style.user_btns}>
                    <div className={style.cart}>
                        <span className={style.counter}>{cartState.itemsCounter}</span>
                        <img src={cartIcon} alt="cart"/>
                    </div>
                    <div className={style.user}>
                        <img src={userIcon} alt="user"/>
                    </div>
                </div>
                <ul className={style.category}>
                    <li>electronics</li>
                    <li>jewelery</li>
                    <li>men's clothing</li>
                    <li>women's clothing</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;