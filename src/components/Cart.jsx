import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Component
import CartElement from './shared/CartElement';

// Actions
import { clear, checkout } from '../redux/cart/cartAction';

//Style
import style from './Cart.module.css';

const Cart = () => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={style.container}>
            <div className={style.productContainer}>
                {state.selectedItems.map(item => <CartElement key={item.id} data={item} />)}
            </div>
            {
            state.itemsCounter > 0 &&
                <div className={style.orderContainer}>
                    <div className={style.items}>Total Items : {state.itemsCounter}</div>
                    <div className={style.payments}>Total Payments : {state.total} $</div>
                    <div className={style.register}>
                        <button className={style.checkout} onClick={() => dispatch(checkout())}>Checkout</button>
                        <button className={style.clear} onClick={() => dispatch(clear())}>Clear</button>
                    </div>
                </div>
            }
            {
                state.itemsCounter === 0 && !state.checkout &&
                    <div className={style.complete}>
                        <h3>Your cart is empty</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }
            {
                state.checkout &&
                    <div className={style.complete}>
                        <h3>Checked out successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
            }
        </div>
    );
};

export default Cart;