import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

//Style
import style from './ProductDetails.module.css';

// Functions
import { isInCart, quantityCount } from '../helper/functions';

// Actions
import { addItem, removeItem, increase, decrease } from '../redux/cart/cartAction';

//Image
import star from '../assets/images/star.png';

// Icons
import trashIcon from "../assets/images/trash.svg";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;
    const data = useSelector(state => state.productsState.products);
    let product = [];
    data && product.push(data[id - 1]);
    
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <p className={style.params}>Home &gt; Products &gt; Product{id}</p>
            <div className={style.details}>
                <div className={style.productImage}>
                    <img src={product[0]?.image} alt='product'/>
                </div>
                <div className={style.productDetails}>
                    <h1 className={style.title}>{product[0]?.title}</h1>
                    <h2 className={style.category}>{product[0]?.category}</h2>
                    <div className={style.rate}>
                        <img src={star} alt='star' />
                        <p>{product[0]?.rating.rate}</p>
                    </div>
                    <p className={style.price}>price : {product[0]?.price} $</p>
                    <p className={style.description}>{product[0]?.description}</p>
                    <div className={style.linkContainer}>
                        <div className={style.buttonContainer}>
                        {quantityCount(state, product[0]?.id) === 1 && <button className={style.smallButton} onClick={() => dispatch(removeItem(product[0]))}><img src={trashIcon} alt="trash_icon" /></button>}
                        {quantityCount(state, product[0]?.id) > 1 && <button className={style.smallButton} onClick={() => dispatch(decrease(product[0]))}><img src={minus} alt='minus_icon' /></button>}
                        {quantityCount(state, product[0]?.id) > 0 && <span className={style.counter}>{quantityCount(state, product[0]?.id)}</span>}
                        {
                            isInCart(state, product[0]?.id) ?
                            <button className={style.smallButton} onClick={() => dispatch(increase(product[0]))}><img src={plus} alt='plus_icon' /></button> :
                            <button onClick={() => dispatch(addItem(product[0]))}>Add to Cart</button>
                        }
                        </div>
                        <Link to="/products">Back to shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetails;