import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Product = () => {

    const {data:items,refetch}=useQuery({
        queryKey:['items'],
        queryFn:async()=>{
            const res=await axios.get('http://localhost:5012/items')
            return res.data
        }
    })

    console.log(items)

    return (
        <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-4 lg:px-8">

                {
                    items?.map(item=><>
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

                                   </>)
                }

              
            </div>
        </section>
    );
};

export default Product;