import React from "react";

const SmCards = ({ image, title }) => {
  return (
    <>
      <div className="lg:hidden  rounded-md w-full">
        <div className="w-full h-26">
          <img
            src={image}
            alt={title}
            className="h-full w-full  object-center rounded-full"
          />
        </div>
        <h3 className="text-sm my-1 text-center font-light">{title}</h3>
      </div>
    </>
  );
};
const LargeCards = ({ image, title }) => {
  return (
    <>
      <div className="hidden lg:block rounded-md w-full">
        <div className="w-full h-26">
          <img
            className="w-full h-full object-center  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-light">{title}</h3>
        </div>
      </div>
    </>
  );
};
const DeliveryCategory = (props) => {
  return (
    <>
      <SmCards {...props} />
      <LargeCards {...props} />
    </>
  );
};

export default DeliveryCategory;
