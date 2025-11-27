import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ApplyLayout from "./components/layout/ApplyLayout.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import Menu from "./pages/Menu.jsx";

import Home from "./pages/Home.jsx";
import SnacksProducts from "./pages/SnacksProducts.jsx";
import SweetProducts from "./pages/SweetProducts.jsx";
import BakeryProduct from "./pages/BakeryProduct.jsx";
import NamkeenProducts from "./pages/NamkeenProducts.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ApplyLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "contact",
          element: <Contact />,
        },

        { path: "/menu", element: <Menu /> },

        { path: "/namkeen", element: <NamkeenProducts /> },

        { path: "/sweets", element: <SweetProducts /> },

        { path: "/bakery", element: <BakeryProduct /> },

        { path: "/snacks", element: <SnacksProducts /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
