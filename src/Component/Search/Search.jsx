import axios from "axios";
import { useEffect, useState } from "react";


const Search = ({item}) => {

    


    return (
       <div>
         <div className="card bg-base-100  shadow-xl">
                <figure>
                     <img
                      className="w-full h-72"
                      src={item?.imageLink}
                      alt="Shoes" />
               </figure>
             <div className="card-body text-left">
             <h2 className="card-title">{item?.productName}</h2>
             <h2>Brand Name: {item?.brandName}</h2>
             <p>Description: {item?.description}</p>
             <h2>Catagory Name: {item?.categoryName}</h2>
             <h2>Price: {item?.price}</h2>
             <h2>Product Creation Time: {item?.productCreationDateTime}</h2>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
            </div>
       </div>
    );
};

export default Search;