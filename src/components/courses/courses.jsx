import React from 'react';
import "./courses.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faCalculator, faChartLine, faFlask, faMicrochip, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import prof_img from "../../assets/PythonExpert.jpg";

const Courses = () => {
  return (
    <div className="courses">
        <div className="course-categories">
            <h2>Course Categories</h2>
            <ul>
                <li>Technology <FontAwesomeIcon icon={faMicrochip} /></li>
                <li>Business <FontAwesomeIcon icon={faChartLine} /></li>
                <li>Arts <FontAwesomeIcon icon={faBank} /></li>
                <li>Science <FontAwesomeIcon icon={faFlask} /></li>
                <li>Maths & Logic <FontAwesomeIcon icon={faCalculator} /></li>
            </ul>
        </div>
        <div className="course-brief">
            <div className="search-bar">
                <input type="text" placeholder="Search Courses" />
                <i><FontAwesomeIcon icon={faSearch} /></i>
            </div>
            <div className="filter">
                <p>Filter:</p>
                <div className="difficulty">
                    <p>Difficulty:</p>
                    <select>
                        <option selected>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
                <div className="duration">
                    <p>Duration:</p>
                    <select>
                        <option selected>Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </select>
                </div>
                <div className="rating">
                    <p>Rating:</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option selected>5</option>
                    </select>
                </div>
            </div>
            <div className="course-container">
                <div className="course-detail">
                    <i><FontAwesomeIcon icon={faPython} /></i>
                    <h3>Introduction to Python programming</h3>
                    <hr />
                    <p>This course covers the basics of Python, including syntax, data types, and control structures, and progresses to more advanced topics like functions, modules, and file handling. By the end of this course, you'll be able to write simple Python programs and understand the fundamental concepts of programming."</p>
                </div>
                <div className="course-syllabus">
                    <h2>Syllabus</h2>
                    <hr />
                    <div className="syllabus-content">
                        <h3>1. Week 1: Introduction to Python</h3>
                        <ul>
                            <li>Overview of Python and its applications</li>
                            <li>Setting up the Python environment</li>
                            <li>Writing your first Python program</li>
                        </ul>
                        <h3>2. Week 2: Basic Syntax and Data Types</h3>
                        <ul>
                            <li>Python syntax rules</li>
                            <li>Variables and data types</li>
                            <li>Basic operators and expressions</li>
                        </ul>
                        <h3>3. Week 3: Control Structures</h3>
                        <ul>
                            <li>Conditional statements (if, elif, else)</li>
                            <li>Loops (for, while)</li>
                            <li>Nested loops and conditional statements</li>
                        </ul>
                        <h3>4. Week 4: Functions and Modules</h3>
                        <ul>
                            <li>Defining and calling functions</li>
                            <li>Function parameters and return values</li>
                            <li>Importing and using modules</li>
                        </ul>
                        <h3>5. Week 5: Data Structures</h3>
                        <ul>
                            <li>Lists, tuples, and dictionaries</li>
                            <li>List comprehensions</li>
                            <li>Working with sets and string</li>
                        </ul>
                        <h3>6. Week 6: File Handling and Exceptions</h3>
                        <ul>
                            <li>Reading from and writing to files</li>
                            <li>Exception handling (try, except, finally)</li>
                            <li>Working with different file formats</li>
                        </ul>
                        <h3>7. Week 7: Advanced Topics</h3>
                        <ul>
                            <li>Introduction to object-oriented programming</li>
                            <li>Classes and objects</li>
                            <li>Basic understanding of libraries and frameworks</li>
                        </ul>
                        <h3>8. Week 8: Final Project</h3>
                        <ul>
                            <li>Developing a small Python application</li>
                            <li>Applying all the concepts learned</li>
                            <li>Project presentation and feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="instructor-info">
                    <h2>Instructor</h2>
                    <hr />
                    <img src={prof_img} alt="" />
                    <h3>PythonExpert</h3>
                    <hr />
                    <p>"PythonExpert is a seasoned software developer with over 10 years of experience in Python programming. His approach to teaching Python is hands-on and project-based, ensuring that students not only learn the theory but also gain practical experience."</p>
                    <div className="enroll-btn">Enroll now</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Courses;