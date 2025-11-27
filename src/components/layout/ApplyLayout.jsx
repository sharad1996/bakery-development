import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";

import Home from "../../pages/Home.jsx";

import { Outlet } from "react-router-dom";

const ApplyLayout = () => {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default ApplyLayout;
