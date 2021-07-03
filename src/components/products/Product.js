import React from 'react';
import { ProductDiv } from './ProductElements';


const Product = ({ product }) => {
    return (
        <ProductDiv>
            <img src={product.image} alt="string" style={{ width: '300px'}}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </ProductDiv>
    )
}

export default Product
