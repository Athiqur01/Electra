import React from 'react';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const {count}=useLoaderData()
    console.log(count)
    const itemsPerPage=6
    const totalPages=Math.ceil(count/itemsPerPage)
    console.log(totalPages)
    const pages=[]
    for(let i=0; i<totalPages; i++){
        pages?.push(i)

    }
    console.log(pages)

    return (
        <div>
            <h2 className='text-4xl lg:text-6xl font-bold py-10'>Product</h2>
            <Product></Product>
            <div className='space-x-3'>
                {pages.map(page=><>
                                   <button className='px-3 py-1 border-red-50 border-2 bg-red-50 '>{page}</button>
                                </>)}
            </div>
        </div>
    );
};

export default Home;