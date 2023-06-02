import React, { useEffect } from "react";
import ApiData from "./ApiData";
import { useNavigate, useParams } from "react-router-dom";
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
import GIF from "./1495.gif"
import axios from "axios";
const Detail = () => {
  const param = useParams().id;
  const [isColor, setIsColor] = useState(true);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const URL = "https://dummyjson.com/products/";
  useEffect(() => {
    setLoading(true);
    axios.get(`${URL}${param}`).then(({ data }) => {
      setdata(data);
      if (data) {
        setLoading(false);
        console.log(data)
      }
    });
  }, []);
  
  const noOfItemCarts = useSelector(getALLCart);
    const dispatch = useDispatch();
    const handleCart = () => {
      dispatch(addCart({ ...data, quantity: quantity }));
      navigate("/cart")
    };
  useEffect(() => {
    noOfItemCarts.map((item) => {
      if (item.id === data.id) {
        setQuantity(item.quantity);
      }
    });
  }, [data]);

  const isItemWishlist = useSelector(getALLWishlist);
  useEffect(() => {
    isItemWishlist.map((item) => {
      console.log(item.id, data.id);
      if (item?.id === data.id) {
        setIsColor(false);
      }

    })
   });
  const handleWishlist = () => {
    dispatch(addWishlist(data));
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center relative pt-[300px] ">
          <img src={GIF} />
        </div>
      ) : (
        <div className="sm:flex-row flex flex-col sm:pt-[90px] pt-[120px] justify-center mx-2">
          <div className="md:ml-[50px]">
            <div className="p-1  border grid grid-cols-[1fr_5fr] sm:max-w-[650px] w-auto max-w-[380px] min-w-[300px]  gap-1  mx-auto">
              <div className="flex flex-col gap-1 border-r object-cover  items-center ">
                {data?.images?.map((image) => {
                  return (
                    <div className="mx-1 border w-full flex justify-center items-center aspect-[16/20]">
                      <img
                        src={image}
                        className=" w-full object-cover aspect-[16/20]"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="object-cover flex justify-center aspect-[18/23]">
                <img src={data?.images?.[0]} className="" />
              </div>
            </div>
            <div className="flex mt-[30px] items-center justify-center gap-5 ">
                <button
                  onClick={handleCart}
                  className="p-2 bg-[#ff1313] w-[100px]  text-white  rounded-md">
                Add&nbsp;to&nbsp;cart
              </button>
              <button className="p-2 bg-[#ff1313] w-[100px]  text-white  rounded-md">
                Buy&nbsp;now
              </button>
            </div>
          </div>

          <div className="w-full sm:px-[10px] lg:px-[30px] md:px-[20px] px-[20px] mt-[30px]">
            <div className="text-[25px]">{data?.title}</div>
            <hr className="my-2" />
            <div className="flex items-end">
              <div className="text-[20px] ">{`₹ ${data?.price * 80}`}</div>
              <span className="line-through mx-2 text-[#808080] text-[15px]">
                ₹
                {Math.floor(
                  (data?.price * 80 * (100 + data?.discountPercentage)) / 100
                )}
              </span>
              <span className="text-[15px] font-medium">{`${Math.floor(
                data?.discountPercentage
              )}% off`}</span>
            </div>
            <div className="mt-2">
              <Rating rate={data?.rating} count={data?.stock} />
            </div>
            <div
              className="sm:hidden flex h-[50px] w-[180px] mt-[10px] ml-[10px]  justify-between float-right mr-[50px]
                     items-center "
            >
              <div className="text-[15px]">Quantity</div>
              <div
                className="flex h-[50px] w-[110px] text-[]  justify-center 
                     items-center "
              >
                <button
                  className="h-[17px]  w-[17px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <div className="text-[14px]  mx-3  ">{quantity}</div>
                <button
                  className="h-[17px]  w-[17px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                  onClick={() => {
                    setQuantity(quantity+1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="text-[20px]">Description</div>
              <div className="my-2">{data?.description}</div>
            </div>
            <div className="capitalize sm:mb-0 mb-[200px]">
              <div className="text-[18px]">Category:</div>
              {data?.category}
            </div>
            <div
              className="sm:flex hidden h-[50px] w-[180px]   justify-between
                     items-center "
            >
              <div>Quantity</div>
              <div
                className="flex h-[50px] w-[110px]  justify-center 
                     items-center "
              >
                <button
                  className="h-[20px]  w-[20px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <div className="text-[14px]  mx-3  ">{quantity}</div>
                <button
                  className="h-[20px]  w-[20px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                  onClick={() => {
                      setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;



          // <div className="h-auto ">
          //   <div className="flex pt-[100px] h-auto  flex-col lg:flex-row sm:flex-row md:flex-row    lg:w-[calc(100vw-10%)] md:w-[calc(100vw-5%)] sm:w-[calc(100vw-2%)]   ">
          //     <div className=" lg:h-[600px] lg:w-[500px] md:h-[500px] md:w-[500px] sm:h-[600px] sm:w-[300px] h-[500px] w-[400px]   mx-auto  mb-[40px]  justify-start items-center  border-[1px]   ">
          //       <div className="flex  my-[20px] relative flex-col w-[100%] items-end">
          //         <FavoriteIcon
          //           style={{
          //             fontSize: "30px",
          //             color: isColor === true ? "#bfbfbf" : "red",
          //           }}
          //           onClick={handleWishlist}
          //           className="mr-[20px]   cursor-pointer"
          //           // style={{color:"red"}}
          //         />
          //       </div>
          //       <img
          //         src={data?.thumbnail}
          //         className="lg:h-[400px] mx-[auto] lg:w-[350px] relative bg-[red] mb-[20px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px] h-[350px] w-[350px] "
          //       />
          //     </div>
          //     <div className="h-auto lg:w-[900px]  md:w-[600px] sm:w-[380px] w-[500px] mx-auto  border-[1px]  relative">
          //       <div className="lg:mx-[50px]  mt-[20px]  md:mx-[20px] sm:mx-[15px] mx-[25px] relative">
          //         <p className="TITLE flex flex-row flex-wrap text-[30px] text-[#595757] font-light mt-[40px] relative">
          //           {data?.title}
          //         </p>
          //         <hr className="my-[30px] w-auto relative " />
          //         <div className="flex flex-col  my-[20px] relative">
          //           <Rating
          //             rate={data?.rating?.rate}
          //             count={data?.rating?.rate}
          //             size={25}
          //           />
          //         </div>
          //         <p className="PRICE flex flex-row flex-wrap text-[30px] text-[#eb3f3f] relative ">
          //           Rs. {data?.price}
          //         </p>
          //         <div className="flex flex-col my-[20px] relative h-auto">
          //           <p className="flex flex-row text-[20px] text-[#4e4e4e] relative">
          //             Product Description
          //           </p>
          //           <hr className="my-[10px]   relative" />
          //           <p className="flex flex-row flex-wrap font-light relative w-auto  leading-7 text-[#4e4e4e] pr-[10px]">
          //             {data?.description}
          //           </p>
          //         </div>
          //         <div className="STYLE flex flex-row mx-auto relative mb-[50px]">
                    // <div
                    //   className="flex h-[50px] w-[110px] mr-[20px]  mt-[15px] justify-center 
                    //  items-center "
                    // >
                    //   <button
                    //     className="h-[30px] text-[20px] w-[30px] rounded-[3px] hover:bg-[#f1f1f1b0] font-bold bg-[white] border-[black] border-[1px] flex justify-center items-center"
                    //     onClick={() => {
                    //       noOfItemCart > 0 && dispatch(delCart(data));
                    //     }}
                    //   >
                    //     -
                    //   </button>
                    //   <div className=" text-[20px] mx-[15px]  ">
                    //     {noOfItemCart}
                    //   </div>
                    //   <button
                    //     className="h-[30px] text-[20px] border-[black] rounded-[3px]  hover:bg-[#f1f1f1b0] font-bold w-[30px] bg-[white] border-[1px] flex justify-center items-center"
                    //     onClick={() => {
                    //       dispatch(addCart(data));
                    //     }}
                    //   >
                    //     +
                    //   </button>
                    // </div>

          //           <button className="bg-[red] hover:bg-[#d01313] text-[white] rounded-[5px] text-[20px] mt-[20px] mx-[15px] h-[50px] w-[150px] relative">
          //             Buy now
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>;
