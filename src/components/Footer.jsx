import { FaLocationDot } from "react-icons/fa6";

import { MdOutlineBakeryDining } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[oklch(43.9%_0_0)] w-full h-full lg:h-[600px] md:h-[900px] h-[1500px] flex flex-col">
      <div className="text-center text-5xl text-white py-8">
        <h1>Visit Us Across Indore</h1>
      </div>

      <div className="text-white lg:flex-row flex flex-col gap-10 mx-15">
        <div className="bg-[oklch(70.5%_0.213_47.604)]  w-90 h-15 border rounded-xl flex justify-center items-center ">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet Greens</h2>
        </div>

        <div className="w-90 h-15 border rounded-xl flex justify-center items-center bg-[oklch(70.5%_0.213_47.604)] ">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet JLT</h2>
        </div>

        <div className="w-90 h-15 border rounded-xl flex justify-center items-center bg-[oklch(70.5%_0.213_47.604)] ">
          <FaLocationDot />
          <h2 className="mx-4">Bakery Sweet Metha</h2>
        </div>
      </div>

      <div className="my-11 text-white mb-6 bg-[oklch(70.5%_0.213_47.604)] ">
        <hr className="text-2xl"></hr>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-[600px] my-10 ">
          <div className="my-3 relatve  md:flex justify-center mx-35 text-4xl  ">
            <Link to="/">
              <span className="text-[#be185d] md:text-4xl md:mt-20 md:mx-10 cursor-pointer items-center ">
                Bakery

              </span>
            </Link>
          </div>

          <div className="my-6 text-center text-white">
            <p>
              Savour the richness of Indian cuisine at one of the most loved
              Indian restaurants in Dubai, dine-in, take away or order online!
            </p>
          </div>
        </div>

        <div className="w-[400px]  flex flex-col items-center text-white ">
          <div className="mt-17">
            <h1 className="text-3xl mb-5">About us</h1>
          </div>

          <ul className="text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Gallery</li>
            <li>Get In Touch</li>
          </ul>
        </div>

        <div className="w-[400px]  flex flex-col items-center text-white  ">
          <div className="mt-17">
            <h1 className="text-3xl mb-5">Quick Links</h1>
          </div>

          <ul className="text-white">
            <li>Food Menu</li>
            <li>Our Sweets</li>
            <li>Gifting Solutions</li>
            <li>Privacy Policy</li>
            <li>Franchise Enquiry</li>
          </ul>
        </div>

        <div className="w-[400px]  flex flex-col items-center mr-5 text-white ">
          <div className="mt-17">
            <h1 className="text-3xl mb-5">Get In Touch</h1>
          </div>

          <ul className="text-white">
            <li className="my-3">Shop No 2, Building No 65 - near Lamcy Plaza - Oud - Metha - Indore </li>
            <li className="my-3">eventsmybakery@gmail.com</li>
            <li>+91 7567384989</li>


          </ul>
        </div>


      </div>

      <div className="text-3xl text-white my-5">

        <hr></hr>
      </div>


      <div className="text-white" >
          <p className="mx-10">Copyright © 2025 Bakery </p>
      </div>



    </div>
  );
};

export default Footer;
