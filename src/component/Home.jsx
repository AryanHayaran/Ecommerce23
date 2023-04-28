import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SellIcon from "@mui/icons-material/Sell";
import Carasoul from "./Carasoul"
import ApiData from "./ApiData";
import Rating from "./Rating";
import { Audio } from "react-loader-spinner";
import Header from "./Header";
import { addCart, addWishlist, getALLWishlist } from "../redux/ActionReducer";
import "./Home.css";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = ApiData("");
  const navigate = useNavigate();

  const handleWishlist = (DATA) => {
    dispatch(addWishlist(DATA));
  };
  // const alert = useAlert();

  return (
    <div>
      {loading && (
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
      )}

      {data.length > 0 && (
        <div>
          <div className="fixed z-[100] ">
            <Header />
          </div>
          {/* <div>  carsol  </div> */}
          <div className=" pt-[75px] z-[1000]">
            <Carasoul/>
          </div>
          <div className="h-auto pt-[30px]   flex flex-row flex-wrap justify-center items-center relative ">
            {data.map((DATA) => {
              return (
                <div
                  key={DATA.id}
                  className="ANIMATION  z-1000 bg-[white] BOX_CONTAINER   h-[450px] w-[300px] border-[1px] border-[#e8dcdc] m-[5px] flex flex-row  flex-wrap relative "
                >
                  <div className="h-[400px]  w-[300px] flex flex-row  flex-wrap relative ">
                    <div className="flex text-[#d4d4d4] hover:text-[#b6b6b6]  relative  ml-[260px] items-end">
                      <SellIcon
                        style={{
                          fontSize: "22px",
                        }}
                        onClick={() => {
                          handleWishlist(DATA);
                          alert("Item saved to your cart!")
                          // alert.show("Oh look, an alert!");
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                    <div
                      onClick={() => {
                        navigate(`/detail/${DATA.id}`);
                      }}
                      className="mx-auto cursor-pointer mt-[30px]"
                    >
                      <img
                        src={DATA.image}
                        className="mx-auto h-[200px] w-[200px] relative "
                      />
                    </div>
                    <div
                      onClick={() => {
                        navigate(`/detail/${DATA.id}`);
                      }}
                      className="ml-6 cursor-pointer"
                    >
                      <p className="mb-2 TITLE">{DATA.title}</p>
                      <p className="PRICE font-medium text-[20px]">{`Rs ${DATA.price}`}</p>
                      <Rating
                        rate={DATA.rating.rate}
                        count={DATA.rating.count}
                        className="flex flex-row h-3 w-20 mt-2 items-center"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Home;
