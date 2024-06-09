const HeroSection = () => {
  return (
    <>
      <div className="my-20 text-4xl text-center">
        <h2 className=" leading-10 font-medium text-ctm-gray">
          Build AI Calling <br /> Agent that can do
        </h2>
        <h2 className="font-bold mt-4">Sales Call</h2>
      </div>
      <div className="flex justify-center">
        <button className="font-medium bg-gradient-to-r from-orange-300 to-orange-500 text-sm rounded-md px-8 py-2">
          <p className="text-white ">Build your own voice agent</p>
          <p className="">&apos;It&apos;s free!&apos;</p>
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <button className="text-sm font-semibold border rounded-md bg-white px-8 py-2  border-black">
          Hear it in action
        </button>
      </div>
    </>
  );
};

export default HeroSection;
