import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import AGALYA from "./CordinatorPhotos/AGALYA M.jpg"
import KISHORE from "./CordinatorPhotos/KISHORE M A.png"
import MOHAMMEDTHOUFIK from "./CordinatorPhotos/MOHAMMED THOUFIK S.jpg"
import FROZENFRAMESLOGO from "../../../assets/Logos/FROZENFRAMES.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
function FROZENFRAMES() {

    const handleRegisterClick = () => {
        window.open("https://forms.gle/Eb3PNgejGSFzG3Rh6", "_blank");

    };

    const teamMembers = [
        {
            name: 'Agalya M',
            imageUrl: AGALYA, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/agalya-moorthi-2a9058228'
        },
        {
            name: 'Kishore M A',
            imageUrl: KISHORE, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/kishore2003/'
        },
        // {
        //     name: 'Mohammed Thoufik',
        //     imageUrl: MOHAMMEDTHOUFIK, // Replace with actual image URLs
        //     linkedinUrl: 'https://www.linkedin.com/in/mohammed-thoufik-s-0ab995225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        // }
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
                                src={FROZENFRAMESLOGO}
                                alt="FROZE FRAMES Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>FROZEN FRAMES</h1>
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
                        <div className="bg-blue-400  text-white p-4 rounded-lg grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-1 md:gap-6">
                            {/* First row items (Mobile) */}
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹500</span>
                                <span className="text-sm">WINNER</span>
                            </div>

                            <div className="flex items-center justify-center space-x-2 col-span-1">
                                <span className="text-2xl"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                <span>Sept 24</span>
                            </div>

                            {/* Third item centered in the second row on mobile */}
                            <div className="flex items-center space-x-2 col-span-2 md:col-span-1 justify-center">
                                <span className="text-2xl">👥</span>
                                <span>1 Mem</span>
                            </div>
                        </div>
                    </div>


                    {/* Event description */}
                    <div className="mt-6 text-justify">
                        <p>
                            📸 Framing Reality: Join us for a thought-provoking photography event that captures the
                            essence of poverty, the aspirations of a billion dreams, and the stark realities of inequality. Each
                            image tells a powerful story, inviting you to see the world through different lenses and inspiring a
                            deeper understanding of the challenges and hopes that shape our shared humanity.🌍✨
                        </p>
                    </div>

                    {/* Rounds section */}
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold mb-2">Round 1 : Online</p>
                                <p>
                                    Participants are asked to submit your photos related to the themes of poverty,
                                    inequality, and billion dreams online through our Google Form. Share your most compelling
                                    images and contribute to the dialogue on these important issues.

                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Round 2 : Offline</p>
                                <p>
                                    Participate in the offline phase by capturing new photographs related to these themes
                                    within a designated venue. This hands-on round allows you to create and showcase fresh
                                    perspectives on the topics.

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

export default FROZENFRAMES
