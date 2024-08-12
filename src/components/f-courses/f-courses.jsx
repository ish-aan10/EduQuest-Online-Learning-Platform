import React from 'react';
import "./f-course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBullhorn, faEdit, faPieChart } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const FCourses = () => {
  return (
    <div className="fc">
        <div className="fc-title">
            <p>Featured Courses</p>
            <i><FontAwesomeIcon icon={faArrowRight} /></i>
        </div>
        <div className="fc-courses">
            <div className="container">
                <i><FontAwesomeIcon icon={faPython} /></i>
                <div className="course-details">
                    <h4>Introduction to Python Programming</h4>
                    <p>PythonExpert</p>
                    <p>Specialization</p>
                </div>
            </div>
            <div className="container">
                <i><FontAwesomeIcon icon={faBullhorn} /></i>
                <div className="course-details">
                    <h4>Digital Marketing Essentials</h4>
                    <p>Mr. Kessler</p>
                    <p>Specialization</p>
                </div>
            </div>
            <div className="container">
                <i><FontAwesomeIcon icon={faEdit} /></i>
                <div className="course-details">
                    <h4>Creative Writing for Beginners</h4>
                    <p>Anna Williams</p>
                    <p>Specialization</p>
                </div>
            </div>
            <div className="container">
                <i><FontAwesomeIcon icon={faPieChart} /></i>
                <div className="course-details">
                    <h4>Data Science and Machine Learning</h4>
                    <p>HackItCoder</p>
                    <p>Specialization</p>
                </div>
            </div>
        </div>
        <i className='show-btn'><FontAwesomeIcon icon={faArrowRight} /></i>
    </div>
  );
}

export default FCourses;