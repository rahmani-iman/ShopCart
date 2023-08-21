import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import style from "./Products.module.css";

// Components
import Card from './shared/Card';

// Redux
import { fetchProducts } from '../redux/products/productsAction';

const Products = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState);

    useEffect(() => {
        if (!productsState?.products.length) dispatch(fetchProducts());
        // eslint-disable-next-line
    }, []);

    return (
        <div className={style.container} >
            <h1>Products</h1>
            <div className={style.cards}>
                {
                    productsState?.loading ? <h1>loading...</h1> :
                    productsState?.error ? <p>Something went wrong</p> :
                    productsState?.products.map((product) => <Card key={product.id} productData={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;