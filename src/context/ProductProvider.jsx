import React, { createContext, useState } from 'react';

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [product, setProduxt] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => product(data))
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

export default ProductProvider;