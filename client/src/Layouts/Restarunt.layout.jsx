import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import Navbar from "../Components/Navbar";
import ImageGrid from "../Components/Restarunts/ImageGrid";
import InfoButton from "../Components/Restarunts/InfoButton";
import RestaruntInfo from "../Components/Restarunts/RestaruntInfo";
import Tabs from "../Components/Restarunts/Tabs";
import CartContainer from "../Components/Cart/CartContainers";

const RestaruntLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <div className="container mx-auto px-4 lg:px-20">
          <ImageGrid />
          <RestaruntInfo
            name=""
            restaruntRating=""
            deliveryPath=""
            cusine=""
            address=""
          />
          <div className="my-4 flex flex-wrap gap-3 mx-auto ">
            <InfoButton>
              <TiStarOutline /> Review
            </InfoButton>
            <InfoButton>
              <RiDirectionLine /> Direction
            </InfoButton>
            <InfoButton>
              <BiBookmarkPlus />
              Bookmark
            </InfoButton>
            <InfoButton>
              <RiShareForwardLine />
              Share
            </InfoButton>
          </div>
          <div className="my-10">
            <Tabs />
          </div>
          <Component {...props} />
          <CartContainer />
        </div>
      </>
    );
  };

export default RestaruntLayout;
