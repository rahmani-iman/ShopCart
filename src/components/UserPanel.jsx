import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Style
import style from './UserPanel.module.css';

//Component
import CartElement from './shared/CartElement';

//Image
import userIcon from '../assets/images/user.png';

//Icons
import bell from '../assets/images/bell.png';
import exit from '../assets/images/exit.png';
import home from '../assets/images/home.png';
import order from '../assets/images/order.png';
import setting from '../assets/images/setting.png';

const UserPanel = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.header}>
                    <div className={style.avatar}>
                        <div className={style.user}>
                            <img src={userIcon} alt="user"/>
                        </div>
                        <p className={style.username}>Your Profile</p>
                    </div>
                    <div className={style.bl}></div>
                    <div className={style.head}>
                        <div className={style.circle}></div>
                        <div className={style.title}>Your Wallet</div>
                    </div>
                    <div className={style.bl}></div>
                    <div className={style.head}>
                        <div className={style.circle}></div>
                        <div className={style.title}>Your discounts</div>
                    </div>
                </div>
                <div className={style.tail}>
                    <div>
                        <img src={home} alt='icon'/>
                        <span>Home</span>
                    </div>
                    <div>
                        <img src={order} alt='icon'/>
                        <span>Orders</span>
                    </div>
                    <div>
                        <img src={bell} alt='icon'/>
                        <span>Notification</span>
                    </div>
                    <div>
                        <img src={setting} alt='icon'/>
                        <span>Settings</span>
                    </div>
                    <div>
                        <img src={exit} alt='icon'/>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            <div className={style.cart}>
                {state.selectedItems.map(item => <CartElement key={item.id} data={item} />)}
                <Link to='/cart'>Go to cart</Link>
            </div>
        </div>
    );
};

export default UserPanel;