import React from 'react';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const {count}=useLoaderData()
    console.log(count)

    return (
        <div>
            <h2 className='text-4xl lg:text-6xl font-bold py-10'>Product</h2>
            <Product></Product>
        </div>
    );
};

export default Home;