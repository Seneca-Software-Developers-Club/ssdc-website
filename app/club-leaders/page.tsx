import React from "react";
import Image from "next/image";
import gearImage from "../../public/images/finalgear.png";
import presImage from "../../public/images/pres.png";
import vpImage from "../../public/images/vp.png";
import trImage from "../../public/images/tr.png";

const ClubLeadersPage = () => {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen flex flex-col justify-center items-center pt-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">CLUB LEADERS</h1>
      <div className="flex flex-col items-start max-w-6xl mx-auto">
        {/* Leader 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-60 h-60 mx-auto md:mx-0">
            <Image
              src={gearImage}
              alt="Gear"
              width={240}
              height={240}
              className="absolute inset-0"
            />
            <div className="absolute inset-[22.5%] w-[132px] h-[132px] flex justify-center items-center">
              <Image
                src={presImage}
                alt="Pratham Garg"
                width={132}
                height={132}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h2 className="text-red-500 text-xl font-bold">Pratham Garg</h2>
            <h3 className="text-lg">President</h3>
            <p className="text-gray-400 max-w-sm leading-6 text-justify">
              This is a placeholder for a description about the leader to
              encourage connection with current and potential members. It can be
              both professional and personal.
            </p>
          </div>
        </div>

        {/* Leader 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 md:ml-32">
          <div className="relative w-60 h-60 mx-auto md:mx-0">
            <Image
              src={gearImage}
              alt="Gear"
              width={240}
              height={240}
              className="absolute inset-0"
            />
            <div className="absolute inset-[22.5%] w-[132px] h-[132px] flex justify-center items-center">
              <Image
                src={vpImage}
                alt="Gurmehak Kaur Uppal"
                width={132}
                height={132}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h2 className="text-red-500 text-xl font-bold">
              Gurmehak Kaur Uppal
            </h2>
            <h3 className="text-lg">Vice President</h3>
            <p className="text-gray-400 max-w-sm leading-6 text-justify">
              This is a placeholder for a description about the leader to
              encourage connection with current and potential members. It can be
              both professional and personal.
            </p>
          </div>
        </div>

        {/* Leader 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-60 h-60 mx-auto md:mx-0">
            <Image
              src={gearImage}
              alt="Gear"
              width={240}
              height={240}
              className="absolute inset-0"
            />
            <div className="absolute inset-[22.5%] w-[132px] h-[132px] flex justify-center items-center">
              <Image
                src={trImage}
                alt="Saeed Bafana"
                width={132}
                height={132}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h2 className="text-red-500 text-xl font-bold">Saeed Bafana</h2>
            <h3 className="text-lg">Treasurer</h3>
            <p className="text-gray-400 max-w-sm leading-6 text-justify">
              This is a placeholder for a description about the leader to
              encourage connection with current and potential members. It can be
              both professional and personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubLeadersPage;
