import React from 'react';
import TeamCard from '../../Components/TeamCard';
import AGALYA from './CordinatorPhotos/AGALYA M.jpg';
import KISHORE from './CordinatorPhotos/KISHORE M A.png';
import MOHAMMEDTHOUFIK from './CordinatorPhotos/MOHAMMED THOUFIK S.jpg';
import Footer from '../../Components/Footer';
import videoplayback from '../../assets/videoplayback.mp4';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
function Website() {
    const teamMembers = [

        {
            name: 'Kishore M A',
            imageUrl: KISHORE,
            linkedinUrl: 'https://www.linkedin.com/in/kishore2003/',
        }, {
            name: 'Mugilan A',
            imageUrl: AGALYA,
            linkedinUrl: 'https://www.linkedin.com/in/mugilananbarasu',
        },
        {
            name: 'Selvamanikandan S',
            imageUrl: MOHAMMEDTHOUFIK,
            linkedinUrl: 'https://www.linkedin.com/in/selvamanikandan-s-8792b3250',
        }
    ];

    return (
        <>
            <section className="relative overflow-hidden pb-4">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={videoplayback} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Link to="/events">
                    <button className="absolute top-16 left-5 bg-gray-300 hover:bg-gray-400 text-black font-bold flex items-center justify-center w-12 h-12 rounded-full z-20 md:flex">
                        <ArrowLeftIcon className="h-6 w-6" />
                    </button>
                </Link>
                {/* Team Cards section */}
                <div className="relative z-10 mt-8 text-center px-4">
                    <h1 className="text-5xl font-bold text-white mb-6">Website Team</h1>
                    <div className="flex flex-wrap justify-center gap-6">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                name={member.name}
                                imageUrl={member.imageUrl}
                                linkedinUrl={member.linkedinUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Website;
