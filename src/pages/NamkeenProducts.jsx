import { useState } from "react";
import { NamkeenDummyApi } from "../../data.js";

const NamkeenProducts = ()=>{

  const [data,setData] = useState(NamkeenDummyApi) ;





      return(

        <div className="mb-30">
            <h1 className="mb-20 text-4xl font-bold text-center mt-10">Namkeen Products</h1>

            <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-20">
                {
                    data.map((item)=>(
                        <div className="w-[480px] h-[420px] shadow-lg shadow-blue-200 rounded-xl  flex flex-col items-center justify-center" key={item.id}>

                          <h1>{item.name}</h1>
                          <img className="object-cover rounded-xl w-90 h-80" src={item.image} />
                          <p>{item.description}</p>
                          <h3><span className="font-bold">Price: </span>{item.price}</h3>



                        </div>
                    ))

                }
            </div>
        </div>
      )
}


export default NamkeenProducts;
