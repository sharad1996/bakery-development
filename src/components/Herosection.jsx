import image1 from "../../public/image1.jpg";

import image2 from "../../public/image2.jpg";

import image3 from "../../public/image3.jpg";

import image4 from "../../public/image4.jpg";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Herosection = () => {
  const [currentindex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 2000);

    return ()=> clearInterval(autoplay)

  },[currentindex]);

  const prevSlide = () => {
    setCurrentIndex((previndex) =>
      previndex === 0 ? slides.length - 1 : previndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((previndex) =>
      previndex === slides.length - 1 ? 0 : previndex + 1
    );
  };
  

  return (
    <div className="max-w-[1400px] h-[780px] w-full   py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentindex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover bg-contain duration-1000"
      >

       <div className="flex flex-col absolute top-50 left-12">

           <h1 className="text-white text-xl mb-3">Welcome to Bakery Sweet</h1>

           <p className="text-5xl text-white mb-4">The Best Bakery in Indore</p>

           <p className="text-white mb-5">Serving Authentic Indian Flavors and Timeless Recipes in the Heart of Indore</p>

           <Link className="text-white bg-pink-900 rounded-xl px-3 py-3 w-30" to="/contact">Get in touch</Link>
       </div>



      </div>
    </div>
  );
};

export default Herosection;
