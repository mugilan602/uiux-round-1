import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import BHARATHKUMAR from "./CordinatorPhotos/Bharath Kumar.jpg"
import JAYASREE from "./CordinatorPhotos/Jayasree M.jpg"
import KIRTHIKA from "./CordinatorPhotos/KIRTHIKA V.jpg"
import NiranjanaDevy from "./CordinatorPhotos/Niranjana Devy SJ.jpg";
import SANTHOSHKUMAR from "./CordinatorPhotos/SANTHOSH KUMAR S.jpg"
import Sujitha from "./CordinatorPhotos/Sujitha J.jpg"
import SWATHI from "./CordinatorPhotos/SWATHI K.jpg"
import VISHAL from "./CordinatorPhotos/VISHAL B.jpg";
import XSCAPEROOMLOGO from "../../../assets/Logos/XSCAPE ROOM.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
function XSCAPEROOM() {
    const handleRegisterClick = () => {
        window.open("https://forms.gle/jN5xJo8fSHDHUhC1A", "_blank");
    };

    const teamMembers = [

        {
            name: 'Jayasree M',
            imageUrl: JAYASREE, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/jayasree-m-09605b228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            name: 'Niranjana Devy SJ',
            imageUrl: NiranjanaDevy, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/niranjana-devy-s-j-1056ba242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Santhosh Kumar S',
            imageUrl: SANTHOSHKUMAR, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/santhosh-kumar-0a7ab0325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Sujitha J',
            imageUrl: Sujitha, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/sujitha-j-4a0111227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Swathi K',
            imageUrl: SWATHI, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/swathi-k-74bab6228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Vishal B',
            imageUrl: VISHAL, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/vishal-b-567a7a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
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
                                src={XSCAPEROOMLOGO}
                                alt="XSCAPE ROOM Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>XSCAPE ROOM</h1>
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
                            <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-1">
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
                            Get ready for an adrenaline-pumping adventure! Gather your team, crack the codes,
                            and race against the clock to escape the room. Are you up for testing your intellect and teamwork
                            in the ultimate challenge? Join the Thrilling Team Challenge and see if you can conquer the
                            xscape. This event is all about bringing people together to solve puzzles, tackle challenges, and
                            work through riddles in a themed, immersive environment. The goal is simple: work together,
                            uncover secrets, unlock the door, and make your xscape before time runs out. It’s more than just
                            puzzles—it’s about bonding with your teammates and sharpening your problem-solving skills.
                        </p>
                    </div>

                    {/* Rounds section */}
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Round 1 - Offline (Physical activity)</p>
                                {/* <p>Set your imagination free and craft the destiny of our brand. ✨ Create a unique symbol that embodies our identity and stands out from the crowd. Are you up for the challenge? 🏆🎨</p> */}
                            </div>
                            <div>
                                <p className="font-semibold">Round 2 - Offline (Puzzles, Coding, Debugging)</p>
                                {/* <p>Craft seamless digital experiences that leave a lasting impression! Elevate user experiences and redefine digital landscapes. Your creative prowess is the key to unlock this design excellence. Ready to lead the way?</p> */}
                            </div>
                            <div>
                                <p className="font-semibold">Round 3 - Treasure hunt</p>
                                {/* <p>Transform pixels into purpose! Step into the spotlight and share the story behind your design, and let your passion shine as you unveil the future of user experiences. Get ready to make your mark in the world of design!</p> */}
                            </div>
                        </div>
                        <h1 className="text-2xl mt-2 font-bold mb-4">Registration fee: 100 rs per team</h1>

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

export default XSCAPEROOM
