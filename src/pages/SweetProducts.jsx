

import { useState } from "react";
import { SweetDummyApi } from "../../data.js";




const SweetProducts = ()=>{

     const [data,setData] = useState(SweetDummyApi) ;





     return(

          <div className="mt-10">

              <h1 className="text-center mb-10 text-4xl font-bold">Sweet Products</h1>

              <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-20 mb-20">
                 {
                      data.map((item)=>(
                           <div className="w-[480px] h-[400px] rounded-xl flex flex-col shadow-lg shadow-blue-300 justify-center items-center" key={item.id}>
                              <h1 className="font-bold">{item.name}</h1>
                              <img className="w-80 h-70 object-cover rounded-xl" src={item.image} />
                              <p>{item.description}</p>
                              <h3><span className="font-bold">Price</span> : {item.price}</h3>
                           </div>
                      ))
                 }
              </div>

          </div>
     )

}


export default SweetProducts ;
