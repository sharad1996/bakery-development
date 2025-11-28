import { FaLocationDot } from "react-icons/fa6";

import { MdOutlineBakeryDining } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[oklch(43.9%_0_0)] w-full min-h-screen flex flex-col">
      <div className="text-center text-4xl md:text-5xl text-white py-8">
        <h1>Visit Us Across Indore</h1>
      </div>


      <div className="text-white flex flex-col lg:flex-row gap-6 justify-center items-center px-4">
        <div className="bg-[oklch(70.5%_0.213_47.604)] w-full max-w-[400px] h-16 border rounded-xl flex justify-center items-center">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet Greens</h2>
        </div>
        <div className="bg-[oklch(70.5%_0.213_47.604)] w-full max-w-[400px] h-16 border rounded-xl flex justify-center items-center">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet JLT</h2>
        </div>
        <div className="bg-[oklch(70.5%_0.213_47.604)] w-full max-w-[400px] h-16 border rounded-xl flex justify-center items-center">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet Metha</h2>
        </div>
      </div>

      <div className="my-10 px-4">
        <hr className="border-white" />
      </div>


      <div className="flex flex-col md:flex-row justify-center text-white gap-10 px-6">

        <div className="w-full md:w-[350px] text-center md:text-left">
          <h1 className="text-4xl text-[#be185d] mb-4 cursor-pointer">
            Bakery
          </h1>
          <p>
            Savour the richness of Indian cuisine at one of the most loved
            Indian restaurants in Dubai, dine-in, take away or order online!
          </p>
        </div>


        <div className="w-full md:w-[250px] text-center md:text-left">
          <h1 className="text-3xl mb-4">About us</h1>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About us</li>
            <li>Gallery</li>
            <li>Get In Touch</li>
          </ul>
        </div>


        <div className="w-full md:w-[250px] text-center md:text-left">
          <h1 className="text-3xl mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li>Food Menu</li>
            <li>Our Sweets</li>
            <li>Gifting Solutions</li>
            <li>Privacy Policy</li>
            <li>Franchise Enquiry</li>
          </ul>
        </div>

      
        <div className="w-full md:w-[300px] text-center md:text-left">
          <h1 className="text-3xl mb-4">Get In Touch</h1>
          <ul className="space-y-3">
            <li>
              Shop No 2, Building No 65 - near Lamcy Plaza - Oud - Metha -
              Indore
            </li>
            <li>eventsmybakery@gmail.com</li>
            <li>+91 7567384989</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 px-4">
        <hr className="border-white" />
      </div>

      <div className="text-white text-center py-5">
        <p>Copyright © 2025 Bakery</p>
      </div>
    </div>
  );
};

export default Footer;
