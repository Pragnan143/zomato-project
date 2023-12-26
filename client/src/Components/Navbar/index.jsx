import { React, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = ({ user, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div className="w-full flex  items-center justify-between lg:hidden  py-2">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {user?.username ? (
          <>
            {/** Already Sign In  */}
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-2 -bottom-14 bg-white -right-0 w-36 z-20 flex flex-col gap-2 border border-gray-200">
                <button>Signout</button>
              </div>
            )}
          </>
        ) : (
          <>
            {/**Sign In && Sign Up */}

            <span
              className="border border-gray-400 p-2 rounded-full"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 bg-white  z-20 flex flex-col gap-2 border border-gray-200">
                <button>Sign Up</button>
                <button>Sign In</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ user, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div className=" w-full items-center justify-between hidden lg:flex px-20 ">
      <div className="flex items-center justify-around gap-4  w-full">
        <div className="w-20">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
          <div className="flex w-1/4 items-center gap-2 border-r-2 border-gray-300 pr-2 ">
            <span className="text-zomato-400">
              <HiLocationMarker />
            </span>
            <input
              type="text"
              placeholder="Delhi NCR"
              className="w-full focus:outline-none"
            />
            <IoMdArrowDropdown />
          </div>
          <div className="flex w-full items-center gap-2">
            <span>
              <RiSearch2Line />
            </span>
            <input
              type="text"
              placeholder=" Search for Restarunts,Cusine ...."
              className="w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        {user?.username ? (
          <>
            {" "}
            {/** Already Sign In  */}
            <div
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                alt="avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-2 -bottom-14  -right-0 bg-white w-36 z-20 flex flex-col gap-2 border border-gray-200">
                <button>Signout</button>
              </div>
            )}
          </>
        ) : (
          <>
            {/**Sign In && Sign Up */}

            <span
              className="border border-gray-400 p-2 rounded-full"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropdownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 bg-white  z-20 flex flex-col gap-2 border border-gray-200">
                <button>Sign Up</button>
                <button>Sign In</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = {
    username: "Bobby",
  };
  return (
    <>
      <nav className="p-4 lg:py-2 flex shadow-md lg:shadow-none w-full items-center">
        <MobileNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <LargeNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />{" "}
      </nav>
    </>
  );
};

export default Navbar;
