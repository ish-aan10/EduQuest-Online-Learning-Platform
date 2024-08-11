import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <footer>
            <div className="footer-links">
                <div className="footer-sections">
                    <h3>About Us</h3>
                    <p>Learn more about EduQuest and our mission to make education accessible to everyone.</p>
                    <ul>
                        <li>Our Mission</li>
                        <li>Our Team</li>
                        <li>Our Story</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <hr />
                <div className="footer-sections">
                    <h3>Courses</h3>
                    <p>Explore a variety of courses across multiple categories.</p>
                    <ul>
                        <li>Technology</li>
                        <li>Business</li>
                        <li>Arts & Humanities</li>
                        <li>Science</li>
                        <li>Personal Development</li>
                    </ul>
                </div>
                <hr />
                <div className="footer-sections">
                    <h3>Support</h3>
                    <p>Need help? Get support and find answers to your questions.</p>
                    <ul>
                        <li>Help Center</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Community Forum</li>
                        <li>Technical Support</li>
                    </ul>
                </div>
                <hr />
                <div className="footer-sections">
                    <h3>Legal</h3>
                    <p>Stay informed about our policies and terms.</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Cookie Policy</li>
                        <li>Copyright Information</li>
                    </ul>
                </div>
                <hr />
                <div className="footer-sections">
                    <h3>Connect With Us</h3>
                    <p>Follow us on social media and stay updated.</p>
                    <ul className="social-links">
                        <li><FontAwesomeIcon icon={faFacebook}/></li>
                        <li><FontAwesomeIcon icon={faTwitter}/></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                        <li><FontAwesomeIcon icon={faInstagram}/></li>
                        <li><FontAwesomeIcon icon={faYoutube}/></li>
                    </ul>
                </div>
            </div>
            <div className="footer-newsletter">
                <p>Subscribe to our newsletter for the latest updates and exclusive content.</p>
                <div className="mail">
                    <div className="mail-input">
                        <i><FontAwesomeIcon icon={faUser}/></i>
                        <input type="text" placeholder="Enter Your E-mail" />
                    </div>
                    <div className="subscribe-button">Subscribe</div>
                </div>
            </div>
            <p className="copyright">&copy; 2024 EduQuest. All rights reserved.</p>
            <div className="back-to-top-btn" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </div>
        </footer>
    );
}

export default Footer;