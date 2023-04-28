import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  getALLCart,
  getPriceCart,
  addWishlist,
  delCart,
  deleteCart,
  addCart,
} from "../redux/ActionReducer";
import "./Cart.css";
import Rating from "./Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const [itemCart, setItemCart] = useState([]);
  const itemCart = useSelector(getALLCart);
  // if (!itemCart) {
  //   itemCart=[]
  // }
  const [isColor, setIsColor] = useState(false);

  const dispatch = useDispatch();
  const PriceALLCart = useSelector(getPriceCart);

  const handleCartDel = (DATA) => {
    dispatch(deleteCart(DATA));
  };
  const navigate = useNavigate();
  const handleWishlist = (DATA) => {
    setIsColor(true);
    dispatch(addWishlist(DATA));
  };

  return (
    <div>
      <div className="fixed z-[100] ">
        <Header />
      </div>
      {itemCart !== null && (
        <>
          <div className="pt-[100px] h-[685px]   element">
            <div className="w-[80%] mx-auto  flex flex-col">
              {itemCart.length === 0 ? (
                <div className="flex  relative flex-col mt-[120px] ml-[15%] text-[20px] text-[#9e9e9e]">
                  <div className="text-[25px] relative">
                    Your cart is currently empty!
                  </div>
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    className="h-[40px] hover:border-[#4040fb] border-[#0000ff30] relative px-auto mt-[30px] w-[150px] border-[1px] flex justify-center items-center text-[#6a6af5] hover:text-[#2b2bff] border-[blue rounded-[5px]"
                  >
                    Return to shop
                  </button>
                </div>
              ) : (
                itemCart.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="h-auto shadow-md  border-[2px] border-[#d8d8d8] mb-[15px]"
                    >
                      <div className="relative flex  mt-[20px]  justify-end">
                        <FavoriteIcon
                          style={{
                            fontSize: "23px",
                            color: isColor === false ? "#bfbfbf" : "red",
                          }}
                          className="mr-[30px] cursor-pointer"
                          onClick={() => {
                            handleWishlist(item);
                          }}
                        />
                      </div>
                      <div className="h-auto  flex flex-col sm:flex-row mx-auto">
                        <div
                          onClick={() => {
                            navigate(`/detail/${item?.id}`);
                          }}
                          className="cursor-pointer ml-[30px]   my-auto mt-[10px]  relative"
                        >
                          <img
                            src={item?.image}
                            className=" lg:h-[230px] lg:w-[230px]  md:h-[210px] md:w-[210px]  sm:h-[190px] sm:w-[190px]  h-[250px] w-[250px] mx-auto"
                          />
                        </div>

                        <div className="my-[20px] mt-[10px] lg:ml-[50px] md:ml-[50px] sm:ml-[50px] ml-[35px]">
                          <p
                            onClick={() => {
                              navigate(`/detail/${item?.id}`);
                            }}
                            className="TITLE cursor-pointer lg:text-[22px] md:text-[20px] sm:text-[20px] text-[18px]  font-[350] mb-[5px] flex-wrap mr-[10px] "
                          >
                            {item?.title}
                          </p>

                          <hr />
                          <div className="my-[10px]">
                            <Rating
                              rate={item?.rating.rate}
                              count={item?.rating.count}
                            />
                          </div>
                          <p className="PRICE text-[25px] text-[red] mt-[20px]">
                            Rs. {item?.price}
                          </p>
                          <div className="REMOVE STYLE flex flex-row mx-auto relative mb-[40px]">
                            {/* {item?.quantity > 1 && alert("hello")} */}
                            <div
                              className="flex h-[50px] w-[110px] mr-[20px]  mt-[15px] justify-center 
                            items-center "
                            >
                              <button
                                className="h-[30px] text-[20px] w-[30px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                                onClick={() => {
                                  item?.quantity > 1
                                    ? dispatch(delCart(item))
                                    : alert("Remove it from Cart");
                                }}
                              >
                                -
                              </button>
                              <div className=" text-[20px] mx-[15px]  ">
                                {item?.quantity}
                              </div>
                              <button
                                className="h-[30px] text-[20px] border-[black] rounded-[3px]  hover:bg-[#f1f1f1b0] font-bold w-[30px] bg-[white] border-[1px] flex justify-center items-center"
                                onClick={() => {
                                  dispatch(addCart(item));
                                }}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="bg-[white] shadow-sm  hover:bg-[#fa4242] hover:text-[white] hover:border-[white] rounded-[5px] text-[17px] border-[1px] text-[red] border-[red] mt-[22px] ml-[40px] h-[35px] w-[100px] relative"
                              onClick={() => {
                                handleCartDel(item);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className=" bg-[#5252ff] h-[60px] flex flex-row  items-center justify-around">
            <div className="text-[white] text-[20px]">{`Total Amount. ₹${PriceALLCart}`}</div>
            <button className="border-[1px] text-[17px] rounded-[10px] text-[white] bg-[#f74343] hover:bg-[#d50909] h-[40px] w-[120px] mr-[50px]">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
