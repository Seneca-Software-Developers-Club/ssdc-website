"use client";

import React from "react";
import Image from "next/image";

/**
 * Home Page Component
 * This component represents the homepage for the website.
 */
export default function Home() {
  return (
    <>
      <div className="bg-darkgray-800 text-white h-auto flex flex-col items-center justify-center">
        {/* Flex Container for Bulb and Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-8 md:mb-[-33]">
          {/* Bulb (hidden on smaller screens) */}
          <div className="relative top-[-200px] md:top-[-150px] left-0 md:left-[-100px] hidden md:block">
            <Image
              src="/images/lightOn2.png"
              alt="Light Bulb"
              width={300}
              height={300}
              priority
              className="object-contain w-[200px] md:w-[300px] lg:w-[400px] h-auto"
            />
          </div>

          {/* Main Content (Logos and Text) */}
          <div className="relative flex flex-col justify-center items-center md:items-start w-full">
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
        <div className="relative w-full flex flex-col items-center">
          {/* Gears Section */}
          <div className="w-full flex justify-end items-center pr-4 md:pr-8 mb-4 md:mb-8">
            <div className="text-bottom flex gap-3 md:gap-5">
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
    </>
  );
}
