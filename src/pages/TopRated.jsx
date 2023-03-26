import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const { state: { product, loading, error } } = useProducts();

  let content;

  if(loading){
    content = <p>Loading...</p>
  }

  if(error){
    content = <p>Something went wrong!</p>
  }

  if(!loading && !error && product.length === 0){
    content = <p>Nothing found</p>
  }

  if(!loading && !error && product.length){
    content = product?.filter(product => product.rating >= 4)?.map(product => <ProductCard product={product} />)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
