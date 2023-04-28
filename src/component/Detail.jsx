import React, { useEffect } from "react";
import ApiData from "./ApiData";
import { useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import Header from "./Header";
import Rating from "./Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addWishlist,
  delCart,
  getALLCart,
  getALLWishlist,
} from "../redux/ActionReducer";
import { useState } from "react";
const Detail = () => {
  const param = useParams().id;
  const [isColor, setIsColor] = useState(true);

  const { data, loading, error } = ApiData(param);
  const [noOfItemCart, setnoOfItemCart] = useState(0);

  const noOfItemCarts = useSelector(getALLCart);
  useEffect(() => {
    noOfItemCarts.map((item) => {
      if (item?.id === data.id) {
        setnoOfItemCart(item.quantity);
      } else {
        setnoOfItemCart(0);
      }
    });
  });

  const isItemWishlist = useSelector(getALLWishlist);
  
  useEffect(() => {
    isItemWishlist.map((item) => {
      console.log(item.id, data.id);
      if (item?.id === data.id) {
        setIsColor(false);
      }

    })
   });

  // console.log(noOfItemCart);
  // console.log(noOfItemCarts);

  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addCart(data));
  };
  const handleWishlist = () => {
    dispatch(addWishlist(data));
    
  };
  // console.log(data)
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center my-[250px]">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="lightblue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div>
          <div className="fixed z-[100] ">
            <Header />
          </div>
          <div className="h-auto ">
            <div className="flex pt-[100px] h-auto  flex-col lg:flex-row sm:flex-row md:flex-row    lg:w-[calc(100vw-10%)] md:w-[calc(100vw-5%)] sm:w-[calc(100vw-2%)]   ">
              <div className=" lg:h-[600px] lg:w-[500px] md:h-[500px] md:w-[500px] sm:h-[600px] sm:w-[300px] h-[500px] w-[400px]   mx-auto  mb-[40px]  justify-start items-center  border-[1px]   ">
                <div className="flex  my-[20px] relative flex-col w-[100%] items-end">
                  <FavoriteIcon
                    style={{
                      fontSize: "30px",
                      color: isColor === true ? "#bfbfbf" : "red",
                    }}
                    onClick={handleWishlist}
                    className="mr-[20px]   cursor-pointer"
                    // style={{color:"red"}}
                  />
                </div>
                <img
                  src={data?.image}
                  className="lg:h-[400px] mx-[auto] lg:w-[350px] relative bg-[red] mb-[20px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px] h-[350px] w-[350px] "
                />
              </div>
              <div className="h-auto lg:w-[900px]  md:w-[600px] sm:w-[380px] w-[500px] mx-auto  border-[1px]  relative">
                <div className="lg:mx-[50px]  mt-[20px]  md:mx-[20px] sm:mx-[15px] mx-[25px] relative">
                  <p className="TITLE flex flex-row flex-wrap text-[30px] text-[#595757] font-light mt-[40px] relative">
                    {data?.title}
                  </p>
                  <hr className="my-[30px] w-auto relative " />
                  <div className="flex flex-col  my-[20px] relative">
                    <Rating
                      rate={data?.rating?.rate}
                      count={data?.rating?.rate}
                      size={25}
                    />
                  </div>
                  <p className="PRICE flex flex-row flex-wrap text-[30px] text-[#eb3f3f] relative ">
                    Rs. {data?.price}
                  </p>
                  <div className="flex flex-col my-[20px] relative h-auto">
                    <p className="flex flex-row text-[20px] text-[#4e4e4e] relative">
                      Product Description
                    </p>
                    <hr className="my-[10px]   relative" />
                    <p className="flex flex-row flex-wrap font-light relative w-auto  leading-7 text-[#4e4e4e] pr-[10px]">
                      {data?.description}
                    </p>
                  </div>
                  <div className="STYLE flex flex-row mx-auto relative mb-[50px]">
                    <div
                      className="flex h-[50px] w-[110px] mr-[20px]  mt-[15px] justify-center 
                     items-center "
                    >
                      <button
                        className="h-[30px] text-[20px] w-[30px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                        onClick={() => {
                          noOfItemCart > 0 && dispatch(delCart(data));
                        }}
                      >
                        -
                      </button>
                      <div className=" text-[20px] mx-[15px]  ">
                        {noOfItemCart}
                      </div>
                      <button
                        className="h-[30px] text-[20px] border-[black] rounded-[3px]  hover:bg-[#f1f1f1b0] font-bold w-[30px] bg-[white] border-[1px] flex justify-center items-center"
                        onClick={() => {
                          dispatch(addCart(data));
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button className="bg-[red] hover:bg-[#d01313] text-[white] rounded-[5px] text-[20px] mt-[20px] mx-[15px] h-[50px] w-[150px] relative">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
