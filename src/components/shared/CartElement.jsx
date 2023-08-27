import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import style from "./CartElement.module.css";

// Functions
import { shorten } from '../../helper/functions';

//Image
import star from '../../assets/images/star.png';

// Icons
import trashIcon from "../../assets/images/trash.svg";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const CartElement = (props) => {

    const dispatch = useDispatch();
    const {image, price, quantity, rating, title} = props.data;

    return (
        <div className={style.container}>
            <img className={style.productImage} src={image} alt='product'/>
            <div className={style.data}>
                <div className={style.head}>
                    <h3 className={style.title}>{shorten(title)}</h3>
                    <div className={style.rate}>
                        <img src={star} alt='star' />
                        <p>{rating.rate}</p>
                    </div>
                </div>
                <p className={style.price}>Price : {price} $</p>
            </div>
            <div>
                <span className={style.quantity}>{quantity}</span>
            </div>
            <div className={style.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} ><img src={minus} alt='minus_icon' /></button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} ><img src={plus} alt='plus_icon' /></button>
            </div>
        </div>
    );
};

export default CartElement;