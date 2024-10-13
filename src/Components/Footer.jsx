import React from 'react';
import { FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import gritx from "../assets/Logos/Gritx.png";

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white pt-6 pb-5'>
            <div className='container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4'>

                {/* Map Div */}
                <div className='w-full md:w-1/3 order-1 md:order-3 mb-4 md:mb-0'>
                    <h1 className='text-lg font-semibold mb-2'>Locate Us</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124421.81696604118!2d79.91733141640623!3d12.9602171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1661789393148!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>

                {/* Logo Div */}
                <div className='mb-4 md:mb-0 flex justify-center md:justify-start order-2 md:order-1'>
                    <img
                        src={gritx}
                        alt="Logo"
                        className='w-48 h-48'
                    />
                </div>

                {/* Connect with Us Div */}
                <div className='text-center md:text-left mb-4 md:mb-0 w-full md:w-[40%] order-3 md:order-2'>
                    <h1 className='text-lg font-semibold mb-2'>Connect with us</h1>
                    <h1 className='text-lg font-semibold mb-2'>gritxnss@sairam.edu.in</h1>

                    {/* Contact Details */}
                    <div className='mb-4'>
                        <p className='text-base font-medium mb-1'>Contact Us:</p>
                        <ul className=' list-inside text-base'>
                            <li>Srinesh Aravindhan - +91 75400 30306</li>
                            <li>Mohammed Thoufik S  - +91 90924 04070</li>
                            <li>BHARATH KUMAR S - +91 6381 291 332</li>
                        </ul>
                    </div>

                    <div className='flex justify-center md:justify-start space-x-4'>
                        <a href="https://www.instagram.com/sairamnss?igsh=MWVhejhkM2t3N3V4Zw==" target="_blank" rel="noopener noreferrer" className='text-xl'>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/nss-sairam/" target="_blank" rel="noopener noreferrer" className='text-xl'>
                            <FaLinkedin />
                        </a>
                        <a href="mailto:gritxnss@sairam.edu.in" className='text-xl'>
                            <FaGoogle />
                        </a>
                    </div>
                </div>

            </div>
            {/* Credits Div */}
            {/* <div className=' text-center text-sm pt-4 py-2 bg-gray-700 mt-5 text-gray-300'>
                Website designed and developed by
                <a href="https://www.linkedin.com/in/rampavithran-rp/" className="underline text-blue-300 hover:text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">
                    Ram Pavithran R P
                </a>,
                <a href="https://www.linkedin.com/in/mugilananbarasu" className="underline text-blue-300 hover:text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">
                    Mugilan A
                </a>, and
                <a href="https://www.linkedin.com/in/selvamanikandan-s-8792b3250" className="underline text-blue-300 hover:text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">
                    Selvamanikandan S
                </a>.
            </div> */}

        </footer>
    );
};

export default Footer;
