
import { useState } from "react";
import { BakeryDummyApi } from "../../data.js";

const BakeryProduct = ()=>{


     const [data,setData] = useState(BakeryDummyApi);






       return(
           <div className="mt-15">

              <h1 className="text-center mb-20 text-4xl"> <span className="text-pink-700">Bakery</span> Products</h1>


              <div className="grid lg:grid-cols-2 mx-20 grid-cols-1 mb-20 gap-20">

              {
                  data.map((item)=>(
                      <div className="w-[480px] h-[400px] shadow-lg shadow-blue-300 rounded-xl flex flex-col justify-center items-center " key={item.id}>

                           <h1>{item.name}</h1>
                           <img className="w-80 h-70 object-cover rounded-xl"  src={item.image} />

                           <p>{item.description}</p>
                           <h3><span className="font-bold">Price :</span> {item.price}</h3>

                      </div>
                  ))
              }


             </div>



           </div>
       )
}


export default BakeryProduct ;
