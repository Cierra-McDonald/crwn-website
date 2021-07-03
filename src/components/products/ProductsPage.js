import React from 'react'
import { Header, ProductWrapper } from './ProductElements'
import Product from './Product'
import { getProducts } from '../../services/apiUtils'

const ProductsPage = () => {

        let products = getProducts();

        return ( 
        <ProductWrapper>
           <Header>Product page!</Header>
            {products.map(product => (<li key={product.name}>
            <Product product={product}/>
             </li>))}
        </ProductWrapper>
        
        )
    };


export default ProductsPage
