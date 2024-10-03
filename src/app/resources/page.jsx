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

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-black">
        <h1
          className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-left md:text-6xl text-3xl select-none`}
        >
          Resources
        </h1>
        <p className="text-xl select-none mb-6">
          Explore our expanding collection of public resources designed for
          those eager to learn. While we have more resources planned for release
          soon, dive into our SPN Unscripted Podcast Videos. Featuring some of
          the brightest Ismaili minds from around the globe, they share their
          experiences and journeys in their respective fields.
        </p>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/0_Yu2lFZux4?si=sEE1I64m3wafgR9b"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Watch Saifil share his experiences as a Mechanical Engineer!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/jegF_PJdJbI?si=SFfYCjcpAkdOrmNi"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Learn more about Afsan&apos;s Data Science journey!
            </p>
          </div>
        </div>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/i4UC7QMf7Cc?si=F_04RsNqd91GlMDf"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Explore Tanveer&apos;s journey navigating data as a Product Analyst!
            </p>
            {/* <div className="max-w-max mx-auto mt-3">
              <div className="bg-white border border-gray-300 p-2 rounded-lg flex items-center">
                📍 United States
              </div>
            </div> */}
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/EFv6LZ4-TlM?si=28ZG8tJbFDtW2XbV"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Dive into the mission of &quot;Code to Enhance Learning&quot; with its
              founder!
            </p>

            {/* If Location is needed */}
            {/* <div className="max-w-max mx-auto mt-3">
              <div className="bg-white border border-gray-300 p-2 rounded-lg flex items-center">
                📍 India
              </div>
            </div> */}
          </div>
        </div>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/WSOkuR_g_Jo?si=77LulhnDxeqiu5nT"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Discover Aman&quot;s hospitality journey and Hotel Management tips!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/deYXGiCA3tA?si=cUB9m-nONRkXq6aO"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              The Sun&quot;s too hot? Check out Neelam&quot;s innovative sunscreen R&D!
            </p>
          </div>
        </div>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/YoN10OyJIo8?si=cTcThfIpt-fVhEfg"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Gain insights from Munir, a trusted financial advisor!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/-PlAFgnz-_4?si=wqmzRo7M8IrQPJcJ"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Explore Saifali&quot;s journey as a Software Engineer!
            </p>
          </div>
        </div>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/I27X-rDAQoI?si=hfCipYbCLr1XGNLC"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Architect Sahil&quot;s design journey unfolds on SPN Unscripted!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/PGJN54EXnxs?si=75vIGb0xmHprczG7"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Meet Mohsin, a software engineer unraveling tech innovations!
            </p>
          </div>
        </div>
        <div className="grid gap-8 mb-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/eDUD_0qhNnM?si=Bam_RDq6snwv2rwj"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Explore the artistry of photographer Sahil&quot;s lens!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/s6xKZ7OsXH4?si=WgvOdPuBfhhbBumo"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Delve into Dr. Arushana&quot;s insights in Immunology and Microbiology!
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-2 border-black rounded-lg shadow-lg">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/13ExasgOoa0?si=Z4Fw5fwyO_uOHr4D"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-700">
              Learn about Neheen&quot;s coding and healthcare data analysis
              expertise!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
