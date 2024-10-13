import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import Abirami from "./CordinatorPhotos/ABIRAMI.jpg"
import ASWINLAKSHMAN from "./CordinatorPhotos/ASWINLAKSHMAN.jpg"
import RAMPAVITHRAN from "./CordinatorPhotos/RAMPAVITHRAN R P.jpg"
import SWARNALAKSHME from "./CordinatorPhotos/SWARNA LAKSHME V.jpg";
import UiUx from "../../../assets/Logos/UIUX.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
function UiUxForge() {
    const handleRegisterClick = () => {
        window.open("https://forms.gle/hnAcZkg4jTcoTydQ8", "_blank");
    };

    const teamMembers = [
        {
            name: 'ABIRAMI B',
            imageUrl: Abirami, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/abirami-b-253990225'
        },

        {
            name: 'RAM PAVITHRAN R P',
            imageUrl: RAMPAVITHRAN, // Replace with actual image URLs
            linkedinUrl: 'http://www.linkedin.com/in/rampavithran-rp'
        },
        {
            name: 'SWARNA LAKSHME V',
            imageUrl: SWARNALAKSHME, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/swarna-lakshme-v-583980227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'ASWINLAKSHMAN Y',
            imageUrl: ASWINLAKSHMAN, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/aswin-lakshman-28243b255'
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
                                src={UiUx}
                                alt="UiUx Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>UI/UX FORGE</h1>
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
                                <span className="font-bold">₹1000</span>
                                <span className="text-sm">WINNER</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹700</span>
                                <span className="text-sm">RUNNER 1</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-bold">₹500</span>
                                <span className="text-sm">RUNNER 2</span>
                            </div>


                            {/* Remaining items (Mobile) */}
                            <div className="flex items-center space-x-2 justify-center col-span-2 md:col-span-1">
                                <span className="text-2xl"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                <span> Sept 24</span>
                            </div>
                            <div className="flex items-center space-x-2 col-span-1 md:col-span-1">
                                <span className="text-2xl">👥</span>
                                <span>2 Mem</span>
                            </div>
                        </div>
                    </div>

                    {/* Event description */}
                    <div className="mt-6 text-justify">
                        <p>
                            UI/UX Forge is an immersive event that challenges designers to craft captivating user
                            interfaces and experiences centered around innovative concepts and themes. Ready to bring your
                            design vision to life? This event offers a unique opportunity to collaborate, conceptualize, and
                            innovate, pushing the boundaries of digital design. Participants will work together to create
                            stunning, functional interfaces that adhere to the aesthetics and objectives of the selected theme.
                            Join us in this live event to showcase your creativity and design prowess in the digital realm!
                        </p>
                    </div>

                    {/* Rounds section */}
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Round 1: Online</p>
                                <p>
                                    This round kicks off with an online quiz focused on logos. Participants will be tested on their
                                    knowledge of brand logos and their significance in design. Those who score the highest will
                                    move on to the next round.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Round 2: Offline</p>
                                <p>
                                    In this offline round, participants will use Figma to tackle a basic design task. They might create
                                    a wireframe, develop basic UI components, or design a simple interface. The challenge will test
                                    their creativity, adherence to design principles, and usability.

                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Round 3: Offline</p>
                                <p>
                                    The final round, also offline, will push participants to their limits with a more complex design
                                    challenge. Using Figma, they'll work on tasks like redesigning an interface, creating a detailed
                                    prototype, or solving a specific user experience problem. This round focuses on innovation,
                                    problem-solving, and overall design quality.
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

export default UiUxForge;
