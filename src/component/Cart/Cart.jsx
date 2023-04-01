import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log('this is ',cart);


    let totalPrice = 0;
    let totalShipping = 0;
    for (const item of cart) {
        totalPrice = totalPrice + item.price;
        totalShipping = totalShipping + item.shipping;
    }

    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>This is card summary</h4>
            <p>select product: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping} </p>
            <p>Tax: {tax}</p>
            <h6>Grand total: {grandTotal}</h6>
        </div>
    );
};

export default Cart;