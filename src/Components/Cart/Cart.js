import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;

    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <button className='order-summary'><p>Selected Icecream:</p></button>
            {
                cart.map(product => <h3 className='clickedItem'>{product.name}</h3>
                )
            }
            <p>Selected Item:{cart.length}</p>
            <p><button>CHOOSE 1 FOR ME</button></p>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;