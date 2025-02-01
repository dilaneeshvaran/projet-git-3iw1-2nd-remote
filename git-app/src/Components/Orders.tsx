import React from 'react';
import { products } from '../data/products';
import { Product } from '../types';

const Orders: React.FC = () => {
    return (
        <div>
            <h1>Product Orders</h1>
            <ul>
                {products.map((product: Product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;