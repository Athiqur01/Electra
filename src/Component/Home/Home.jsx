import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';

const Home = () => {

    const {count}=useLoaderData()
    console.log(count)
    const [itemsPerPage, setItemsPerPage]=useState(6)
    const [currentPage, setCurrentPage]=useState(0)
    const [items,setItems]=useState(null)
    const [searchTerm, setSearchTerm]=useState('')
    const [searchItem, setSearchItem]=useState([])
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

    

    useEffect(()=>{
        fetch(`http://localhost:5012/items?page=${currentPage}&size=${itemsPerPage}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[currentPage,itemsPerPage])

     useEffect(()=>{
        fetch(`http://localhost:5012/item?q=${searchTerm}`)
        .then(res=>res.json())
        .then(data=>setSearchItem(data))
    }

    ,[searchTerm])

    console.log('search item',searchItem)


    return (
        <div>
            <h2 className='text-4xl lg:text-6xl font-bold py-10'>Product</h2>

            {/* Search bar start */}
            <div className='flex justify-end px-2 md:px-8 lg:px-10 mb-10 md:mb-14 lg:mb-20'>
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

            {/* Search bar end */}
            
            {/* Product section start */}
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
    );
};

export default Home;