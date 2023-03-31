import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.products)
    const {img, name} = props.products;
    return (
        <div className='product-compo'>
            <img src={img} alt="" />
            <div>
            <h6>{name}</h6>
            </div>
            <button className='btn-cart'>add to cart</button>
        </div>
    );
};

export default Product;