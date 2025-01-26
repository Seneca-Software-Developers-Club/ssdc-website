'use client';

import React from "react";
import Image from "next/image";
import discordImg from "../../public/img/discord.png";
import instagramImg from "../../public/img/insta-color.png";
import linkedinImg from "../../public/img/linkedin.png";

function Contact() {

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert(`Failed to send email: ${result.message}`);
    }
  };



  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen flex flex-col justify-center items-center pt-[8rem]">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-normal mb-[50px]">
          JOIN SENECA&apos;S COOLEST NERDS
        </h1>
        <p className="text-[#afafaf] text-[1.5rem] mx-auto pb-12 leading-8 text-center max-w-[28rem] md:max-w-[36rem]">
          Click to login into Seneca Student Federation&apos;s Club Hub where
          you can join the club!
        </p>
        <a
          href="https://clubs.ssfinc.ca/feeds?type=club&type_id=35536"
          className="bg-[#b4e07b] text-[#1e1e1e] px-10 py-3 rounded-lg text-[32px] hover:bg-green-600 transition"
        >
          JOIN CLUB
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 max-w-6xl w-full">
        {/* Form Section */}
        <div className="text-[#afafaf] flex flex-col items-start">
          <h2 className="text-xl font-bold mb-4">QUESTIONS?</h2>
          <form onSubmit={handleSubmit} className="w-full">

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-[10px] border-2 border-gray-300 rounded-md bg-transparent text-[16px] focus:border-red-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-[10px] border-2 border-gray-300 rounded-md bg-transparent text-[16px] focus:border-red-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-[10px] border-2 border-gray-300 rounded-md bg-transparent text-[16px] focus:border-red-500 focus:outline-none"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#ec1e27] text-white px-6 py-2 rounded-lg text-lg hover:bg-red-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://discord.gg/aWJH5Cx9y3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src={discordImg}
                alt="Discord"
                className="h-[32px] w-[42px]"
              />
            </a>
            <a
              href="https://www.instagram.com/seneca_sdc/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src={instagramImg}
                alt="Instagram"
                className="h-[32px] w-[32px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/seneca-software-developers-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Image
                src={linkedinImg}
                alt="LinkedIn"
                className="h-[32px] w-[32px]"
              />
            </a>
          </div>
          <a
            href="mailto:info.ssdcseneca@gmail.com"
            className="text-[#afafaf] text-2xl hover:text-gray-300"
          >
            info.ssdcseneca@gmail.com
          </a>
        </div>
      </div>
    </div >
  );
}

export default Contact;
