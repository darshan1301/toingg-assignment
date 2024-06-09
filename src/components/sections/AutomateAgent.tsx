import Image from "next/image";

const AutomateAgent = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center text-lg font-medium text-ctm-gray">
        <p className=" text-center">
          Automate your agents with 5000+
          <br /> integrations like
        </p>
      </div>
      <div className="flex items-center mt-8 space-x-4 justify-center">
        <Image src="HubSpot.svg" width={48} height={0} alt="google-sheet" />
        <Image
          className=""
          src="Calendly.svg"
          width={45}
          height={0}
          alt="google-sheet"
        />
        <Image
          className="ml-2"
          src="google-sheets-icon.svg"
          width={38}
          height={40}
          alt="google-sheet"
        />
        <Image src="slack.svg" width={55} height={0} alt="google-sheet" />
        <Image src="salesforce.svg" width={55} height={0} alt="google-sheet" />
      </div>
    </div>
  );
};

export default AutomateAgent;
