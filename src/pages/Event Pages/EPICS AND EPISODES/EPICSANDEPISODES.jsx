import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import AHISRI from "./CordinatorPhotos/AHISRI M.png"
import AzhaguMeenal from "./CordinatorPhotos/Azhagu Meenal.jpg"
import BharathKumar from "./CordinatorPhotos/Bharath Kumar.jpg"
import SIVARAMAGURU from "./CordinatorPhotos/SIVARAMAGURU M.jpg"
import SRINESH from "./CordinatorPhotos/SRINESH A.jpg"
import EPICSANDEPISODESLOGO from "../../../assets/Logos/EPICSANDEPISODES.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
function EPICSANDEPISODES() {
    const handleRegisterClick = () => {
        window.open("https://forms.gle/CjndJHVTPPDKXQPL6", "_blank");
    };

    const teamMembers = [
        {
            name: 'Ahisri M',
            imageUrl: AHISRI, // Replace with actual image URLs
            linkedinUrl: 'http://www.linkedin.com/in/ahisri-m-770705228'
        },
        {
            name: 'Azhagu Meenal',
            imageUrl: AzhaguMeenal, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/azhagu-meenal-19897a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Bharath Kumar',
            imageUrl: BharathKumar, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/bharath-kumar-a9b827225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Sivaramaguru M',
            imageUrl: SIVARAMAGURU, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/sivaramaguru-m-8765552b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Srinesh A',
            imageUrl: SRINESH, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/srinesh-aravindan-344019226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
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
                                src={EPICSANDEPISODESLOGO}
                                alt="EPICS AND EPISODES Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>EPICS & EPISODES</h1>
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
                                <span > Sept 24</span>
                            </div>
                            <div className="flex items-center space-x-2 col-span-1 md:col-span-1">
                                <span className="text-2xl">👥</span>
                                <span>2 Mem</span>
                            </div>
                        </div>
                    </div>

                    {/* Event description */}
                    <div className="mt-6 text-justify ">
                        <p>
                            📚✨🎬 Step into a world where stories come alive at our 'Books, Series, and TV Channels'
                            event! This immersive experience invites you to explore the rich tapestry of narratives that have
                            shaped our culture, from the pages of beloved novels to the screens of iconic series and TV
                            channels. 🎉
                        </p>
                    </div>

                    {/* Rounds section */}
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold my-2">Round-1: Offline</p>
                                <p>
                                    First round consists of 100 teams. Teams will face a series of fun and engaging
                                    challenges, testing their skills and creativity. Get ready for an exciting adventure as you work
                                    through each task together.

                                </p>
                            </div>
                            <div>
                                <p className="font-semibold my-2">Round-2: Offline</p>
                                <p>
                                    Dive into the memories to crack famous dialogues of authors, complete
                                    legendary sentences, and discover hidden gems from books and series through Subtle hints.
                                    You'll piece together iconic moments and rediscover the magic of your favorite stories. Get ready
                                    to dive deep into the world of literature and TV with a fun and challenging twist!
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold my-2">Round-3: Offline</p>
                                <p>
                                    Get ready to perform under pressure! Act out TV shows as the jury controls the
                                    remote, changing channels within a time span of 5 mins.

                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mb-2">Registration Fee</p>
                                <p>
                                    Secure your spot in this unforgettable event; register now with a fee of just <span className='font-bold'> ₹100.</span>
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


export default EPICSANDEPISODES
