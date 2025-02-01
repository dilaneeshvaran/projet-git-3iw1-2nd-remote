import React from 'react';

const Products: React.FC = () => {
    const productList = [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$10' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$20' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$30' },
    ];

    return (
        <div className="products">
            <h1>Our Products</h1>
            <div className="product-list">
                {productList.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;