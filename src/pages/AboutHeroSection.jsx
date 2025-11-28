
import imageabo from "../assets/about2.jpeg"




const AboutHeroSection = ()=>{

      return(
        
          <div  className="mx-10 relative my-10 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[450px] rounded-2xl bg-center bg-cover" style={{backgroundImage :`url(${imageabo}) `}}>

                  <div className="absolute top-[40%] left-[35%]">
                         <h1 className="md:text-4xl tex-3xl text-white font-bold">Top Indian Bakery In <span className="text-pink-800">Indore</span></h1>
                  </div>
          </div>
      )
}

export default AboutHeroSection ;
