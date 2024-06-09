"use client";

import Image from "next/image";
import React from "react";
import { FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";
import { SiPhp } from "react-icons/si";
import { GrSwift } from "react-icons/gr";
import { DiDart } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";

const ExploreToingg = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={200}
      totalSlides={2}>
      <Slider>
        <Slide index={0}>
          <ExploreToinggSlide1 />
        </Slide>
        <Slide index={1}>
          <ExploreToinggSlide2 />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export const ExploreToinggSlide1 = () => {
  return (
    <div className="my-20 h-[45rem] pb-4 mx-10 px-6  bg-orange-100 rounded-xl">
      <div className="py-4">
        <Image
          className="rounded-lg w-auto h-64 object-cover"
          src={"/7e3dca02f22c5b16978ae9ee8425ea12.png"}
          width={300}
          height={20}
          alt="picture"
        />
      </div>
      <div>
        <p className="text-center font-medium text-xl">
          Explore TOINGG <br /> in{" "}
          <span className=" text-orange-500">GPT </span>Store
        </p>
      </div>
      <div className="py-4 px-1">
        <ul className="list-disc text-[1rem]  font-normal">
          <li className="mt-2">
            Interactive Communication: Engage in single or batch calls using
            TOINGG GPT.
          </li>
          <li className="mt-2">
            Advanced Features: Leverage GPT for real-time sentiment analysis
            during calls.
          </li>
          <li className="mt-2">
            Data Export: Conveniently export call logs to CSV.
          </li>
          <li className="mt-2">
            Enhanced Usability: Tailored for users familiar with CSV
            functionalities.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <button className=" bg-gradient-to-br from-orange-300 to-orange-700 px-10 py-1 text-[1rem] rounded-md font-medium text-white">
          Explore <br />
          more
        </button>
      </div>
    </div>
  );
};

export const ExploreToinggSlide2 = () => {
  return (
    <div className="my-20 h-[45rem] py-4 mx-10 px-4  bg-orange-100 rounded-xl">
      <div className="bg-black w-full h-96 rounded-t-lg">
        <div className="px-2 text-white py-1 object-cover rounded-t-lg bg-stone-600 flex text-sm justify-between">
          <p>Python</p>
          <button className="flex items-center gap-1">
            <MdContentCopy />
            Copy Code
          </button>
        </div>
      </div>
      <div className=" items-center flex justify-center px-4 bg-stone-400 text-center rounded-b-xl py-4 flex-wrap">
        <p className=" font-sans font-bold">Curl://</p>
        <div className=" h-16 w-16 items-center justify-center flex rounded-md hover:shadow-md hover:bg-orange-500 px-4 py-4 text-4xl">
          <FaPython />
        </div>
        <div className="rounded-md h-16 w-16 items-center justify-center flex hover:shadow-md hover:bg-orange-500 px-2 py-2 text-3xl">
          <SiJavascript />
        </div>
        <div className="rounded-md h-16 w-16 items-center justify-center flex hover:shadow-md hover:bg-orange-500 px-1 py-1 text-4xl">
          <SiPhp />
        </div>
        <div className="rounded-md h-16 w-16 items-center justify-center flex hover:shadow-md hover:bg-orange-500 px-1 py-1 text-4xl">
          <DiDart />
        </div>
        <div className="rounded-md h-16 w-16 items-center justify-center flex hover:shadow-md hover:bg-orange-500 px-2 py-2 text-4xl">
          <GrSwift />
        </div>
        <div className="rounded-md h-16 w-16 items-center justify-center flex hover:shadow-md hover:bg-orange-500 px-2 py-2 text-4xl">
          <DiRuby />
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-xl text-black font-bold">
          Build your own voice agent
        </p>
        <p className="text-lg text-stone-500 font-bold">
          in just few lines of code
        </p>
      </div>
    </div>
  );
};

export default ExploreToingg;
