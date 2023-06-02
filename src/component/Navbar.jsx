import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[white] h-full"
    >
      <List>
        <div className="py-2 Montserrat flex  pl-[40px] items-center gap-2  bg-[#214def34]">
          <FaUserAlt className="]" />
          Hello, {"Sign in"}
        </div>
        <nav className=" ml-3 flex mt-5 flex-col text-[white]">
          <div className="flex gap-2 mt-5 items-center rounded-sm pl-3 h-[40px] w-[150px] bg-[blue] ml-4">
            <AiFillHeart />
            Wishlist
          </div>

          <div className="flex gap-2 mt-[30px] items-center rounded-sm pl-3 h-[40px] w-[150px] bg-[blue] ml-4">
            <HiShoppingCart />
            Cart
          </div>
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
            <RxHamburgerMenu className="text-[20px] text-[white] hover:bg-inherit" />
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
