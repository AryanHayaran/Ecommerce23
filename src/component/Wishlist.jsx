import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getALLWishlist, delWishlist } from "../redux/ActionReducer";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";
const Wishlist = () => {
  const itemCart = useSelector(getALLWishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCart = (data) => {
    dispatch(addCart(data));
  };

  const handleWishlistDel = (id) => {
    dispatch(delWishlist(id));
    console.log(id);
  };
  console.log("Add", itemCart);
  return (
    <div>
      <div className="fixed z-[100] ">
        <Header />
      </div>
      {/* <Header /> */}
      {
        <div className="pt-[100px]">
          <div className="w-[80%] mx-auto h-auto relative flex flex-col">
            {itemCart.length === 0 ? (
              <div className="flex  relative flex-col mt-[120px] ml-[15%] text-[20px] text-[#9e9e9e]">
                <div className="text-[25px] relative">Your wishlist is currently empty!</div>
                <button onClick={()=>{navigate("/")}} className="h-[40px] hover:border-[#4040fb] border-[#0000ff30] relative px-auto mt-[30px] w-[150px] border-[1px] flex justify-center items-center text-[#6a6af5] hover:text-[#2b2bff] border-[blue rounded-[5px]">Return to shop</button>
              </div>
            ) : (
              itemCart.map((item) => {
                return (
                  <div className="h-auto shadow border-[2px] border-[#dedede] mb-[15px]">
                    <div className="h-auto    mt-[20px] flex flex-col sm:flex-row mx-auto">
                      <div className="absolute cursor-pointer lg:left-[calc(100vw-35%)] md:left-[calc(100vw-33%)] sm:left-[calc(100vw-35%)] left-[calc(100vw-38%)] mt-[0px] text-[#a4a4a4] hover:text-[#515050]">
                        <DeleteIcon
                          onClick={() => {
                            handleWishlistDel(item.id);
                          }}
                        />
                      </div>
                      <div
                        onClick={() => {
                          navigate(`/detail/${item.id}`);
                        }}
                        className="cursor-pointer ml-[30px]   my-auto mt-[30px]  relative"
                      >
                        <img
                          src={item.image}
                          className=" lg:h-[230px] lg:w-[230px]  md:h-[210px] md:w-[210px]  sm:h-[190px] sm:w-[190px]  h-[250px] w-[250px] mx-auto"
                        />
                      </div>
                      <div className="my-[20px] mt-[40px] lg:ml-[50px] md:ml-[50px] sm:ml-[50px] ml-[35px]">
                        <p
                          onClick={() => {
                            navigate(`/detail/${item.id}`);
                          }}
                          className="TITLE cursor-pointer lg:text-[22px] md:text-[20px] sm:text-[20px] text-[18px]  font-[350] mb-[5px] flex-wrap mr-[10px] "
                        >
                          {item.title}
                        </p>
                        <hr />
                        <div className="my-[10px]">
                          <Rating
                            rate={item.rating.rate}
                            count={item.rating.count}
                          />
                        </div>
                        <p className="PRICE text-[25px] text-[red] mt-[20px]">
                          Rs. {item.price}
                        </p>
                        <div className="STYLE flex flex-row mx-auto relative mb-[40px]">
                          <button
                            className="LISTBUTTONS shadow-md bg-[white] hover:bg-[#fc3d3d] hover:border-[white]  hover:text-[white] rounded-[5px] text-[20px] border-[1px] text-[red] border-[red] mt-[20px] mx-[15px] h-[40px] w-[130px] relative"
                            onClick={() => handleCart(item)}
                          >
                            Add to cart
                          </button>
                          <button className=" LISTBUTTONS shadow-md bg-[#ff4d4d] hover:bg-[#f72323] text-[white] rounded-[5px] text-[20px] mt-[20px] mx-[15px] h-[40px] w-[130px] relative">
                            Buy now
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
      }
    </div>
  );
};

export default Wishlist;
