"use client";

import Image from "next/image";
import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Capabilities = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={3}>
      <Slider>
        <Slide index={0}>
          <div className="mt-20 mx-10 border h-[28rem] shadow-2xl py-10 shadow-orange-300 border-ctm-gray rounded-xl">
            <Slide1 />
          </div>
        </Slide>
        <Slide index={1}>
          <div className="mt-20 mx-10 border h-[28rem] shadow-2xl py-10 shadow-orange-300 border-ctm-gray rounded-xl">
            <Slide2 />
          </div>
        </Slide>
        <Slide index={2}>
          <div className="mt-20 mx-10 border h-[28rem] shadow-2xl py-10 shadow-orange-300 border-ctm-gray rounded-xl">
            <Slide3 />
          </div>
        </Slide>
      </Slider>
      <div className="flex justify-center">
        <DotGroup className="flex justify-center">
          <Dot slide={0} className="w-2  h-2 bg-black rounded-full" />
          <Dot slide={1} className="w-2 mx-2 h-2 bg-black rounded-full" />
          <Dot slide={2} className="w-2 h-2 bg-black rounded-full" />
        </DotGroup>
      </div>
    </CarouselProvider>
  );
};

const Slide1 = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Image
          className=" h-auto w-14"
          src={"/068f32cf41e572a8c8d0f9b76f4b4010.png"}
          width={100}
          height={20}
          alt="fine tuning"
        />
      </div>
      <div className="my-10">
        <h2 className="text-2xl mt-4 font-semibold text-center">Fine Tuning</h2>
        <p className="text-center mt-14 text-lg font-normal px-6 leading-6">
          Train an AI phone agent on existing phone calls to improve call
          performance, and build guardrails against hallucination.
        </p>
      </div>
    </>
  );
};

const Slide2 = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Image
          className=" h-auto w-14"
          src={"/19a978f101b0d5254fd48f3f133c31dd.png"}
          width={100}
          height={20}
          alt="fine tuning"
        />
      </div>
      <div className="my-10">
        <h2 className="text-2xl mt-4 font-semibold text-center">
          Custom Tools
        </h2>
        <p className="text-center mt-14 text-lg font-normal px-6 leading-6">
          Enable your phone agent to access external APIs, live during the call,
          to access customer records and knowledgebases, and perform actions
          like scheduling appointments.
        </p>
      </div>
    </>
  );
};

const Slide3 = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Image
          className=" h-auto w-14"
          src={"/e3e79d4fa1ea6c956d4d989ce3874756.png"}
          width={100}
          height={20}
          alt="fine tuning"
        />
      </div>
      <div className="my-10">
        <h2 className="text-2xl mt-4 font-semibold text-center">
          Dedicated infrastructure
        </h2>
        <p className="text-center mt-14 text-lg font-normal px-6 leading-6">
          Even during moments of high volume, your enterprise’ infrastructure is
          partitioned from our general API, increasing the reliability of your
          phone agents.
        </p>
      </div>
    </>
  );
};

export default Capabilities;
