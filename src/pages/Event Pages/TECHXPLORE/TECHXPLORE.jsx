import React from 'react';
import Footer from '../../../Components/Footer';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import videoplayback from "../../../assets/videoplayback.mp4"
import TeamCard from '../../../Components/TeamCard';
import styles from "../../Fonts.module.css"
import BharathKumar from "./CordinatorPhotos/Bharath Kumar.jpg"
import DEEPIKA from "./CordinatorPhotos/DEEPIKA C.png"
import HARIRATHIN from "./CordinatorPhotos/HARI RATHIN M.jpg"
import MEGANATHAN from "./CordinatorPhotos/MEGANATHAN D.png"
import YazhiniGaneshkannaa from "./CordinatorPhotos/Yazhini Ganeshkannaa.jpg"
import TECHXPLORELOGO from "../../../assets/Logos/TECHXPLORE.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function TECHXPLORE() {

    const handleRegisterClick = () => {
        window.open("https://forms.gle/zVEowhGGTn4uvWPT8", "_blank");

    };

    const teamMembers = [
        {
            name: 'Deepika C',
            imageUrl: DEEPIKA, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/deepika-chandrasekar-68198a228/'
        },
        {
            name: 'Hari Rathin M',
            imageUrl: HARIRATHIN, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/hari-rathin-7bb53a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Meganathan D',
            imageUrl: MEGANATHAN, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/meganathan-d-064899201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Yazhini G',
            imageUrl: YazhiniGaneshkannaa, // Replace with actual image URLs
            linkedinUrl: 'https://www.linkedin.com/in/yazhini-g-372051226'
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
                                src={TECHXPLORELOGO}
                                alt="TECH XPLORE Logo"
                                className="w-[275px] h-[275px]"
                            />
                        </div>

                        {/* Right side: Text and buttons */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <div className="text-center">
                                <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${styles.faustinaText}`}>TECH-XPLORE</h1>
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
                                <span>3 Mem</span>
                            </div>
                        </div>
                    </div>

                    {/* Event description */}
                    <div className="mt-6 text-justify">
                        <p className=''>
                            Come be a part of TechXplore during GRITX 7.0,submit your
                            PowerPoint presentation and abstract via the designated Google Form, following the provided
                            PPT format and deadline. Teams with only a PPT will be shortlisted under Model Presentation. If
                            these teams also have a camera-ready version or a prototype, they will benefit from additional
                            points and increased visibility. The top three teams in this category will receive cash prizes in
                            recognition of their innovative contributions.

                        </p>
                    </div>

                    {/* Rounds section */}
                    <div className="mt-6 text-justify">
                        <h1 className="text-2xl font-bold mb-4">Rounds</h1>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Round - 1: Online</p>
                                <p>
                                    Participants are required to submit PowerPoint presentations and abstracts of their innovative
                                    research. Those who include a camera-ready version or prototype with their submission will
                                    receive additional benefits.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Round - 2: Offline</p>
                                <p>
                                    Participants selected from Round 1 will present either their model or research paper in person.
                                    The top teams in the model presentation will receive cash prizes, while the best papers following
                                    the IEEE format will be published with Scopus indexation. Exceptional ideas will also be
                                    awarded internships.

                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mb-2">Registration Fee :<span className='font-bold'> ₹150.</span></p>


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



export default TECHXPLORE
