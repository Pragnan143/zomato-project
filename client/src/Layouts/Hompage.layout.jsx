import React from "react";
// import Navbar from "../Components/Navbar";
// import FoodTabs from "../Components/FoodTabs";

const HompageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      // <Navbar/>
      // <FoodTabs/>
      <div className="container mx-auto px-4 lg:px-20">
        <Component {...props} />
      </div>
    );
  };

export default HompageLayout;
