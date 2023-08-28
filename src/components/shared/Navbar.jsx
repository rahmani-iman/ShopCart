import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <Link to='/products' className={style.title}>
                <h1>Shop<span>Cart</span></h1>
            </Link>
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
                    <Link to='/cart' className={style.cart}>
                        <span className={style.counter}>{cartState.itemsCounter}</span>
                        <img src={cartIcon} alt="cart"/>
                    </Link>
                    <Link to='/userpanel' className={style.user}>
                        <img src={userIcon} alt="user"/>
                    </Link>
                </div>
                <ul className={style.category}>
                    <li onClick={() => dispatch(setInputValue(""), clickHandler())}>all products</li>
                    <li onClick={(e) => dispatch(setInputValue(e.target.innerText), clickHandler())}>electronics</li>
                    <li onClick={(e) => dispatch(setInputValue(e.target.innerText), clickHandler())}>jewelery</li>
                    <li onClick={(e) => dispatch(setInputValue(e.target.innerText), clickHandler())}>men's clothing</li>
                    <li onClick={(e) => dispatch(setInputValue(e.target.innerText), clickHandler())}>women's clothing</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;