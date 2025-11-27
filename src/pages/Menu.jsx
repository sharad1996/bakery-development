import MenuHeroSection from "./MenuHeroSection";

import { Link } from "react-router-dom";

import bakeryimg from "../assets/bakery.webp";

import nakeen from "../assets/namkeen.jpg";

import sweet from "../assets/sweetnew.jpeg";

import snack from "../assets/snacks.jpg";

const Menu = () => {
  return (
    <div className="mb-36">
      <MenuHeroSection />

      <div className="grid lg:grid-cols-2  grid-cols-1 md:mx-26 mx:10 gap-10 ">

        <div className="w-100 h-100 mb-30 mx-20  hover:scale-105   ">
          <Link to="/namkeen">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-amber-100  "
              src={`${nakeen}`}
            />
          </Link>

          <h1 className="text-center mb-4 font-bold">Namkeen</h1>

          <p className="">
            From crispy kachoris, samosa, and pakodas to the desi Mumbai Pav
            Bhaji, we serve every iconic Indian street food in Dubai; bold,
            spicy, and bursting with flavor.
          </p>
        </div>

        <div className="w-100 h-100 mx-20  mb-30 hover:scale-105">
          <Link to="/bakery">
            <img
              className="w-full h-full object-cover  rounded-2xl shadow-amber-100"
              src={`${bakeryimg}`}
            />
          </Link>

          <h1 className="text-center mb-4 font-bold">Bakery</h1>

          <p className="">
            From crispy kachoris, samosa, and pakodas to the desi Mumbai Pav
            Bhaji, we serve every iconic Indian street food in Dubai; bold,
            spicy, and bursting with flavor.
          </p>
        </div>

        <div className="w-100 h-100 mx-20  mb-30 hover:scale-105">
          <Link to="/sweets">
            <img
              className="w-full h-full object-cover  rounded-2xl shadow-amber-100"
              src={`${sweet}`}
            />
          </Link>

          <h1 className="text-center mb-4 font-bold">Sweet</h1>

          <p className="">
            From crispy kachoris, samosa, and pakodas to the desi Mumbai Pav
            Bhaji, we serve every iconic Indian street food in Dubai; bold,
            spicy, and bursting with flavor.
          </p>
        </div>

        <div className="w-100 h-100 mb-30 mx-20 hover:scale-105 ">
          <Link to="/snacks">
            <img
              className="w-full h-full object-cover   rounded-2xl shadow-amber-100"
              src={`${snack}`}
            />
          </Link>

          <h1 className="text-center mb-4 font-bold text-2xl">Snacks</h1>

          <p className="">
            From crispy kachoris, samosa, and pakodas to the desi Mumbai Pav
            Bhaji, we serve every iconic Indian street food in Dubai; bold,
            spicy, and bursting with flavor.
          </p>
        </div>

        <div className="flex justify-center w-full items-center mt-25 lg:mx-50 mx-10">
  <Link
    to="" target="_blank"
    download
    className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
  >
    Download food menu
  </Link>
</div>
      </div>


    </div>
  );
};

export default Menu;
