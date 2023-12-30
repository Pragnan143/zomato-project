import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

// components
import Navbar from "../Components/Navbar";
import ImageGrid from "../Components/Restarunts/ImageGrid";
import InfoButton from "../Components/Restarunts/InfoButton";
import RestaurantInfo from "../Components/Restarunts/RestaruntInfo";
import Tabs from "../Components/Restarunts/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

// redux
// import { useDispatch } from "react-redux";
// import { getSpecificRestaurant } from "../redux/reducers/restaurant/restaurant.action";
// import { getImage } from "../redux/reducers/image/image.action";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [restaurant, setRestaurant] = useState({
    images: [
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/9386449fd71cc10c9b1007469be4fe10.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
      },
    ],
    name: "Biryani Blues",
    cuisine: ["Biryani", "Kebab", "Desserts"],
    address: "Connaught Place, New Delhi",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });

  // const dispatch = useDispatch();
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getSpecificRestaurant(id)).then((data) => {
  //     setRestaurant((prev) => ({
  //       ...prev,
  //       ...data.payload.restaurant,
  //     }));

  //     dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
  //       setRestaurant((prev) => ({
  //         ...prev,
  //         images: data.payload.images,
  //       }));
  //     });
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo {...restaurant} />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky bg-white top-0 pt-2 z-10">
          <Tabs />
        </div>
        {Component}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
