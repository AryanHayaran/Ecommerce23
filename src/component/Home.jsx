import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SellIcon from "@mui/icons-material/Sell";
import Carasoul from "./Carasoul";
import ApiData from "./ApiData";
import Rating from "./Rating";
import { Audio } from "react-loader-spinner";
import Header from "./Header";
import { addCart, addWishlist, getALLWishlist, getLoading, getProductsData, setLoading, setProductsData } from "../redux/ActionReducer";
import "./Home.css";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import GIF from "./1495.gif";
import Filter from "./Filter";
import axios from "axios";

const Home = () => {
  // const [DATA, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const DATA = useSelector(getProductsData);
  const loading = useSelector(getLoading);

  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const URL = "https://dummyjson.com/products/";
  useEffect(() => {
    dispatch(setLoading(true));
    axios.get(URL).then(({ data }) => {
      dispatch(setProductsData(data))
      // if (DATA) {
      //   dispatch(setLoading(false));
      //   console.log(DATA)
      // }
    });
  }, []);
  // const { data, loading, error } = ApiData("");
  const navigate = useNavigate();
  const handleWishlist = (DATA) => {
    dispatch(addWishlist(DATA));
  };
  const FILTER = [
    "smartphones",
    "laptops",
    "fragrances",
    "groceries",
    "furniture",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
    "womens-jewellery",
  ];
  useEffect(() => {
    dispatch(setLoading(true));

    axios.get(`${URL}/category/${category}`).then(({ data }) => {
      
      dispatch(setProductsData(data));

      console.log(data);

    });
  },[category])
  // const handleFilter = (category) => {
  //   setLoading(true)
  //   axios.get(`${URL}/category/${category}`).then(({ data }) => {
  //     dispatch(setProductsData(data))
      
  //     console.log(data)
  //     if (DATA ) {
  //       setLoading(false)
  //     }
  //   })
  // }
  const handleClearAll = () => {
    dispatch(setLoading(true));
   axios.get(URL).then(({ data }) => {
      dispatch(setProductsData(data))
     
     console.log(data);
   });
}
  return (
    <div>
      <div className=" sm:pt-[55px] pt-[85px] z-[1000]  w-full">
        <Carasoul />
      </div>
      {DATA && (
        <>
          <div className="mb-3 MARGIN sm:ml-[20px] pt-[15px] flex justify-between lg:px-[30px] md:px-[30px] sm:px-[30px] px-[10px] ">
            
            <div className="sm:min-w-[200px] min-w-[180px] lg:mr-[50px] md:mr-[30px] sm:mr-[20px]   h-[430px] p-2  FILTER flex-col     SHADOW ">
              <div className="text-[#2e83b7] text-[20px]">Filter</div>
              <hr />
              <div
                onClick={handleClearAll}
                className="cursor-pointer text-[13px] text-[#7c7c7c] mt-1 hover:text-[#313131] "
              >
                Clear All
              </div>
              {FILTER.map((Category, index) => {
                return (
                  <div
                    className={`cursor-pointer flex mt-[3px] hover:text-[#2e83b7]  items-center gap-2 capitalize ${
                      category !== Category
                        ? "text-[black]"
                        : "text-[#2e83b7]  "
                    }`}
                    key={index}
                    onClick={() => {
                      if (category === Category) {
                        handleClearAll();
                        setCategory("");
                      } else {
                        setCategory(Category);
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={Category === category}
                      className="cursor-pointer"
                    />
                    {Category}
                  </div>
                );
              })}

              {/* <Filter /> */}
            </div>
            {/* <div className="FILTERICON mr-2  border h-[30px] w-[30px] bg-red items-center justify-center rounded-md border-[black] ">
              <Filter />
            </div> */}
            <div className="  h-auto  CONTAINER w-full  ">
              <div className="FILTERICON border-b border-[#a09e9e] ml-[10px] flex items-start text-[16px] text-[#2d719c] hover:text-[#1b414e]">
                <Filter />
              </div>
              {loading ? (
                <div className="mt-[150px] flex justify-center">
                  <img src={GIF} />
                </div>
              ) : (
                <div className="GRID grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]  grid-cols-1   ">
                  {DATA?.products?.map((product) => {
                    return (
                      <div
                        onClick={() => {
                          navigate(`/detail/${product.id}`);
                        }}
                        className="BOX cursor-pointer aspect-[20/17] sm:max-w-[350px] object-cover MARGINAUTO bg-[#fffefe] m-1  max-w-[350px] SHADOW"
                      >
                        <img
                          src={product.thumbnail}
                          className=" h-full w-full px-2 shrink-0  my-2"
                        />
                        <div className="ml-[15px] my-1 w-[200px]">
                          {product.title}
                        </div>
                        <div className="ml-[15px] my-1 w-[200px]">{`Rs. ${
                          product.price * 80
                        }`}</div>
                        <div className="ml-[15px] mt-1 mb-[20px] w-[200px]">
                          <Rating rate={product.rating} count={product.stock} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

// <div className="h-auto pt-[30px]   flex flex-row flex-wrap justify-center items-center relative ">
//   {data?.products?.map((DATA) => {
//     console.log(DATA);
//     return (
//       <div
//         key={DATA.id}
//         className="ANIMATION  z-1000 bg-[white] BOX_CONTAINER   h-[450px] w-[300px] border-[1px] border-[#e8dcdc] m-[5px] flex flex-row  flex-wrap relative "
//       >
//         <div className="h-[400px]  w-[300px] flex flex-row  flex-wrap relative ">
//           <div className="flex text-[#d4d4d4] hover:text-[#b6b6b6]  relative  ml-[260px] items-end">
//             <SellIcon
//               style={{
//                 fontSize: "22px",
//               }}
//               onClick={() => {
//                 handleWishlist(DATA);
//                 alert("Item saved to your cart!");
//                 // alert.show("Oh look, an alert!");
//               }}
//               className="cursor-pointer"
//             />
//           </div>
//           <div
//             onClick={() => {
//               navigate(`/detail/${DATA.id}`);
//             }}
//             className="mx-auto cursor-pointer mt-[30px]"
//           >
//             <img
//               src={DATA.thumbnail}
//               className="mx-auto h-[200px] w-[200px] relative "
//             />
//           </div>
//           <div
//             onClick={() => {
//               navigate(`/detail/${DATA.id}`);
//             }}
//             className="ml-6 cursor-pointer"
//           >
//             <p className="mb-2 TITLE">{DATA.title}</p>
//             <p className="PRICE font-medium text-[20px]">{`Rs ${DATA.price}`}</p>
//             <Rating
//               rate={DATA.rating}
//               count={DATA.stock}
//               className="flex flex-row h-3 w-20 mt-2 items-center"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>;
