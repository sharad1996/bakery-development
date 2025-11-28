import AboutHeroSection from "./AboutHeroSection";

import imag from "../assets/about3.jpg";
import { CiHeart } from "react-icons/ci";

import CardSection from "./CardSection";

import { Link } from "react-router-dom";

import mp4 from "../assets/bakeryvideo.mp4";

import { AboutDataCard, AboutDataCard2,AboutDataCard3,AboutDataCard4 } from "../../data.js";
import Testimonal from "./Testimonal.jsx";

const About = () => {
  return (
    <div className="mb-20">
      <AboutHeroSection />

      <div className="flex lg:flex-row flex-col ">
        <div className="w-[60%] mx-10 mb-10">
          <img
            className=" md:w-[80%]  rounded-2xl   h-120 object-cover"
            src={`${imag}`}AboutDataCard3
          />
        </div>
        <div className="w-[80%] h-120 lg:mb-20 md:mb-30 mb-90 mx-15 ">
          <h3 className="md:mb-9 mb-7">WELCOME TO Bakery</h3>

          <h1 className="mb-9 text-4xl">
            Because Great Taste Starts With Great Heart….
          </h1>
          <p className="text-gray-500">
            At My Gangour, we’re not just serving food, we’re serving India on a
            plate. Rooted in tradition and perfected over generations, we bring
            you the rich, diverse flavors of Indian sweets and street food made
            with love, care, and the finest ingredients.
            <br />
            <br /> We also specialize in bringing the vibrant spirit of Indian
            street food to Dubai and the richness of traditional Indian food to
            your plate using authentic recipes, premium ingredients, and the
            kind of care only a true Indian kitchen can offer. Whether you want
            to enjoy the best jalebi in Dubai, crispy kachoris, or a plate of
            homestyle thali, everything we serve is crafted by skilled chefs who
            are passionate about delivering the finest taste.
            <br />
            <br />
            Whether it’s a family dinner, festive celebration, or a sweet
            craving at midnight, we’re here to serve joy, warmth, and
            unforgettable flavors.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  justify-center m-10">
        <p className="text-orange-300 font-semibold mb-6">
          THE STARS OF OUR MENU
        </p>

        <h1 className="text-4xl mb-5">Dishes Loved By Everyone</h1>

        <p className="text-gray-400 text-xl">
          Craving the best Indian food in Dubai? Our bestsellers are a bite of
          nostalgia, bold, flavorful, and comforting.
        </p>
      </div>

      <div className="mb-10">
        <CardSection data={AboutDataCard} />
      </div>

      <div className="flex justify-center w-full items-center mt-25 lg:mx-10 mb-20">
        <Link
          to="/menu"
          target="_blank"
          download
          className="px-6 py-3 bg-red-600 text-white rounded-lg flex  gap-1 font-semibold hover:bg-red-700 transition"
        >
          <CiHeart size={20} className="font-bold" /> View food menu
        </Link>
      </div>

      <div className="relative mb-10">
        <video autoPlay muted loop>
          <source src={mp4} type="video/mp4" />
        </video>

        <p className="absolute md:top-30 top-10 lg:top-50 mx-10 text-white ">
          ROOTED IN TRADITION, SPICED WITH LOVE
        </p>

        <h1 className="absolute md:top-40 top-20 lg:top-60 text-4xl text-white mx-10">
          India’s Finest Tastes
          <br /> Await You!
        </h1>
      </div>

      <div className="mb-20 flex flex-col items-center justify-center">
        <h3>WHY Bakery</h3>

        <h1>
          Discover Why We’re Loved as One of the Top Indian Restaurants in Dubai
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 mx-10 md:mx-[60%] lg:mx-30 mb-20">
        {AboutDataCard2.map((item) => {
          const Icon = item.image;

          return (
            <div
              className="w-80 h-70 shadow-lg shadow-sky-200 text-gray-400 flex flex-col items-center justify-center"
              key={item.id}
            >
              <Icon size={40} className="mb-3" />

              <h1 className="text-3xl mb-3 text-center">{item.name}</h1>

              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

     <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mx-10 mb-20">
         {   AboutDataCard3.map((item,index)=>(

              <div className={`lg:w-70 lg:h-100   ${index%2 ===0 ? "mt-20" : ""} hover:scale-y-105 `} key={item.id}>

                  <img className="rounded-2xl" src={item.image} />

              </div>
         ))

         }
     </div>


     <div className="grid lg:grid-cols-4 grid-cols-2 mb-20">
        {
          AboutDataCard4.map((item)=>(
              <div key={item.id}>

              <h1 className="text-center mb-3 text-4xl mb-1">{item.name}</h1>
              <p className="text-center text-orange-300 mb-1">{item.description}</p>



              </div>
          ))
        }
     </div>

     <div>
          <h3 className="text-center">TESTIMONIALS</h3>

          <h1 className="text-center">Real Stories from Real Food Lovers.</h1>

          <Testimonal />

     </div>


    </div>
  );
};

export default About;
