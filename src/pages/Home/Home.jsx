import { useState, useEffect } from 'react';
import styles from "./Home.module.css";
const Home = () => {
    // Set initial countdown time (45 minutes and 10 seconds)
    const initialTime = 45 * 60 + 10; // Convert to seconds

    const calculateTimeLeft = (remainingSeconds) => {
        let timeLeft = {};
        if (remainingSeconds > 0) {
            timeLeft = {
                hours: Math.floor((remainingSeconds / 3600) % 24),
                minutes: Math.floor((remainingSeconds / 60) % 60),
                seconds: Math.floor(remainingSeconds % 60),
            };
        } else {
            timeLeft = { hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(initialTime));
    const [secondsLeft, setSecondsLeft] = useState(initialTime);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timer = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
                setTimeLeft(calculateTimeLeft(secondsLeft - 1));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [secondsLeft]);

    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/bvideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 bg-black bg-opacity-50 flex flex-col md:flex-row justify-center items-center h-full w-full">
                {/* Left Side: Event Poster */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-6">
                    <img
                        src="/Logo.png" // Replace with your event poster
                        alt="Event Poster"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side: Timer and Event Info */}
                <div className="flex flex-col items-center justify-center w-full md:w-2/3 m-5 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className={`text-4xl font-bold mb-4 text-center text-gray-800 ${styles.iceberg}`}>
                        Sri Sairam Engineering College <br />
                        National Service Scheme <br />
                        <span><h2 className="text-2xl font-bold ">proudly presents</h2></span>
                    </h2>
                    <h2 className={`text-4xl font-bold text-center  m-2 text-gray-800 ${styles.iceberg}`}>
                        <span className={`text-gray-800 text-5xl font-bold text-center ${styles.gritx}`}>
                            UI/UX Forge
                        </span>
                    </h2>

                    <h2 className={`text-4xl font-bold text-center text-gray-800 ${styles.iceberg}`}>
                        Round 1: Design Quest
                    </h2>

                    <h2 className={`text-2xl font-bold mt-4 text-center ${styles.iceberg}`}>
                        Completes in
                    </h2>


                    {/* Timer Display */}
                    <div className={`text-center ${styles.iceberg}`}>
                        <div className="flex space-x-4 text-4xl  text-gray-900">
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.hours || 0}</span>
                                <span className="text-sm">Hours</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.minutes || 0}</span>
                                <span className="text-sm">Minutes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.seconds || 0}</span>
                                <span className="text-sm">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
