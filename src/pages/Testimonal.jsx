


import { useState } from "react";
import { TestimonalData} from "../../data.js";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

console.log(TestimonalData)

const Testimonal = ()=>{

    const [currentIndex,setCurrentIndex] = useState(1) ;

    const [data,setData] = useState(TestimonalData);


    const handleLeftClick=()=>{

        if(currentIndex=== 0){
             setCurrentIndex(data.length - 1) ;

        }

        setCurrentIndex(currentIndex - 1) ;


    }

    const handleRightClick=()=>{

    }


       return(
          <div>

             {
                 <div>
                    <MdKeyboardArrowLeft onClick={handleLeftClick} size={30}/>
                  <p>{data[currentIndex].description}</p>

                  <MdKeyboardArrowRight onClick={handleRightClick} size={30}/>

                  </div>
             }


          </div>
       )
}


export default Testimonal ;
