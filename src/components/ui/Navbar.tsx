"use client";

import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <div className="w-full">
      <div className="flex justify-center bg-gradient-to-t from-orange-200 to-white">
        <p className="mt-4 py-2 ">
          Join our community.<span className="font-bold">Explore</span>
        </p>
      </div>
      <div className="flex py-6 px-4 justify-between w-full ">
        <h1 className=" font-bold">Toingg</h1>
        <button onClick={toggleMenu} className="text-ctm-orange text-xl">
          <TiThMenu />
        </button>
      </div>
      {openMenu && <Menu />}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="bg-gradient-to-t transition-all space-y-8 h-[30rem] rounded-xl px-6 py-14 mx-6 my-2 from-orange-400 to-orange-100">
      <div className="flex hover:cursor-pointer justify-between">
        <p className=" font-medium">Contact</p>
        <button className="text-2xl">
          <HiMiniArrowLongRight />
        </button>
      </div>
      <div className="flex hover:cursor-pointer justify-between">
        <p className=" font-medium">Pricing</p>
        <button className="text-2xl">
          <HiMiniArrowLongRight />
        </button>
      </div>
      <div className="flex hover:cursor-pointer justify-between">
        <p className=" font-medium">Documentation</p>
        <button className="text-2xl">
          <HiMiniArrowLongRight />
        </button>
      </div>
      <div className="flex hover:cursor-pointer justify-between">
        <p className=" font-medium">Join our community</p>
        <button className="text-2xl">
          <HiMiniArrowLongRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
