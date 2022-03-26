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
            <h3>Order Summary:</h3>
            {
                cart.map(product => <h3>{product.name}</h3>
                )
            }
            <p>Selected Item:{cart.length}</p>
            <p>Total Price</p>
            <p><button>CHOOSE 1 FOR ME</button></p>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;