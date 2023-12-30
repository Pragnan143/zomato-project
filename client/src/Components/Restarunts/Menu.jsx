import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import getImage from "../../redux/reducers/image/image.action";

// components
import MenuCollection from "./MenuCollection";

const Menu = () => {
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/menus/375/19011375/08241f07614e38f81c7bb0fe4b7b3d10.jpg",
    "https://b.zmtcdn.com/data/menus/475/18708475/bac97f6b27dfe2cb34b0f654e5e16026.jpg",
    "https://b.zmtcdn.com/data/menus/375/19011375/08241f07614e38f81c7bb0fe4b7b3d10.jpg",
  ]);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, [reduxState]);

  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  );
};
export default Menu;
