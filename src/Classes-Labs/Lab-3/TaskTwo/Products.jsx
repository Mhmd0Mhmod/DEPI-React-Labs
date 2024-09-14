import React from 'react';
import {products} from '../ProductData.js';
import ProductCard from './PoductCard.jsx';

const Products = () => {
    return (
        <div className='products'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;