import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props;
    const { name, price, picture, id } = props.product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={picture} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p>Price:{price}</p>
                </div>
                <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)}><p className='btn-text'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;