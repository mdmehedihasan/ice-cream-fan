import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props;
    const { name, price, picture, id, brand } = props.product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={picture} alt="" />
                <div className='product-info'>
                    <h2 className='product-name'>{name}</h2>
                    <h5>Brand:{brand}</h5>
                    <h5>Price: ${price}</h5>
                </div>
                <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)}><p className='btn-text'>ADD TO CART</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;