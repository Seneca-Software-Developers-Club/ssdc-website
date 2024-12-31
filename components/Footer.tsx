import React from "react";

export default function Footer() {
  return (
    <div className=" bg-[#9E2424] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        <div className="mb-8 lg:mb-0 text-center lg:text-left">
          <a
            href="https://g.co/kgs/opCE5wi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            <p className="font-bold mb-2 text-lg">Address</p>
            <p>Seneca Polytechnic</p>
            <p>1750 Finch Ave East</p>
            <p>Toronto, Ontario, Canada</p>
            <p>M2J 2X5</p>
          </a>
          <p className="mt-6 text-sm">Copyright &copy; {new Date().getFullYear()} SDDC</p>
          <p className="text-sm">All rights reserved</p>
        </div>
        <div className="mb-4 lg:mb-0 text-center">
          <p className="font-bold text-lg mb-2">Contributors</p>
          {[
            { name: "Shrey Bhatt", link: "https://www.linkedin.com/in/shreybhatt13/" },
            { name: "Cris Huynh", link: "https://www.linkedin.com/in/cris-huynh-2a52b5274/" },
            { name: "Harsh Patel", link: "https://www.linkedin.com/in/harshpatel258/" },
            { name: "Aum Soni", link: "https://www.linkedin.com/in/aum-soni/" },
            { name: "Krutin Polra", link: "https://www.linkedin.com/in/krutinpolra1444/" },
            { name: "Raghav Jha", link: "https://www.linkedin.com/in/raghav-jha-b75230256/" },
          ].map((contributor, index) => (
            <a
              key={index}
              href={contributor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-105 block"
            >
              {contributor.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <div className="text-center lg:text-right">
            <p className="font-bold mb-2 text-lg">Email Us:</p>
            <a
              href="mailto:info.senecainnovators@gmail.com"
              className="hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              info.senecasoftwaredevelopersclub@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
