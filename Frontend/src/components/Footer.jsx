import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube, faFlickr } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                    <img src="https://www.un.org/sites/un2.un.org/files/2021/03/un-logo.png" width="100" height="auto" alt="United Nations Logo" className="mr-4" />
                    <span className="mr-4">Join the conversation:</span>
                    <div className="mr-4">
                        <a href="https://www.facebook.com/SustDev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="mr-4">
                        <a href="https://twitter.com/SustDev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="mr-4">
                        <a href="https://www.youtube.com/user/uncsd2012/featured" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="text-white text-lg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.flickr.com/photos/sustdev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFlickr} className="text-white text-lg" />
                        </a>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <ul className="nav ml-auto"> {/* Added ml-auto to move the list items to the right */}
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.un.org/en/sections/about-website/copyright/" className="nav-link">Copyright</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.un.org/en/sections/about-website/fraud-alert/" className="nav-link">Fraud Alert</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.un.org/en/sections/about-website/privacy-notice/" className="nav-link">Privacy Notice</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.un.org/en/sections/about-website/terms-use/" className="nav-link">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;