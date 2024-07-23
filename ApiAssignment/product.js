import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setProduct(response.data); 
            })
            .catch(error => {
                console.error( error);
            });
    }, []); 

    return (
        <div>
        <h2 >Products</h2>
        <div>
            
            {product.map(product => (
                <div key={product.id} className='productCard'>
                    <div >
                        <img src={product.image} alt="product-Image" className='productImage' />
                        <h3 className='productTitle'>{product.title.slice(0,20)}...</h3>
                        <p className='productCategory'>{product.category}</p>
                        <p className='productDescription'>{product.description.slice(0,25)}...</p>
                        <p className='productRating'>Rating: {product.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Products;