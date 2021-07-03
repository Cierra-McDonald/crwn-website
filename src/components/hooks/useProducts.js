import { useEffect, useState } from 'react'
import { getProducts } from '../../services/apiUtils'

const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let stuff = [];

    useEffect(() => { 
        stuff = getProducts();
        return stuff;         
    })


    return { products, loading, stuff  }
}

export default useProducts
