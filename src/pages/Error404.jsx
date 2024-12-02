import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <div className="m-0 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <div className="flex flex-1 justify-center items-center text-xl">
       404 NOT FOUND MOTHERFUCK'
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
