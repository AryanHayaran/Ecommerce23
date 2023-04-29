import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getALLCart,
  getALLWishlist,
  getTotalWishlist,
} from "../redux/ActionReducer";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Header.css";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const totalCart = useSelector(getALLCart).length;
  const totalItemWishlist = useSelector(getALLWishlist).length;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="HEADER flex flex-row justify-start bg-[#194cf4]   h-[70px] w-[100vw] ">
      <div className="flex flex-row mt-[15px]   h-[52px] w-[1200px] ">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer  text-white relative   h-[50px] lg:ml-[60px] 
           w-[110px]  lg:w-[170px] md:w-[170px] sm:w-[170px] text-[20px] lg:text-[25px] md:text-[25px] sm:text-[25px] md:ml-[40px] sm:ml-[20px] ml-[10px]
           sm:flex md:flex drop-shadow-lg lg:flex hidden mt-[5px]"
        >
          {`Shopping Cart`}
        </div>

        {/*//////////////// navbar////////////// */}

        <div
          className={`flex 
         lg:w-[670px]  md:w-[500px] sm:w-[430px]  relative lg:ml-[80px]
         md:ml-[40px] sm:ml-[0px]  w-[100%] lg:flex-row 
          md:flex-row sm:flex-row flex-col lg:h-auto md:h-auto sm:h-auto 
          h-[200px] ${toggle && "bg-[#194cf4] "}
          `}
        >
          <div
            onClick={() => {
              navigate("/");
            }}
           
            className="SHOPPINGCART drop-shadow-lg cursor-pointer ml-[10px] mt-[4px]  absolute   text-[20px] text-[white]"
          >
            Shopping Cart
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery("");
            }}
            className="FORM rounded-[5px] shadow-lg hover:border-[#ff4848] hover:border-[1px] bg-[#e0e4e9] flex flex-row 
            lg:w-[450px] md:w-[300px] sm:w-[230px]
             w-[250px] justify-center items-center  lg:my-auto  
             md:my-auto sm:my-auto h-[40px]  lg:ml-[0px] md:ml-[0px] sm:ml-[0px] ml-[15px]"
          >
            <input
              className=" outline-none  bg-inherit text-[#494949] pl-[10px] h-[38px]  
              lg:w-[380px] md:w-[230px] sm:w-[160px] w-[170px] "
              placeholder="Search.."
              value={query}
              spellCheck="false"
              autoCorrect="false"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <BsSearch className="cursor-pointer ml-[5px] sm:ml-[5px] text-[#0101fc]" />
            <div
              className="DROP   absolute ml-[10px] right-[20px] cursor-pointer 
             border-[2px] rounded-[4px] border-[#ffffffac]
              text-[#ffffffb1] lg:hidden md:hidden sm:hidden "
            >
              <DehazeIcon
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          </form>
          <div
            className={`justify-center items-end relative
           w-[130px] h-[35px] lg:mx-[50px]  md:mx-[35px] sm:mx-[40px]
           ml-[20px] lg:flex md:flex sm:flex  lg:mt-[0px] 
           lg:flex-row md:flex-row sm:flex-row   
           md:mt-[0px] sm:mt-[0px] mt-[50px]
            ${toggle ? " flex-col" : "hidden"}`}
          >
            <div
              className="NAVBAR cursor-pointer relative flex w-[100px]  lg:mb-[0px]
               md:mb-[0px] sm:mb-[0px] mb-[20px] lg:mr-[15px] md:mr-[15px] sm:mr-[15px] mr-[0px]"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <FavoriteIcon className=" cursor-pointer  hover:text-[white] text-[#fcfcfcd8] mr-[0px]" />
              <div className="text-[#ffffff] text-[12px] relative bg-[#f93939] w-[15px] justify-center  rounded-[10px] items-center flex h-[18px] bottom-[8px] ">
                {totalItemWishlist}
              </div>
              <div className="text-[#ffffffdd] hover:text-[white] ml-[3px]">
                Wishlist
              </div>
            </div>

            <div
              onClick={() => {
                navigate("/cart");
              }}
              className=" NAVBAR flex items-start justify-start cursor-pointer w-[100px]"
            >
              <ShoppingCartIcon className="hover:text-[white]  text-[#fcfcfcd9] " />
              <div className="text-[#ffffff]  text-[12px] relative bg-[#f93939] w-[15px] justify-center  rounded-[10px] items-center flex h-[18px] bottom-[8px]">
                {totalCart}
              </div>
              <div className="text-[#ffffffdf] hover:text-[white] ml-[3px]">
                Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
