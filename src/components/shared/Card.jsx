import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Style
import style from "./Card.module.css";

// Icons
import trashIcon from "../../assets/images/trash.svg";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

// Functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

// Actions
import { addItem, removeItem, increase, decrease } from '../../redux/cart/cartAction';

const Card = ({productData}) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={style.container} >
            <img className={style.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={style.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={style.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && <button className={style.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash_icon" /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={style.smallButton} onClick={() => dispatch(decrease(productData))}><img src={minus} alt='minus_icon' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={style.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={style.smallButton} onClick={() => dispatch(increase(productData))}><img src={plus} alt='plus_icon' /></button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;