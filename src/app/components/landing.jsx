"use client"

import localFont from "next/font/local";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carattere } from "next/font/google";

/* FONTS */
const carattere = Carattere({
  subsets: ["latin"],
  weight: ["400"],
});

const RLMadena = localFont({
  src: [
    {
      path: "../../../public/fonts/rl-madena-oblique.otf",
    },
  ],
  variable: "--font-madena",
});

const Landing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Chevron = () => (
    <div className="w-2 h-2 border-r-2 border-t-2 border-current transform -rotate-45" />
  );

  const data = [
    {
      question: "What is the purpose of this platform?",
      answer:
        "This platform aims to provide mentorship, career guidance, social and professional networking for students and young professionals of the Ismaili community.",
    },
    {
      question: "Is there any cost involved?",
      answer:
        "Not a dollar! This is a voluntary initiative by professionals to help, guide, and advise young members of the community.",
    },
    {
      question: "What type of registrations can I sign up for?",
      answer:
        "If you're young or a student just starting out and navigating through career paths, please sign up as a Student. However, if you are an individual with substantial experience in your field, we encourage you to register as a Mentor. More details on the Register page!",
    },
    {
      question: "How do I register?",
      answer:
        "You can register by heading over to the <span class='font-semibold text-gray-500 hover:text-black transition duration-300'>REGISTER</span> tab and filling out the registration form.",
    },
    {
      question:
        "My career goals are different than my peers, and I'm not particularly interested in corporate or medicine, how can SPN help me?",
      answer:
        "Regardless of your career goals, we encourage you to apply and take benefit of the connections and resources we have to offer. We have professionals from not only corporate or medicine, but also agriculture, hospitality, tourism, nutrition, architecture, and many other fields!",
    },
    {
      question: "How will I be assigned a mentor?",
      answer:
        "Once we receive and review your application, a mentor will be assigned to you based on your needs and goals. We will be in touch with you through email or phone soon after you apply.",
    },
    {
      question: "Do I need to be a in a certain country to be a part of SPN?",
      answer:
        "Not at all! SPN has networks and connections throughout the globe spanning from the United States, Canada, through India, Pakistan, and other countries around the globe! This is open to all Ismailis around the world.",
    },
    {
      question:
        "I want to get my Resume or Statement of Purpose (SOP) reviewed. Do I need to sign-up as a student for that?",
      answer:
        "Typically, we require you to sign-up as a student if you want more of a long-term mentorship and help throughout, however, if you just want your Resume or Statement of Purpose (SOP) reviewed, then send us an email at <a href='mailto:askspnhelp@gmail.com' class='text-blue-700 underline'>askspnhelp@gmail.com</a>.",
    },
    {
      question: "I'm still confused, what should I do?",
      answer:
        "It's okay to be confused! We're always here to help you directly and answer your questions individually. Shoot us an email at <a href='mailto:askspnhelp@gmail.com' class='text-blue-700 underline'>askspnhelp@gmail.com</a>!",
    },
  ];

  return (
    <div className="flex flex-col justify-between relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div className="max-w-6xl flex-grow relative">
          <div className="bg-[#e2e2e2] mt-10 mx-2 md:pb-56 pb-48 sm:pt-4 pt-2 sm:pl-5 pl-3 border-2 border-black relative z-10">
            <h1
              className={`${RLMadena.className} text-left sm:text-6xl text-4xl mb-2 md:font-[700] font-[400] select-none`}
            >
              Student Professional Network
            </h1>
            <div className="select-none absolute bottom-3 left-3 text-gray-800">
              <p className="md:text-3xl text-xl font-thin">
                A platform for students and young professionals of
                <br className="hidden md:block" />
                <span className="md:hidden">&nbsp;</span>
                the <strong className="font-semibold">Ismaili</strong>{" "}
                Community.
              </p>
              <p className="md:text-lg text-md font-thin">
                A voluntary hand extended by a few professionals to help, guide,
                and advise
                <br className="hidden md:block" />
                <span className="md:hidden">&nbsp;</span>
                young members of the community at any stage of their career.
              </p>
            </div>

            {/* Image Placement */}
            <div className="hidden lg:block absolute top-0 right-0 h-full w-1/3 pointer-events-none select-none">
              <Image
                src="/images/Silhouette.png"
                layout="fill"
                draggable={false}
                objectFit="cover"
                alt="Silhouette Image"
              />
            </div>
          </div>

          <div>
            <h1
              className={`${RLMadena.className} ml-2 md:mt-7 mt-3 text-left md:text-4xl text-3xl select-none`}
            >
              We can help, just ask!
            </h1>
            <p className="ml-3 mt-3 font-thin md:text-xl text-lg">
              A wise man once said, &apos;You know what happens if you ask for help?
              ... You get it.&apos; That is exactly what we are here for:{" "}
              <strong>to help you!</strong>
            </p>
          </div>

          <div>
            <h1
              className={`${RLMadena.className} ml-2 md:mt-7 mt-3 text-left md:text-4xl text-3xl select-none`}
            >
              How it works?
            </h1>
            <p className="ml-3 mt-3 font-thin md:text-xl text-lg"></p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-stretch">
              <div className="lg:w-1/3 p-4 flex-grow">
                <div className="border-dashed border border-[#02A1A1] border-[2.5px] p-3 rounded-md h-full">
                  <h2
                    className={`${carattere.className} lg:text-5xl select-none text-4xl text-gray-700 text-center font-bold mb-4`}
                  >
                    Step 1
                  </h2>
                  <p className="text-center text-lg text-gray-700">
                    Head over to the{" "}
                    <Link
                      href="/register"
                      className="font-semibold text-gray-500 hover:text-black transition duration-300"
                    >
                      REGISTER
                    </Link>{" "}
                    tab, and register yourself!
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex items-center px-4">
                <svg
                  className="text-gray-600 h-8 w-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="lg:w-1/3 p-4 flex-grow">
                <div className="border-dashed border border-[#CDB800] border-[2.5px] p-3 rounded-md h-full">
                  <h2
                    className={`${carattere.className} lg:text-5xl select-none text-4xl text-gray-700 text-center font-bold mb-4`}
                  >
                    Step 2
                  </h2>
                  <p className="text-center text-lg text-gray-700">
                    Once we receive & review your application, a{" "}
                    <strong>mentor</strong> will be assigned to you.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex items-center px-4">
                <svg
                  className="text-gray-600 h-8 w-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="lg:w-1/3 p-4 flex-grow">
                <div className="border-dashed border border-[#b43fc8] border-[2.5px] p-3 rounded-md h-full">
                  <h2
                    className={`${carattere.className} lg:text-5xl select-none text-4xl text-gray-700 text-center font-bold mb-4`}
                  >
                    Step 3
                  </h2>
                  <p className="text-center text-lg text-gray-700">
                    Your assigned <strong>mentor</strong> will work with you to
                    advise and help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1
              className={`${RLMadena.className} ml-2 md:mt-7 mt-3 text-left md:text-4xl text-3xl select-none`}
            >
              Frequently Asked Questions
            </h1>
            <div className="mt-5 pb-5">
              {" "}
              {/* Added padding-bottom here */}
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`mx-1 leading-6 hover:bg-[#e2e2e2] flex flex-col border border-gray-400 transition-all duration-300 mb-2 ${
                    expandedIndex === index ? "bg-[#e2e2e2]" : ""
                  }`}
                  onClick={() => handleToggle(index)} // Click event attached to outer div
                >
                  <div className="outer-content flex hover:cursor-pointer justify-between items-center sm:px-5 py-4 px-3">
                    <div>
                      <p className="text-base font-[550]">
                        <span className="mt-1">{item.question}</span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`ml-2 transform transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <Chevron />
                      </div>
                    </div>
                  </div>
                  {/* Inner content */}
                  <div
                    className={`inner-content overflow-hidden transition-max-height duration-300 ease-in-out ${
                      expandedIndex === index ? "max-h-52" : "max-h-0"
                    }`}
                    onClick={(e) => e.stopPropagation()} // Prevent click event propagation from the inner content
                  >
                    <div className="px-5 -mt-1 pb-4">
                      <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
