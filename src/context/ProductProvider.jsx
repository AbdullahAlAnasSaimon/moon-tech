import React, { createContext, useContext, useEffect, useState } from 'react';

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
      }, [])

    const providedData = {
        product
    };

    return (
        <PRODUCT_CONTEXT.Provider value={providedData}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () =>{
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;