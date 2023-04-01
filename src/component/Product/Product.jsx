import React from 'react';
import './Product.css'

const Product = (props) => {

    const {img, name} = props.products;
    const addToCart = props.addToProduct;

    
    return (
        <div className='product-compo'>
            <img src={img} alt="" />
            <div>
            <h6>{name}</h6>
            </div>
            <button onClick={() => addToCart(props.products)} className='btn-cart'>add to cart</button>
        </div>
    );
};

export default Product;