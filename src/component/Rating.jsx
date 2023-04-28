import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ rate, count }) => {
  const ratings = Array.from({ length: 5 }, (e, index) => {
    let n = index + 1;

    return (
      <span key={index} className="">
        {n <= rate ? (
          <StarIcon
            style={{ fontSize: "20px" }}
            className="text-[#ffb13d] "
          />
        ) : n - 0.5 <= rate ? (
          <StarHalfIcon
            style={{ fontSize: "20px" }}
            className="text-[#ffb13d] "
          />
        ) : (
          <StarBorderIcon
            style={{ fontSize: "20px" }}
            className="text-[#ffb13d] "
          />
        )}
      </span>
    );
  });
  
  return (
    <div className="RATING flex flex-row justify-start items-center relative">
      <p> {ratings}</p>
      <p className="text-[16px] mx-2 py-[0px] mt-[4px] text-[#908f8f] ">({count}) Ratings</p>
    </div>
  );
};

export default Rating;
