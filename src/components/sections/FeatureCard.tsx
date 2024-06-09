"use client";

import Image from "next/image";
import {
  CarouselProvider,
  Dot,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";

const FeatureCard = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={6}>
      <Slider>
        <Slide index={0}>
          <Feature1 />
        </Slide>
        <Slide index={1}>
          <Feature2 />
        </Slide>
        <Slide index={2}>
          <Feature3 />
        </Slide>
        <Slide index={3}>
          <Feature4 />
        </Slide>
        <Slide index={4}>
          <Feature5 />
        </Slide>
        <Slide index={5}>
          <Feature6 />
        </Slide>
      </Slider>
      <div className="flex justify-center">
        <DotGroup className="">
          <Dot slide={0} className="w-2  h-2 bg-black rounded-full" />
          <Dot slide={1} className="w-2 ml-1 h-2 bg-black rounded-full" />
          <Dot slide={2} className="w-2 ml-1 h-2 bg-black rounded-full" />
          <Dot slide={3} className="w-2 ml-1 h-2 bg-black rounded-full" />
          <Dot slide={4} className="w-2 ml-1 h-2 bg-black rounded-full" />
          <Dot slide={5} className="w-2 ml-1 h-2 bg-black rounded-full" />
        </DotGroup>
      </div>
    </CarouselProvider>
  );
};

const Feature1 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200  mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/fdd6d9487038b14f41979b86a8802951.png"}
          width={150}
          height={20}
          alt="thunder bolt"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Ultra-Fast Response
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          Experience lightning-quick interactions with an impressive 500 ms
          response time, ensuring seamless conversations.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

const Feature2 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200 mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/253774e17d7402e1f556d6e4e0e38e1f.png"}
          width={150}
          height={20}
          alt="Smart Interruption Management"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Smart Interruption Management
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          Our system adeptly handles interruptions, ensuring smooth, natural
          dialogues just like human conversations
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

const Feature3 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200 mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/c3ae8d393a8266688310c1dc4186e502.png"}
          width={150}
          height={20}
          alt="Advanced Memory Recall"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Advanced Memory Recall
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          Remembering context and details from earlier in the conversation, our
          AI provides a personalized and coherent interaction.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

const Feature4 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200 mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/53e66b37858179a705087ef6feecbd47.png"}
          width={150}
          height={20}
          alt="Dynamic Conversational Flows"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Dynamic Conversational Flows
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          Navigate through complex conversations with ease, thanks to our
          AI&apos;s ability to understand and adapt to various conversational
          pathways.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

const Feature5 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200 mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/e768dd52b482653b1cb4223dd41e5b86.png"}
          width={150}
          height={20}
          alt="Custom AI Solutions"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Custom AI Solutions
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          Leverage our proprietary AI models tailored to your specific business
          needs for unparalleled efficiency and effectiveness.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

const Feature6 = () => {
  return (
    <div className="mt-20 shadow-lg shadow-orange-200 mx-10 border-2 h-[32rem] rounded-xl">
      <div className="flex justify-center mt-10 ">
        <Image
          className="h-auto w-20"
          src={"/89cc30c4a8ce8e91a444f000a1039bec.png"}
          width={150}
          height={20}
          alt="Scalability at Your Fingertips"
        />
      </div>
      <div className="mt-10">
        <h2 className=" text-center text-2xl font-semibold">
          Scalability at Your Fingertips
        </h2>
        <p className="text-center text-lg mt-10 px-8 font-normal">
          From one-on-one conversations to managing 10,000 concurrent calls, our
          platform scales effortlessly with your business.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="text-lg text-white font-medium bg-orange-400 px-8 py-2 rounded-md">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
