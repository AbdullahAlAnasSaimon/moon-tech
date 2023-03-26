import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { initialState, productReducer } from '../state/ProductReducer';

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([]);

    const [state, dispatch] = useReducer(productReducer, initialState);

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