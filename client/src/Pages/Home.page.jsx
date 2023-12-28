import React from "react";
import { useParams } from "react-router-dom";
import HomePageLayout from "../Layouts/Hompage.layout";
import Delivery from "../Components/Delivery/index";
import DineOut from "../Components/Dining/index";
import NightLife from "../Components/Nightlife/index";
import Nutrition from "../Components/Nutrition/index";

const Homepage = () => {
  const { type } = useParams();
  return (
    <>
      <div className="my-5 sm:mb-20">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <DineOut />}
        {type === "night" && <NightLife />}
        {type === "nutri" && <Nutrition />}
      </div>
    </>
  );
};

export default HomePageLayout(Homepage);
