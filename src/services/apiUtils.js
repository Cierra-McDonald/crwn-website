import { Products } from './ProductData';

export const getProducts = () => { 
    let results = Products.map((product) => ({
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price

    }))

    return results;
}