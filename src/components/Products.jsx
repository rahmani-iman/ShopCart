import React from 'react';

//Style
import style from './Products.module.css';
import bgc from '../assets/images/bgc2.png'
const Products = () => {
    return (
        <div className={style.container}>
            <img src={bgc}  />
            <div>products</div>
        </div>
    );
};

export default Products;