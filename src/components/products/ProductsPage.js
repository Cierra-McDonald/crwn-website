import React from 'react'
import { Header, Image, ProductWrapper } from './ProductElements'
import ImageEight from '../../images/ImageEight.jpg'

const ProductsPage = () => {
    return (
        <ProductWrapper>
            <Header>Product page!</Header>
            <Image src={ImageEight}/>
        </ProductWrapper>
    )
}

export default ProductsPage
