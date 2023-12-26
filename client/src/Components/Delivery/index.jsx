import React, { useState } from "react";

import DeliveryCarousel from "./DeliveryCarousel";
// import RestaruntCard from "./RestaruntCard"

const Delivery = () => {
  const [restaruntList, setRestaruntList] = useState([]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text md:font-semibold">
        Delivery Restarunts in NCR (Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {/* {restaruntList.map((restarunt) => (
          <RestaruntCard {...restarunt} key={restarunt._id} />
        ))} */}
      </div>
    </>
  );
};

export default Delivery;
