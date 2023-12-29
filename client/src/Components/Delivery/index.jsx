import React, { useState } from "react";

import DeliveryCarousel from "./DeliveryCarousel";
import RestaruntCard from "../RestaruntCard";

const Delivery = () => {
  const [restaruntList, setRestaruntList] = useState([
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
    {
      _id: "hvbhjfbv6v6f5vf4v8f4v",
      isPro: true,
      isOff: true,
      name: "Bobbys Kitchen",
      restaurantReviewValue: "4",
      cuisine: [
        "bhjdbhd",
        "vdds",
        "dfddfsdfs",
        "fdsfdsfsd",
        "dfdfdsf",
        "dfdfs",
      ],
      averageCost: "450",
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restarunts in NCR (Delhi)
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaruntList.map((restarunt) => (
          <RestaruntCard {...restarunt} key={restarunt._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
