import React from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-orange-200 to-white mt-10">
      <div className="flex pt-10 justify-center">
        <h2 className="uppercase text-5xl font-bold text-black">Toingg</h2>
      </div>
      <div className="flex pt-4 justify-center">
        <p className="text-lg text-center text-white font-medium">
          We are here to grow your <br /> business 💖
        </p>
      </div>
      <div className="pt-10 space-y-2">
        <p className="w-full text-center">Terms and conditions</p>
        <p className="w-full text-center">Privacy Policy</p>
        <p className="w-full text-center">Help Center</p>
        <p className="w-full text-center">API Docs</p>
        <p className="w-full text-center">Careers</p>
      </div>
      <div className="flex pt-6 justify-center my-10 items-baseline space-x-4">
        <Image
          src="linkedin-color-svgrepo-com.svg"
          alt="linkedin"
          width={22}
          height={20}
        />
        <Image
          src="instagram-2-1-logo-svgrepo-com.svg"
          width={20}
          height={20}
          alt="instagram"
        />
        <Image src="/red-cross.png" width={20} height={20} alt="twitter" />
        <Image
          className=""
          src="discord-icon-svgrepo-com.svg"
          width={22}
          height={20}
          alt="discord"
        />
      </div>
      <div className="px-14 py-10 space-y-4">
        <p className="text-sm font-semibold">
          Copyright © 2024 Toingg <br />
          Inc. All rights reserved.
        </p>
        <div className="text-sm flex items-center space-x-2">
          <p>Join Our Community </p>
          <FaDiscord className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
