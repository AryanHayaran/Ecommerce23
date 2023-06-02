import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import {
  getALLCart,
  getALLWishlist,
  getProductsData,
  getTotalWishlist,
  setLoading,
  setProductsData,
} from "../redux/ActionReducer";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import Navbar from "./Navbar";
import axios from "axios";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const totalCart = useSelector(getALLCart).length;
  const totalItemWishlist = useSelector(getALLWishlist).length;
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const URL = "https://dummyjson.com/products/";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
    setQuery("");
    dispatch(setLoading(true));

    axios.get(`${URL}search?q=${query}`).then(({ data }) => {
      dispatch(setProductsData(data));
      console.log("data",data)
    });
}

  return (
    <div className="bg-[blue] h-auto w-[100vw] py-2 justify-between flex flex-col  pt-2 px-[20px] items-center ">
      <div className=" h-auto w-[100vw]  justify-between flex   px-[20px] items-center">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer sm:text-[20px] text-[16px] mr-5  text-[white]"
        >
          Shopping&nbsp;Cart
        </div>
        {/* <div className="flex h-[35px] relative"> */}
        <form
          className="bg-[white] h-[35px] relative rounded-sm  w-[500px] items-center gap-2  pl-2 pr-4 sm:flex hidden"
          onSubmit={handleSubmit}
        >
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search..."
            className="w-full px-2 h-[30px] outline-none border-none"
          />
          <button>
            <BsSearch />
          </button>
        </form>
        <div
          className="flex  text-[white] md:gap-[30px] gap-[15px] ml-4 lg:mr-[150px] md:mr-[100px] sm:mr-[50px]
        mr-[5px]  justify-between items-center sm:text-[20px] text-[17px]"
        >
          <div
            onClick={() => {
              navigate("/wishlist");
            }}
            className=" sm:text-[23px] text-[17px] cursor-pointer"
          >
            <AiFillHeart />
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className="sm:text-[23px] text-[17px] cursor-pointer"
          >
            <HiShoppingCart />
          </div>
          <div className="flex sm:text-[18px] text-[13px] mr-[20px]">Sign&nbsp;in</div>
          {/* <div className="mx-2 text-[25px] sm:hidden flex">
            <Navbar />
          </div> */}
        </div>
      </div>
      <form
        className="bg-[white] mt-2 h-[35px] relative rounded-sm w-full items-center gap-2  pl-2 pr-4 sm:hidden flex  "
        onSubmit={handleSubmit}
      >
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search..."
          className="w-full px-2 h-[30px] outline-none border-none"
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  ); 
};

export default Header;














// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   getALLCart,
//   getALLWishlist,
//   getTotalWishlist,
// } from "../redux/ActionReducer";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import "./Header.css";
// import { BsSearch } from "react-icons/bs";

// const Header = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const totalCart = useSelector(getALLCart).length;
//   const totalItemWishlist = useSelector(getALLWishlist).length;
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className="HEADER flex flex-row justify-start bg-[#194cf4]   h-[70px] w-[100vw] ">
//       <div className="flex flex-row mt-[15px]   h-[52px] w-[1200px] ">
//         <div
//           onClick={() => {
//             navigate("/");
//           }}
//           className="cursor-pointer  text-white relative   h-[50px] lg:ml-[60px] 
//            w-[110px]  lg:w-[170px] md:w-[170px] sm:w-[170px] text-[20px] lg:text-[25px] md:text-[25px] sm:text-[25px] md:ml-[40px] sm:ml-[20px] ml-[10px]
//            sm:flex md:flex drop-shadow-lg lg:flex hidden mt-[5px]"
//         >
//           {`Shopping Cart`}
//         </div>

//         {/*//////////////// navbar////////////// */}

//         <div
//           className={`flex 
//          lg:w-[670px]  md:w-[500px] sm:w-[430px]  relative lg:ml-[80px]
//          md:ml-[40px] sm:ml-[0px]  w-[100%] lg:flex-row 
//           md:flex-row sm:flex-row flex-col lg:h-auto md:h-auto sm:h-auto 
//           h-[200px] ${toggle && "bg-[#194cf4] "}
//           `}
//         >
//           <div
//             onClick={() => {
//               navigate("/");
//             }}
           
//             className="SHOPPINGCART drop-shadow-lg cursor-pointer ml-[10px] mt-[4px]  absolute   text-[20px] text-[white]"
//           >
//             Shopping Cart
//           </div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               setQuery("");
//             }}
//             className="FORM rounded-[5px] shadow-lg hover:border-[#ff4848] hover:border-[1px] bg-[#e0e4e9] flex flex-row 
//             lg:w-[450px] md:w-[300px] sm:w-[230px]
//              w-[250px] justify-center items-center  lg:my-auto  
//              md:my-auto sm:my-auto h-[40px]  lg:ml-[0px] md:ml-[0px] sm:ml-[0px] ml-[15px]"
//           >
//             <input
//               className=" outline-none  bg-inherit text-[#494949] pl-[10px] h-[38px]  
//               lg:w-[380px] md:w-[230px] sm:w-[160px] w-[170px] "
//               placeholder="Search.."
//               value={query}
//               spellCheck="false"
//               autoCorrect="false"
//               onChange={(e) => {
//                 setQuery(e.target.value);
//               }}
//             />
//             <BsSearch className="cursor-pointer ml-[5px] sm:ml-[5px] text-[#0101fc]" />
//             <div
//               className="DROP   absolute ml-[10px] right-[20px] cursor-pointer 
//              border-[2px] rounded-[4px] border-[#ffffffac]
//               text-[#ffffffb1] lg:hidden md:hidden sm:hidden "
//             >
//               <DehazeIcon
//                 onClick={() => {
//                   setToggle(!toggle);
//                 }}
//               />
//             </div>
//           </form>
//           <div
//             className={`justify-center items-end relative
//            w-[130px] h-[35px] lg:mx-[50px]  md:mx-[35px] sm:mx-[40px]
//            ml-[20px] lg:flex md:flex sm:flex  lg:mt-[0px] 
//            lg:flex-row md:flex-row sm:flex-row   
//            md:mt-[0px] sm:mt-[0px] mt-[50px]
//             ${toggle ? " flex-col" : "hidden"}`}
//           >
//             <div
//               className="NAVBAR cursor-pointer relative flex w-[100px]  lg:mb-[0px]
//                md:mb-[0px] sm:mb-[0px] mb-[20px] lg:mr-[15px] md:mr-[15px] sm:mr-[15px] mr-[0px]"
//               onClick={() => {
//                 navigate("/wishlist");
//               }}
//             >
//               <FavoriteIcon className=" cursor-pointer  hover:text-[white] text-[#fcfcfcd8] mr-[0px]" />
//               <div className="text-[#ffffff] text-[12px] relative bg-[#f93939] w-[15px] justify-center  rounded-[10px] items-center flex h-[18px] bottom-[8px] ">
//                 {totalItemWishlist}
//               </div>
//               <div className="text-[#ffffffdd] hover:text-[white] ml-[3px]">
//                 Wishlist
//               </div>
//             </div>

//             <div
//               onClick={() => {
//                 navigate("/cart");
//               }}
//               className=" NAVBAR flex items-start justify-start cursor-pointer w-[100px]"
//             >
//               <ShoppingCartIcon className="hover:text-[white]  text-[#fcfcfcd9] " />
//               <div className="text-[#ffffff]  text-[12px] relative bg-[#f93939] w-[15px] justify-center  rounded-[10px] items-center flex h-[18px] bottom-[8px]">
//                 {totalCart}
//               </div>
//               <div className="text-[#ffffffdf] hover:text-[white] ml-[3px]">
//                 Cart
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;