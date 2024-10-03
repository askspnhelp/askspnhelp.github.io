import Image from "next/image";
import Header from "../components/header";
import Landing from "../components/landing";
import Footer from "../components/footer";
import { Carattere } from "next/font/google";
import localFont from "next/font/local";
import { SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

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

const RLMadenaNonOblique = localFont({
  src: [
    {
      path: "../../../public/fonts/rl-madena.otf",
    },
  ],
  variable: "--font-madena",
});

const About = () => {
  const team = [
    {
      name: "Nazim Momin",
      description: "Physical Design Engineer at Apple",
      imageUrl: "/images/Nazim.jpg",
      linkedin: "https://www.linkedin.com/in/nazim-momin-0552b433/",
      email: "naz_momin@yahoo.com",
    },
    {
      name: "Saifil Momin",
      description: "Staff Mechanical Design Engineer at Tesla",
      imageUrl: "/images/Saifil.jpg",
      linkedin: "https://www.linkedin.com/in/saifil-saiyadali-momin/",
      email: "mssaifil15@gmail.com",
    },
    {
      name: "Tanveer Sunesara",
      description: "Lead Analyst at Levi Strauss & Co.",
      imageUrl: "/images/Tanveer.jpg",
      linkedin: "https://www.linkedin.com/in/tanveer-sunesara-41a70111/",
      email: "tanveer0406@gmail.com",
    },
    {
      name: "Saizwin Kadiwala",
      description: "Job Captain at Fergus Garber Architects",
      imageUrl: "/images/Saizwin.jpg",
      linkedin: "https://www.linkedin.com/in/saizwin-kadiwala-61ab22132/",
      email: "saizwink@gmail.com",
    },
    {
      name: "Mohsin Karovaliya",
      description: "Software Engineer at Google",
      imageUrl: "/images/Mohsin.jpg",
      linkedin: "https://www.linkedin.com/in/mohsin-karovaliya/",
      email: "karovaliyamohsin@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-black">
        <h1
          className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-left md:text-6xl text-3xl select-none`}
        >
          About Us
        </h1>
        <p className="text-xl select-none mb-6">
          We are a dedicated team of professionals from the Ismaili community,
          united by our shared experiences and a commitment to giving back. Some
          of us have been international students, navigating the complexities of
          studying in new countries, while others have pursued education and
          careers locally. We&apos;ve all faced challenges along the way—whether
          moving to different countries, working hard to secure our dream jobs,
          or figuring out our own paths. Now, our goal is to help young
          individuals of our community by offering guidance and mentorship
          during the critical stages of their lives. We aim to provide clarity
          and direction, empowering them to make informed decisions about their
          education and career journeys.
        </p>
        <h1
          className={`${RLMadena.className} mb-6 ml-2 md:mt-7 mt-3 text-left md:text-6xl text-3xl select-none`}
        >
          Meet Our Team
        </h1>
        <h1
          className={
            "mb-6 ml-2 md:mt-7 mt-3 text-left md:text-4xl text-2xl select-none"
          }
        >
          Leadership Board
        </h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-gray-500">{member.description}</p>

                <div className="mt-4 flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <SiLinkedin size={24} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          className={
            "mb-6 ml-2 md:mt-7 mt-3 text-left md:text-4xl text-2xl select-none"
          }
        >
          Mentors
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-sm border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Field
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Education
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  name: "Afiz Momin",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Afsan Gujarati",
                  field: "Data Science",
                  education: "Masters of Electronic Commerce",
                },
                {
                  name: "Ainee Maknojia",
                  field: "Nursing",
                  education: "Bachelor of Science in Nursing",
                },
                {
                  name: "Akbarali Mahesaniya",
                  field: "Agriculture",
                  education: "Master of Science in Horticulture Science",
                },
                {
                  name: "Alafiz Prasla",
                  field: "Pharmaceuticals",
                  education:
                    "Master of Science in Regulatory Affairs and Quality Assurance",
                },
                {
                  name: "Alizain Charolia",
                  field: "Site Reliability & Software Engineering",
                  education:
                    "Bachelor of Science in Computer Science & Bachelor of Science in Mathematics",
                },
                {
                  name: "Alif Abdul Momin",
                  field: "Product Management",
                  education: "Masters of Electronic Commerce",
                },
                {
                  name: "Aman Karovalia",
                  field: "Hospitality & Tourism",
                  education: "Post Graduate in Hospitality and Tourism",
                },
                {
                  name: "Amrin Karedia",
                  field: "Nursing",
                  education: "Bachelor of Science in Nursing",
                },
                {
                  name: "Anand Hamid",
                  field: "Diagnostics",
                  education: "Master of Science in Laboratory Medicine",
                },
                {
                  name: "Aman Manasiya",
                  field: "Architecture",
                  education: "Masters of Architure (Environmental)",
                },
                {
                  name: "Arif Sunesara",
                  field: "Education & Islamic Studies",
                  education:
                    "Masters in Teaching and Masters in Muslim Societies and Civilizations",
                },
                {
                  name: "Arushana Ali",
                  field: "Healthcare",
                  education: "Bachelor of Science in Biology",
                },
                {
                  name: "Ashfaq Sherwa",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Atif Ali",
                  field: "Mechatronics",
                  education:
                    "Bachelor of Applied Science in Mechanical Engineering (Mechatronics)",
                },
                {
                  name: "Faraaz Dhuka",
                  field: "Risk Management & Business",
                  education: "Masters of Applied Computer Science",
                },
                {
                  name: "Farzine Karedia",
                  field: "Information Sciences",
                  education: "Master of Science in Information Science",
                },
                {
                  name: "Fyaz Manknojiya",
                  field: "Business & Computer Science",
                  education: "Degree in Commerce & Pursuing Computer Science",
                },
                {
                  name: "Irfan Momin",
                  field: "Dentistry",
                  education: "Doctor of Dental Medicine/Surgery",
                },
                {
                  name: "Irshad Badarpura",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Jabeen Momin",
                  field: "Geoscience",
                  education: "Bachelor of Science in Environmental Geoscience",
                },
                {
                  name: "Karim Ali",
                  field: "Hospitality & Tourism",
                  education: "Master of Arts in Hospitality and Tourism",
                },
                {
                  name: "Karimbhai Maredia",
                  field: "Agirculture",
                  education: "Ph.D in Agirculture",
                },
                {
                  name: "Muin Momin",
                  field: "Software Engineering",
                  education: "Bachelor of Science in Computer Science",
                },
                {
                  name: "Munirali Momin",
                  field: "Finance",
                  education: "Bachelor of Commerce in Financial Markets",
                },
                {
                  name: "Mywish Maredia",
                  field: "Agricultural Economics",
                  education: "Ph.D in Agricultural Economics",
                },
                {
                  name: "Nazim Maredia",
                  field: "Accounting",
                  education: "Master of Commerce in Accounting",
                },
                {
                  name: "Neelam Momin",
                  field: "Personal Care",
                  education:
                    "Masters of Business & Science in Personal Care Science and Cosmetic Products",
                },
                {
                  name: "Neheen Momin",
                  field: "Data Analysis (Healthcare)",
                  education: "Post Graduate in Nutrition",
                },
                {
                  name: "Nimroj Maknojiya",
                  field: "Mechanical Engineering",
                  education: "Master of Engineering in Mechanical Engineering",
                },
                {
                  name: "Sahil Momin",
                  field: "Photography",
                  education: "Bachelor of Commerce",
                },
                {
                  name: "Sahil Akbarali",
                  field: "Risk Management & Insurance",
                  education:
                    "Master of Science in Risk Engineering and Systems Analytics",
                },
                {
                  name: "Saif Maknojia",
                  field: "Hospitality & Tourism",
                  education: "Bachelors in Hospitality & Tourism Management",
                },
                {
                  name: "Saif Ali Karedia",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Saifin Shaukat Maknojia",
                  field: "Construction",
                  education: "Master in Constructon Management",
                },
                {
                  name: "Saifina Momin",
                  field: "Physiotherapy",
                  education: "Bachelors in Physiotherapy",
                },
                {
                  name: "Saijad Dhuka",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Sainor Momin",
                  field: "Nutrition",
                  education: "Masters in Nutrition",
                },
                {
                  name: "Sanam Sunesara",
                  field: "Nursing",
                  education: "Diploma in Nursing",
                },
                {
                  name: "Sarah Khwaja",
                  field: "Psychology",
                  education: "Masters in Counseling Psychology",
                },
                {
                  name: "Sheif Momin",
                  field: "Software Engineering",
                  education: "Master of Science in Computer Science",
                },
                {
                  name: "Shermin Kadiwala",
                  field: "Finance",
                  education: "Master of Science in Finance",
                },
                {
                  name: "Snehil Maknojiya",
                  field: "Software Engineering",
                  education: "Diploma in Computer Science",
                },
                {
                  name: "Tanvij Prasla",
                  field: "Data Analysis & Health Informatics",
                  education: "Bachelor in Health Science-Informatics",
                },
                {
                  name: "Zahid Maknojiya",
                  field: "Electronics Engineering",
                  education: "Bachelor of Engineering in Electronics",
                },
                {
                  name: "Zishan Maknojia",
                  field: "Accounting & Finance",
                  education: "Master of Commerce in Accounting and Finance",
                }
              ].map((mentor, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {mentor.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mentor.field}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mentor.education}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
