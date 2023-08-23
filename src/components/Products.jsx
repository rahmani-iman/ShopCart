import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import style from "./Products.module.css";

// Components
import Card from './shared/Card';
import Loader from './shared/Loader';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

//Images
import banner from '../assets/images/banner.png';
import arrow from '../assets/images/arrow.png';

const Products = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState);
    const searchState = useSelector(state => state.searchState);
    console.log(searchState.inputValue)
    useEffect(() => {
        if (!productsState?.products.length) dispatch(fetchProducts());
        // eslint-disable-next-line
    }, []);

    const filteredProducts = productsState?.products.filter((product) =>
    product.category.toLowerCase().includes(searchState.inputValue.toLowerCase())
    );

    return (
        <div className={style.container} >
            <div className={style.bannerContainer}>
                <div className={style.banner}>
                    <img src={banner}  />
                </div>
                <div className={style.title}>
                    <h1>Shop<span>Cart</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quos ea est, excepturi cupiditate in assumenda modi perspiciatis eum vitae sed harum repellat beatae at ab accusamus numquam quod laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quos ea est, excepturi cupiditate in!</p>
                    <img src={arrow} alt='arrow'  />
                </div>
            </div>
            <div className={style.productsContainer}>
                <h1>Products</h1>
                <div className={style.cards}>
                    {
                        productsState?.loading ? <Loader /> :
                        productsState?.error ? <p>Something went wrong</p> :  
                        filteredProducts.map((product) => <Card key={product.id} productData={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;