import React from 'react';
import "./testimony.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Testimony = () => {
  return (
    <div className="testimony">
        <div className="student-testimonials">
            <div className="testimonial-container">
                <div className="student-profile">
                    <div className="prof-img">SJ</div>
                    <p>Sarah Johnson</p>
                </div>
                <p className='course-detail'><span>Course Taken:</span> Introduction to Python</p>
                <p>"EduQuest has been a game-changer for me. The Introduction to Python course was well-structured and easy to follow. The practical exercises helped me understand the concepts better, and now I'm confident in my coding skills. I appreciate the instructor's feedback and the supportive community. I've already enrolled in my next course!"</p>
            </div>
            <div className="testimonial-container">
                <div className="student-profile">
                    <div className="prof-img">MT</div>
                    <p>Mark Thompson</p>
                </div>
                <p className='course-detail'><span>Course Taken:</span> Digital Marketing Strategies</p>
                <p>"The Digital Marketing course exceeded my expectations. The content was up-to-date and relevant, covering everything from SEO to social media marketing. The instructor was knowledgeable and always ready to help. Thanks to EduQuest, I've successfully applied these strategies to grow my business."</p>
            </div>
            <div className="testimonial-container">
                <div className="student-profile">
                    <div className="prof-img">ET</div>
                    <p>Emily Tran</p>
                </div>
                <p className='course-detail'><span>Course Taken:</span> Graphic Design Fundamentals</p>
                <p>"As a beginner in graphic design, I found this course incredibly helpful. The lessons were clear, and the projects allowed me to practice and refine my skills. I also loved the peer feedback system. EduQuest has given me the confidence to pursue a career in design."</p>
            </div>
        </div>
        <div className="testimony-title">
            <h2>Testimonials</h2>
            <p>What our Student Says</p>
            <i><FontAwesomeIcon icon={faArrowLeft}/></i>
        </div>
    </div>
  );
}

export default Testimony;