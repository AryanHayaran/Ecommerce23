import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getALLCart,
  getPriceCart,
  addWishlist,
  delCart,
 
  addCart,
} from "../redux/ActionReducer";
import "./Cart.css";
import Rating from "./Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const itemCart = useSelector(getALLCart);
  const dispatch = useDispatch();
  const PriceALLCart = useSelector(getPriceCart);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen  sm:pt-[70px] pt-[100px]  ">
        <div className="mt-[0px]">
          {itemCart.length === 0 ? (
            <div>return to cart</div>
          ) : (
            <div className="w-full grid  pb-[200px] ">
              {itemCart !== null &&
                itemCart?.map((item) => {
                  return (
                    <div
                      className="flex flex-col FLEXBOX  p-[10px] SHADOW my-[10px] 
                lg:mx-[100px] md:mx-[50px] sm:mx-[20px] mx-[10px]  w-auto h-auto"
                    >
                      <div
                        className="sm:max-w-[300px] max-w-[380px] w-auto mx-auto"
                        onClick={() => {
                          navigate(`/detail/${item?.id}`);
                        }}
                      >
                        <img src={item?.thumbnail} className="aspect-square " />
                      </div>
                      <div className="w-full sm:mt-[20px] mt-[10px] sm:ml-[30px] ml-[15px]">
                        <div className="text-[21px]">{item?.title}</div>
                        <hr className="my-2 " />
                        <div className="flex items-end">
                          <div className="text-[17px] ">{`₹ ${
                            item?.price * 80
                          }`}</div>
                          <span className="line-through mx-2 text-[#808080] text-[13px]">
                            ₹
                            {Math.floor(
                              (item?.price *
                                80 *
                                (100 + item?.discountPercentage)) /
                                100
                            )}
                          </span>
                          <span className="text-[13px] font-medium">{`${Math.floor(
                            item?.discountPercentage
                          )}% off`}</span>
                        </div>
                        <div className="mt-2 ">
                          <Rating rate={item?.rating} count={item?.stock} />
                        </div>
                        <div
                          className="flex h-[50px] w-[190px]  
                     items-center mt-[15px] ml-[10px]"
                        >
                          <div className="text-[14px] mr-[20px]">Quantity</div>
                          <div
                            className="flex h-[50px] w-[120px]  
                     items-center "
                          >
                            <button
                              className="h-[17px]  w-[17px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[#818181] border-[1px] flex justify-center items-center"
                              onClick={() => {
                                if (item?.quantity > 1) {
                                  dispatch(
                                    addCart({
                                      ...item,
                                      quantity: item?.quantity - 1,
                                    })
                                  );
                                } else {
                                  dispatch(delCart(item));
                                }
                              }}
                            >
                              -
                            </button>
                            <div className="text-[12px]  mx-2  ">
                              {item?.quantity}
                            </div>
                            <button
                              className="h-[17px]  w-[17px] rounde-1-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[#818181] border-[1px] flex justify-center items-center"
                              onClick={() => {
                                setQuantity(quantity + 1);
                                dispatch(
                                  addCart({
                                    ...item,
                                    quantity: item?.quantity + 1,
                                  })
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="flex bg-[#5d5df7] bottom-0 w-full h-[50px] fixed z-[100]">
          Place order
          <div>{PriceALLCart}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;

