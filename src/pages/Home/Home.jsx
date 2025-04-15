import { useState, useEffect } from 'react';
import styles from "./Home.module.css";

const Home = () => {
    const [inputMinutes, setInputMinutes] = useState('');
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [lastBeepSecond, setLastBeepSecond] = useState(null);

    // Initialize beep sound
    const beepSound = new Audio('/beep.wav'); // Assumes beep.wav is in the public folder

    const calculateTimeLeft = (remainingSeconds) => {
        if (remainingSeconds <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            hours: Math.floor((remainingSeconds / 3600) % 24),
            minutes: Math.floor((remainingSeconds / 60) % 60),
            seconds: remainingSeconds % 60,
        };
    };

    const handleStartTimer = () => {
        const minutes = parseInt(inputMinutes);
        if (!isNaN(minutes) && minutes > 0) {
            setSecondsLeft(minutes * 60);
            setIsTimerStarted(true);
        }
    };

    const handleResetTimer = () => {
        setSecondsLeft(0);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsTimerStarted(false);
        setInputMinutes('');
        setLastBeepSecond(null);
    };

    useEffect(() => {
        if (isTimerStarted && secondsLeft > 0) {
            const timer = setTimeout(() => {
                const newSeconds = secondsLeft - 1;
                setSecondsLeft(newSeconds);
                setTimeLeft(calculateTimeLeft(newSeconds));

                // Play beep sound for the last 3 seconds
                if (newSeconds <= 3 && newSeconds > 0 && newSeconds !== lastBeepSecond) {
                    beepSound.play().catch((error) => {
                        console.error('Error playing beep sound:', error);
                    });
                    setLastBeepSecond(newSeconds);
                }
            }, 1000);

            return () => clearTimeout(timer);
        } else if (secondsLeft === 0 && isTimerStarted) {
            setIsTimerStarted(false);
            setLastBeepSecond(null);
        }
    }, [secondsLeft, isTimerStarted, lastBeepSecond]);

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
                <div className="flex flex-col items-center justify-center w-full md:w-1/3 px-6">
                    <img
                        src="/logo.jpeg"
                        alt="Event Poster"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side: Timer and Event Info */}
                <div className="flex flex-col items-center justify-center w-full md:w-2/3 m-5 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className={`text-4xl font-bold mb-4 text-center text-gray-800 ${styles.iceberg}`}>
                        Sri Sairam Engineering College <br />
                        National Service Scheme <br />
                        <span>
                            <h2 className="text-2xl font-bold">proudly presents</h2>
                        </span>
                    </h2>
                    <h2 className={`text-4xl font-bold text-center m-2 text-gray-800 ${styles.iceberg}`}>
                        <span className={`text-gray-800 text-4xl font-bold text-center leading-tight ${styles.gritx}`}>
                            அம்பேத்கர் ஜெயந்தி <br />தமிழி
                        </span>
                    </h2>

                    <h2 className={`text-3xl font-bold text-center text-gray-800 ${styles.iceberg}`}>
                        Round 1: குறுக்கெழுத்து புதிர்கள்
                    </h2>

                    {/* Timer Input and Controls */}
                    <div className="mt-4 flex flex-col items-center">
                        {!isTimerStarted ? (
                            <div className="flex space-x-2">
                                <input
                                    type="number"
                                    value={inputMinutes}
                                    onChange={(e) => setInputMinutes(e.target.value)}
                                    placeholder="Enter minutes"
                                    className="p-2 border rounded text-gray-800"
                                    min="1"
                                />
                                <button
                                    onClick={handleStartTimer}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Start Timer
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleResetTimer}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Reset Timer
                            </button>
                        )}
                    </div>

                    <h2 className={`text-2xl font-bold mt-4 text-center ${styles.iceberg}`}>
                        {isTimerStarted ? 'Completes in' : 'Set Timer'}
                    </h2>

                    {/* Timer Display */}
                    <div className={`text-center ${styles.iceberg}`}>
                        <div className="flex space-x-4 text-4xl text-gray-900">
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.hours}</span>
                                <span className="text-sm">Hours</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.minutes}</span>
                                <span className="text-sm">Minutes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span>{timeLeft.seconds}</span>
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