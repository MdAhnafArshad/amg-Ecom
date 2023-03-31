import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    console.log(products);
    return (
        <div className='shop'>
           <div className="product-container">
            {
                products.map(product =><Product key={product.id} products={product}></Product>)
            }
           </div>
            <div className="card-container">
            <h3>side bar</h3>
            </div>
        </div>
    );
};

export default Shop;