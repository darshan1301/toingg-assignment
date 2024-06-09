import Image from "next/image";
import React from "react";

const TrustSafety = () => {
  return (
    <div className=" my-20 mx-10 py-4">
      <div className="text-center">
        <div className="flex py-2 justify-center w-full ">
          <Image
            className="text-center h-auto w-32 fill-orange-400"
            src="/e9b27a03d5f8f33915859496787fc0f9.png"
            height={20}
            width={200}
            alt="safety"
          />
        </div>
        <h2 className="text-3xl font-medium">
          The highest standards of trust and safety.
        </h2>
        <p className="text-lg font-normal leading-6 py-8 px-4">
          We continue to actively restrict the calls we support, ensuring that
          our AI phone call technology continues to benefit consumers,
          businesses, and society as a whole.
        </p>
      </div>
      <div className="grid grid-cols-2 my-8 gap-10 leading-6 text-center text-lg font-medium">
        <div className="space-y-2 justify-center grid grid-cols-1">
          <div className="px-2 flex justify-center py-2 mx-auto rounded-full bg-ctm-orange">
            <Image
              className=" -rotate-90 h-auto w-10  px-1 py-1"
              src={"/ee5965f6ff4ba2129efd72e240c68380.png"}
              height={20}
              width={100}
              alt="Call monitoring"
            />
          </div>
          <p>Call Monitoring</p>
        </div>
        <div className="space-y-2 justify-center grid grid-cols-1">
          <div className="px-2 flex justify-center py-2 mx-auto rounded-full bg-ctm-orange">
            <Image
              className=" h-auto w-10 px-2 py-2"
              src={"/9154faa6a75025971c31d481ef3b7adb.png"}
              height={20}
              width={100}
              alt="Call monitoring"
            />
          </div>
          <p>Prompt Injection</p>
        </div>
        <div className="space-y-2 justify-center grid grid-cols-1">
          <div className="px-1 flex justify-center py-1 mx-auto rounded-full bg-ctm-orange">
            <Image
              className="h-auto w-14 px-4 py-2"
              src={"/94b49d6a69cf23e15948e1c5d7a4ed6f.png"}
              height={20}
              width={100}
              alt="Call monitoring"
            />
          </div>
          <p>Rate Limits</p>
        </div>
        <div className="space-y-2 justify-center grid grid-cols-1">
          <div className="px-2 flex justify-center py-2 mx-auto rounded-full bg-ctm-orange">
            <Image
              className="h-auto w-10 px-2 py-2"
              src={"/7f4ee5c9bd52ec50b3d5ec1d3ae7e396.png"}
              height={20}
              width={100}
              alt="Call monitoring"
            />
          </div>
          <p>Internal Hard Audits</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;
