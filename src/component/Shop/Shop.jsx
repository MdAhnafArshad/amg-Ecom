import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    const [cart, setCart] = useState([])


    const addToProduct = (product) =>{
        // console.log('product added');
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        
    }

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // step-1 get the id
        const saveCart = [];
        for(const id in storedCart){
            //step-2 get the product by using id
            const addedProduct  = products.find(product => product.id === id);

            if(addedProduct){
                // step-3 add the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct);
            }

            console.log(addedProduct);

        }
        //set the cart
        setCart(saveCart);
    },[products])

    // console.log(products);
    return (
        <div className='shop'>
           <div className="product-container">
            {
                products.map(product =><Product 
                    key={product.id} 
                    products={product}
                    addToProduct={addToProduct}
                    ></Product>)
            }
           </div>
            <div className="card-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;