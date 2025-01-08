"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Home Page Component
 * This component represents the homepage for the website.
 */
export default function Home() {
  const [isLightOn, setIsLightOn] = useState(true);

  // Randomize the bulb light toggle with specific intervals
  useEffect(() => {
    const intervals = [3000, 5000];
    const getRandomInterval = () =>
      intervals[Math.floor(Math.random() * intervals.length)];

    const interval = setInterval(() => {
      setIsLightOn((prev) => !prev); // Toggle the light on/off
    }, getRandomInterval());

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-darkgray-800 text-white h-auto flex flex-col items-center justify-center">
        {/* Flex Container for Bulb and Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-8 md:mb-[-33]">
          {/* Bulb (hidden on smaller screens) */}
          <div
            className={`relative top-[-200px] md:top-[-150px] left-0 md:left-[-100px] hidden md:block fade-in`}
          >
            <Image
              src="/images/lightOn2.png"
              alt="Light Bulb"
              width={300}
              height={300}
              priority
              className={`object-contain w-[200px] md:w-[300px] lg:w-[400px] h-auto transition-all duration-500 ${
                isLightOn
                  ? "brightness-100"
                  : "brightness-50 sepia-1 hue-rotate-0 saturate-[200%]"
              }`}
            />
          </div>

          {/* Main Content (Logos and Text) */}
          <div className="relative flex flex-col justify-center items-center md:items-start w-full md:mt-[120px]">
            {/* Div for SENECA */}
            <div className="flex items-center w-full sm:px-2 md:px-4">
              {/* Left Logo */}
              <div className="relative w-10 md:w-12 lg:w-16 h-[80px] md:h-[90px] lg:h-[100px]">
                <Image
                  src="/images/logoLeft.png"
                  alt="Left Logo"
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <div className="text-left pl-2 md:pl-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-none">
                  <span className="text-red-500">S</span>ENECA
                </h1>
              </div>
            </div>

            {/* Div for SOFTWARE */}
            <div className="flex items-center w-full sm:px-2 md:px-4">
              <div className="w-10 md:w-12 lg:w-16 h-[80px]"></div>{" "}
              {/* Empty space for alignment */}
              <div className="text-left pl-2 md:pl-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-none">
                  <span className="text-red-500">S</span>OFTWARE
                </h1>
              </div>
            </div>

            {/* Div for DEVELOPERS */}
            <div className="flex items-center w-full sm:px-2 md:px-4">
              <div className="w-10 md:w-12 lg:w-16 h-[80px]"></div>{" "}
              {/* Empty space for alignment */}
              <div className="text-left pl-2 md:pl-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-none">
                  <span className="text-red-500">D</span>EVELOPERS
                </h1>
              </div>
            </div>

            {/* Div for CLUB */}
            <div className="flex items-center w-full sm:px-2 md:px-4">
              <div className="w-10 md:w-12 lg:w-16 h-[80px]"></div>{" "}
              {/* Empty space for alignment */}
              <div className="text-left pl-2 md:pl-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-none">
                  <span className="text-red-500">C</span>LUB
                </h1>
              </div>
              {/* Right Logo */}
              <div className="relative w-10 md:w-12 lg:w-16 h-[80px] md:h-[90px] lg:h-[100px] ml-4">
                <Image
                  src="/images/logoRight.png"
                  alt="Right Logo"
                  layout="fill"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gears Section */}
        <div className="relative w-full flex flex-col">
          <div className="w-full flex justify-end pr-4 md:pr-8 mb-12 roll-in">
            <div className="flex gap-3 md:gap-5 roll-in gearSpin">
              <Image
                src="/images/lp-gear-2.png"
                alt="Small Gear"
                width={80}
                height={80}
                priority
                className="object-contain w-[60px] sm:w-[70px] md:w-[80px] lg:w-[100px] h-auto"
              />
              <Image
                src="/images/lp-gear-1.png"
                alt="Large Gear"
                width={150}
                height={150}
                priority
                className="object-contain w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gearSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes roll {
          0% {
            opacity: 0;
            transform: translateX(-1000px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .roll-in {
          animation: roll 3s ease-in-out forwards;
        }
        .gearSpin img {
          animation: gearSpin 3s linear infinite;
        }
      `}</style>
    </>
  );
}
