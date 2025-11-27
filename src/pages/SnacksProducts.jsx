import {SnackDummyApi} from "../../data.js" ;
import { useState } from "react";



const SnacksProducts = ()=>{

   const [data,setData] = useState(SnackDummyApi);

   console.log(data) ;



      return(

        <div className="mt-10">

         <h1 className="text-center mb-10 text-4xl font-bold">Snacks Products</h1>

         <div className="grid lg:grid-cols-2 grid-cols-1 mx-20 gap-20 mb-20">
             {
                 data.map((item)=>(
                     <div className="w-[480px] h-[400px] shadow-lg shadow-blue-200 rounded-xl flex flex-col justify-center items-center" key={item.id}>

                      <h1>{item.name}</h1>
                      <img className="w-80 h-70 object-cover rounded hover:scale-105" src={item.image} alt="image"></img>
                      <p>{item.description}</p>
                      <h3><span className="font-bold ">Price</span> : {item.price}</h3>

                     </div>
                 ))
             }
         </div>

        </div>
      )
}


export default SnacksProducts ;
