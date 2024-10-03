"use client";

import Image from "next/image";
import Header from "../components/header";
import Landing from "../components/landing";
import Footer from "../components/footer";
import { Carattere } from "next/font/google";
import localFont from "next/font/local";

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

const Register = () => {
  const navigateToStudentRegister = () => {
    window.location.href = "https://forms.gle/3mVnAUQ85aFh1HDF9";
  };

  const navigateToMentorRegister = () => {
    window.location.href = "https://forms.gle/LTpALzRGRUZZvWRG9";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-black">
        <h1
          className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-left md:text-6xl text-3xl select-none`}
        >
          Register
        </h1>
        <p className="text-xl select-none mb-6">
          At SPN, we strive to bridge the gap between students and experienced
          professionals. Our mission is to empower the next generation through
          mentorship, providing students with valuable guidance, support, and
          connections for their academic and professional growth. Whether you&apos;re
          a student seeking advice or a mentor looking to share your knowledge,
          we invite you to be part of this transformative journey. Register
          today and help shape the future!
        </p>

        <div className="flex flex-col items-center gap-4">
          {/* Student Button */}
          <div>
            <h1
              className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-center md:text-3xl text-2xl select-none`}
            >
              Sign-up as a Student
            </h1>
            <button
              className="bg-green-500 text-white mx-2 font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-green-600 focus:outline-none shadow-lg"
              onClick={navigateToStudentRegister}
            >
              Register as a student if you&apos;re eager to learn and grow
            </button>
          </div>

          {/* Mentor Button */}
          <div>
            <h1
              className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-center md:text-3xl text-2xl select-none`}
            >
              Sign-up as a Mentor
            </h1>
            <button
              className="bg-blue-500 text-white mx-2 font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none shadow-lg"
              onClick={navigateToMentorRegister}
            >
              Register as a mentor if you&apos;re passionate about guiding others
            </button>
          </div>
        </div>

        <p className="text-xl select-none mb-6 mt-10 ">
          If you have any questions about signing up, or just want to reach out to us for any sort of communication, feel free to shoot us an email at <a href='mailto:askspnhelp@gmail.com' class='text-slate-500 hover:text-blue-700 underline'>askspnhelp@gmail.com</a>!
        </p>
        <p className="text-xl select-none mb-6 mt-10 ">
          If you already signed up as either a student or a mentor, we want to welcome you with open arms and thank you for being a part of our growing community. 
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
