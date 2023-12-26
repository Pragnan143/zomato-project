import React from "react";
import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab";

const HompageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <FoodTab />
        <div className="container mx-auto px-4 lg:px-20">
          <Component {...props} />
        </div>
      </>
    );
  };

export default HompageLayout;
