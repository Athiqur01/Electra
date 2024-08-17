import React, { useEffect, useState } from 'react';

const FilterProduct = () => {

    const [filters, setFilter]=useState({
                                       brandName: '',
                                        categoryName: '',
                                        minPrice: '',
                                    //    maxPrice: ''
                                       })

    const handlefilter=e=>{
        //setFilter(e.terger.value)
        
        setFilter({
            ...filters,
            [e.target.name]: e.target.value
          });

          
    }

    const query = new URLSearchParams(filters).toString()
    console.log('filter',query)

    useEffect(()=>{
        fetch(`http://localhost:5012/filterItem?brandName=${filters.brandName}&categoryName=${filters.categoryName}&minPrice=${filters.minPrice}`)
        .then(res=>res.json())
        .then(data=>console.log('filtered product',data))
    },[filters.brandName,filters.categoryName,filters.minPrice])

    console.log('filter',query)

    return (
        <div className='mt-10'>
            <h2 className='text-center font-bold text-xl bg-blue-700 py-2 mb-4 text-white rounded-sm'>Filter Product</h2>
            <form  action="">
                <input onChange={handlefilter} name='brandName' value={filters.brandName} className='bg-red-50 px-4 py-2 font-semibold text-center rounded-sm mb-3' type="text" placeholder='Brand Name' />
                <input onChange={handlefilter} name='categoryName' value={filters.categoryName} className='bg-red-50 px-4 py-2 font-semibold text-center rounded-sm mb-3 ' type="text" placeholder='Product Catagory' />
                <input onChange={handlefilter} name='minPrice' value={filters.minPrice} className='bg-red-50 px-4 py-2 font-semibold text-center rounded-sm mb-3' type="text" placeholder='Min Price' />
                {/* <input onChange={handlefilter} name='maxPrice' value={filter.maxPrice} className='bg-red-50 px-4 py-2 font-semibold text-center rounded-sm mb-3' type="text" placeholder='Max price' /> */}
            </form>
            
        </div>
    );
};

export default FilterProduct;