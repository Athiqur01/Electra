import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';
import FilterProduct from '../FilterProduct/FilterProduct';

const Home = () => {

    const {count}=useLoaderData()
    console.log(count)
    const [itemsPerPage, setItemsPerPage]=useState(6)
    const [currentPage, setCurrentPage]=useState(0)
    const [items,setItems]=useState(null)
    const [searchTerm, setSearchTerm]=useState('')
    const [searchItem, setSearchItem]=useState([])
    const [shortOrder,setShortOrder]=useState('')
    const [shortedItem, setShortedItem]=useState([])
    //const itemsPerPage=6
    const totalPages=Math.ceil(count/itemsPerPage)
    console.log(totalPages)
    const pages=[]
    for(let i=0; i<totalPages; i++){
        pages?.push(i)

    }
    console.log(pages)

    
    const handleSearch=e=>{
        const searchData=e.target.value
        setSearchTerm(searchData)
        console.log(searchTerm)
    }
    
    console.log(searchTerm)


    const handleItemsPerPage=e=>{
        const val=parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)
    }

    const handleShortOrder=e=>{
        setShortOrder(e.target.value)
        console.log(e.target.value)
    }

    

    // useEffect(()=>{
    //     fetch(`http://localhost:5012/items?page=${currentPage}&size=${itemsPerPage}`)
    //     .then(res=>res.json())
    //     .then(data=>setItems(data))
    // },[currentPage,itemsPerPage])

     useEffect(()=>{
        fetch(`http://localhost:5012/item?q=${searchTerm}`)
        .then(res=>res.json())
        .then(data=>setSearchItem(data))
    }

    ,[searchTerm])

     useEffect(()=>{
        fetch(`http://localhost:5012/shortedItem?q=${shortOrder}&page=${currentPage}&size=${itemsPerPage}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    }

    ,[shortOrder,currentPage,itemsPerPage])

    


    return (
        <div>
            <h2 className='text-4xl lg:text-6xl font-bold py-10'>Product</h2>
           <div className='flex gap-6'> {/* this div flexes two div  */}
           <aside className='w-[20%]'>
            {/* Search bar start */}
            <div>
                <h2 className='text-center font-bold text-xl bg-blue-700 py-2 mb-4 text-white rounded-sm'>Search Product</h2>
            <div className='flex justify-center mb-6 md:mb-8 lg:mb-10'>
            <label className="input input-bordered flex items-center gap-2 max-w-72">
            <input type="text" onChange={handleSearch} value={searchTerm} className="grow text-black" placeholder="Search" />
            <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             className="h-4 w-4 opacity-70">
            <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
            </svg>
            </label>
            </div>
            </div>
            {/* Search bar end */}

            {/* Short product start */}
            <h2 className='text-center font-bold text-xl bg-blue-700 py-2 mb-4 text-white rounded-sm'>Sort Product</h2>
            <select value={shortOrder} onChange={handleShortOrder}  className='bg-red-50 px-4 py-2 font-semibold text-center rounded-sm ' name="" id="">
                <option value="" className='flex justify-center px-4 py-2 font-semibold text-center rounded-sm'></option>
                <option value="asc" className='flex justify-center px-4 py-2 font-semibold text-center rounded-sm'>Price Low to High</option>
                <option value="dsc" className='px-4 py-2 font-semibold text-center rounded-sm'>Price High to Low</option>
                <option value="latest" className='px-4 py-2 font-semibold text-center rounded-sm'>Latest Product</option>
            </select>

            {/* short product end */}


            {/* Filter product start */}
           <FilterProduct></FilterProduct> 

            {/* Filter product end */}

            </aside>
            
            {/* Product section start */}
            <div className='w-[80%]'>
            <section>

                {
                    searchTerm?.length>0?
               //  Products with search start
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-4 lg:px-8">
                {
                    searchItem?.map(item=><Search key={item._id} item={item}></Search>)
                }

                </div>
                 //  Products  search end
                :

            //  Products without search start
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-4 lg:px-8">

                {
                    items?.map(item=><Product key={item._id} item={item}></Product>)
                }
            </div>
            //product without search end
}
           </section>
            {/* Product section end */}
            
            {/* Pagination start */}
            <div className='space-x-3'>
            <button onClick={()=>currentPage>0 && setCurrentPage(currentPage-1)} className='px-3 py-1 border-red-50 border-2 bg-red-50 '>Prev</button>
                {pages.map(page=><>
                                   <button onClick={()=>{setCurrentPage(page)}} className={currentPage===page? 'px-3 py-1 border-red-50 border-2 bg-red-500 ' :'px-3 py-1 border-red-50 border-2 bg-red-50 '}>{page}</button>
                                </>)}
            <button onClick={()=>currentPage<pages?.length && setCurrentPage(currentPage+1)} className='px-3 py-1 border-red-50 border-2 bg-red-50 '>Next</button>
            <select onChange={handleItemsPerPage} value={itemsPerPage} name="" id="">
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
            </select>
            </div>
            {/* Pagination end */}
            </div>
         </div>
        </div>
    );
};

export default Home;