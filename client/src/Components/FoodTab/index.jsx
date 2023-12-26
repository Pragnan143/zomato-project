import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import classnames from "classnames";

const MobileFoodTab = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining",
    },
    {
      id: "night",
      icon: <BiDrink />,
      name: "NightLife",
    },
    {
      id: "nutri",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();
  return (
    <>
      <div className="lg:hidden flex bg-white shadow-lg fixed bottom-0 z-10 w-full items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="w-1/4">
            <div
              className={
                type === item.id
                  ? "flex items-center flex-col relative text-xl text-zomato-400"
                  : "flex items-center flex-col text-xl"
              }
            >
              <div
                className={
                  type === item.id
                    ? "w-full h-full border-t-2 border-zomato-400 pt-3 flex flex-col items-center"
                    : "flex flex-col pt-3 items-center"
                }
              >
                {item.icon}
              </div>
              <h5 className="text-sm pb-3">{item.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <MobileFoodTab />
    </>
  );
};

export default FoodTab;
