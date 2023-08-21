import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import style from "./Products.module.css";

// Components
import Card from './shared/Card';
import Loader from './shared/Loader';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

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
            <h1>Products</h1>
            <div className={style.cards}>
                {
                    productsState?.loading ? <Loader /> :
                    productsState?.error ? <p>Something went wrong</p> :  
                    filteredProducts.map((product) => <Card key={product.id} productData={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;