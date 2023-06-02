import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getProductsData, setLoading, setProductsData } from "../redux/ActionReducer";
import axios from "axios";
export default function Filter() {
  const [state, setState] = React.useState({
    left: false,
  });
    const DATA = useSelector(getProductsData);
    const loading = useSelector(getLoading);

    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
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
    }, [category]);
  const navigate = useNavigate();
  const handleClearAll = () => {
    dispatch(setLoading(true));
    axios.get(URL).then(({ data }) => {
      dispatch(setProductsData(data));

      console.log(data);
    });
  };
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[white] h-[500px]"
    >
      <List>
        <nav className=" ml-3 flex mt-5 flex-col text-[black]">
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
                  category !== Category ? "text-[black]" : "text-[#2e83b7]  "
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
        </nav>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment>
          <div
            onClick={() => {
              setState({ ...state, ["left"]: true });
            }}
            className="bg-inherit cursor-pointer flex justify-center items-center"
          >
            <div>Filter</div>
          </div>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
