import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// redux
// import { useDispatch, useSelector } from "react-redux";
// import getImage from "../../redux/reducers/image/image.action";

// components
import PhotoCollection from "./PhotoCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/5/19011375/e53719e907d07e411bccf3cd4e1d269a_o2_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/5/18708475/e81f66522df2f3dbc3c9d0aa3ce0756d_o2_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/5/19918745/2a5ab0cfe73c771b7064a77c382643c0_o2_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/2/19010712/5846d2367b5aedd93176bec72ebffbff_o2_featured_v2.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  // const dispatch = useDispatch();

  // const reduxState = useSelector(
  //   (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  // );

  // useEffect(() => {
  //   if (reduxState) {
  //     dispatch(getImage(reduxState?.photos)).then((data) => {
  //       const images = [];
  //       data.payload.images.map(({ location }) => images.push(location));
  //       setPhotos(images);
  //     });
  //   }
  // }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
};
export default Photos;
