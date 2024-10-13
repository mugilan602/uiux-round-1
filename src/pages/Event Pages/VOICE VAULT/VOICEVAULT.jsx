import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import AzhaguMeenal from "./CordinatorPhotos/Azhagu Meenal.jpg"
import Meganathan from "./CordinatorPhotos/Meganathan.png"
import SWARNALAKSHME from "./CordinatorPhotos/SWARNA LAKSHME V.jpg"
import VOICEVAULTLOGO from "../../../assets/Logos/VOICE VAULT.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
function VOICEVAULT() {

  const handleRegisterClick = () => {
    window.open("https://forms.gle/iZmypCEGCgtu5YR98", "_blank");
  };

  const teamMembers = [
    {
      name: 'Azhagu Meenal',
      imageUrl: AzhaguMeenal, // Replace with actual image URLs
      linkedinUrl: 'https://www.linkedin.com/in/azhagu-meenal-19897a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Meganathan',
      imageUrl: Meganathan, // Replace with actual image URLs
      linkedinUrl: 'https://www.linkedin.com/in/meganathan-d-064899201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Swarna Lakshme V',
      imageUrl: SWARNALAKSHME, // Replace with actual image URLs
      linkedinUrl: 'https://www.linkedin.com/in/swarna-lakshme-v-583980227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  ];

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-gray-900 pb-4">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoplayback} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Blurred Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm z-10"></div>

        {/* Back Button */}
        <Link to="/events">
          <button className="absolute top-16 left-5 bg-gray-300 hover:bg-gray-400 text-black font-bold flex items-center justify-center w-12 h-12 rounded-full z-20 md:flex">
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        </Link>


        {/* Content Container */}
        <div className="relative z-20 w-[95%] p-5 lg:w-[89%] mt-10 bg-blue-100 lg:p-8 rounded-lg shadow-md lg:max-h-[87vh] lg:overflow-y-auto mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left side: Image container */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={VOICEVAULTLOGO}
                alt="voice vault Logo"
                className="w-[275px] h-[275px]"
              />
            </div>

            {/* Right side: Text and buttons */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="text-center">
                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>VOICE VAULT</h1>
                <div className="flex justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <button onClick={handleRegisterClick}
                    className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                    REGISTER
                  </button>
                  {/* <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                                        BROCHURE
                                    </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-blue-400 w-full md:w-1/2 text-white p-4 rounded-lg grid grid-cols-3 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1 md:gap-6">
              {/* First row items (Mobile) */}
              <div className="flex flex-col items-center">
                <span className="font-bold">₹750</span>
                <span className="text-sm">WINNER</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">₹500</span>
                <span className="text-sm">RUNNER 1</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">₹300</span>
                <span className="text-sm">RUNNER 2</span>
              </div>


              {/* Remaining items (Mobile) */}
              <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-1">
                <span className="text-2xl"><FontAwesomeIcon icon={faCalendarDays} /></span>
                <span> Sept 24</span>
              </div>
              <div className="flex items-center space-x-2 col-span-1 md:col-span-1">
                <span className="text-2xl">👥</span>
                <span>1 Mem</span>
              </div>
            </div>
          </div>

          {/* Event description */}
          <div className="mt-6 text-justify">
            <p>
              VoiceVault is a dynamic event designed for aspiring Radio Jockeys 🎙 to
              showcase their spontaneity and communication skills. Participants are given a random topic and
              must quickly craft and deliver a polished radio segment ⏳, demonstrating their ability to engage
              an audience and maintain a seamless flow under pressure. ✨

            </p>
          </div>

          Rounds section
          <div className="mt-6 text-justify">
            <h1 className="text-2xl font-bold mb-4">Rounds</h1>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Round 1: Online - Wheel Spinning Activity</p>
                <p>
                  In this round, participants will take part in an online wheel-spinning activity. The wheel
                  will land on a number that corresponds to a specific topic, and participants will be
                  required to deliver an impromptu speech on the selected subject. This round tests
                  participants' ability to think quickly, reason effectively, and communicate their thoughts
                  clearly and spontaneously.

                </p>
              </div>
              <div>
                <p className="font-semibold">Round 2: Offline - Themed Event</p>
                <p>
                  The second round moves to an offline setting, where participants will be given a topic
                  around which the event will be centered. This could involve various activities,
                  discussions, or group tasks related to the theme. The objective is to evaluate participants'
                  understanding, creativity, and their ability to collaborate and engage deeply with the
                  topic.

                </p>
              </div>
              <div>
                <p className="font-semibold">Round 3: Offline - On-Stage Speech</p>
                <p>
                  The final round is conducted on stage, where participants will deliver a prepared speech
                  on a given topic. This round focuses on assessing public speaking abilities, including
                  clear articulation, confidence, audience engagement, and the effective presentation of
                  ideas. The emphasis is on delivering structured and persuasive speeches in a formal
                  setting.

                </p>
              </div>
            </div>
          </div>

          {/* Coordinators section */}
          {/* Team Cards section */}
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Co-Ordinators
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  phoneNumber={member.phoneNumber}
                  imageUrl={member.imageUrl}
                  linkedinUrl={member.linkedinUrl}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default VOICEVAULT
