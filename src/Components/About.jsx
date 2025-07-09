import { FaChevronRight } from "react-icons/fa";
import profile from "../assets/profile.jpg"

const InfoItem = ({ label, value }) => (
  <p className="flex items-center text-sm text-gray-700">
    <FaChevronRight className="mr-2 text-blue-500" />
    <span className="font-medium w-24">{label}:</span> {value}
  </p>
);

export default function About() {
  return (
    <section id="about" className="px-10 py-10 bg-white">
      <h1 className="text-4xl font-bold border-b-4 border-blue-500 inline-block pb-1 mb-6">
        About
      </h1>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <img
          src={profile}
          alt="Profile"
          className="rounded-md w-72 h-auto object-cover"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            UI/UX Designer & Web Developer.
          </h2>
          <p className="italic text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* <div className="grid grid-cols-2 gap-4 mb-4">
            <InfoItem label="Birthday" value="1 May 1995" />
            <InfoItem label="Age" value="30" />
            <InfoItem label="Website" value="www.example.com" />
            <InfoItem label="Degree" value="Master" />
            <InfoItem label="Phone" value="+123 456 7890" />
            <InfoItem label="Email" value="email@example.com" />
            <InfoItem label="City" value="New York, USA" />
            <InfoItem label="Freelance" value="Available" />
          </div> */}

          <p className="text-sm text-gray-700">
            Officiis eligendi itaque labore et dolor mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore.
          </p>
        </div>
      </div>
    </section>
  );
}
