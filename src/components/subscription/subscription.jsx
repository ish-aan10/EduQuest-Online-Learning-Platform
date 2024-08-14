import React, { useEffect, useRef, useState } from "react";
import "./subscription.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCalendarCheck, faHandHoldingDollar, faHouseUser, faPiggyBank, faSackDollar } from "@fortawesome/free-solid-svg-icons";

const Subscription = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        scrollContainerRef?.current.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        if(scrollContainerRef.current.scrollLeft > 0) {
            setShowLeftButton(true);
        } else {
            setShowLeftButton(false);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    });

    return ( 
        <div className="subscription">
            <div className="subs-title">
                <h2>Our Subscription Plans</h2>
                <i><FontAwesomeIcon icon={faArrowRight} /></i>
            </div>
            <div className="sub-plans" ref={scrollContainerRef}>
                <div className="plan">
                    <h3>Free Plan <FontAwesomeIcon icon={faPiggyBank} /></h3>
                    <p>Price: $0/month</p>
                    <hr />
                    <h4>Description:</h4>
                    <p>"Get a taste of EduQuest with our Free Plan. Access a limited selection of courses and experience our platform without any cost."</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Access to selected free courses</li>
                        <li>Limited community forum access</li>
                        <li>Basic customer support</li>
                        <li>No certificates</li>
                    </ul>
                    <div className="start-sub-btn">
                        Start Subscription <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className="plan">
                    <h3>Basic Plan <FontAwesomeIcon icon={faHandHoldingDollar} /></h3>
                    <p>Price: $9.99/month</p>
                    <hr />
                    <h4>Description:</h4>
                    <p>"Start your learning journey with our Basic Plan. Enjoy more courses and additional features to enhance your learning experience."</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Access to all free courses</li>
                        <li>5 premium courses per month</li>
                        <li>Full community forum access</li>
                        <li>Standard customer support</li>
                        <li>Certificate of completion for premium courses</li>
                    </ul>
                    <div className="start-sub-btn">
                        Start Subscription <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className="plan">
                    <h3>Premium Plan <FontAwesomeIcon icon={faSackDollar} /></h3>
                    <p>Price: $29.99/month</p>
                    <hr />
                    <h4>Description:</h4>
                    <p>"Unlock the full potential of EduQuest with our Premium Plan. Get unlimited access to all courses and premium features."</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Unlimited access to all courses</li>
                        <li>Full community forum access</li>
                        <li>Priority customer support</li>
                        <li>Certificate of completion for all courses</li>
                        <li>Offline access to course materials</li>
                        <li>Access to exclusive webinars and events</li>
                    </ul>
                    <div className="start-sub-btn">
                        Start Subscription <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className="plan">
                    <h3>Family Plan <FontAwesomeIcon icon={faHouseUser} /></h3>
                    <p>Price: $49.99/month</p>
                    <hr />
                    <h4>Description:</h4>
                    <p>"Share the gift of learning with your family. Our Family Plan offers access for multiple users at a discounted rate."</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Unlimited access to all courses for up to 5 users</li>
                        <li>Full community forum access for all family members</li>
                        <li>Priority customer support</li>
                        <li>Certificate of completion for all courses</li>
                        <li>Offline access to course materials</li>
                        <li>Access to exclusive webinars and events</li>
                    </ul>
                    <div className="start-sub-btn">
                        Start Subscription <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
                <div className="plan">
                    <h3>Annual Plan <FontAwesomeIcon icon={faCalendarCheck} /></h3>
                    <p>Price: $299/year (save 20%)</p>
                    <hr />
                    <h4>Description:</h4>
                    <p>"Commit to a year of learning and save with our Annual Plan. Enjoy all the benefits of the Premium Plan at a reduced rate."</p>
                    <h4>Features:</h4>
                    <ul>
                        <li>Unlimited access to all courses</li>
                        <li>Full community forum access</li>
                        <li>Priority customer support</li>
                        <li>Certificate of completion for all courses</li>
                        <li>Offline access to course materials</li>
                        <li>Access to exclusive webinars and events</li>
                        <li>Annual progress report and personalized learning recommendations</li>
                    </ul>
                    <div className="start-sub-btn">
                        Start Subscription <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                </div>
            </div>
            <div className="sub-btn-scroller">
                {showLeftButton && (
                    <div className="scroll-left-btn" onClick={scrollRight}>
                        <i><FontAwesomeIcon icon={faArrowLeft} /></i>
                    </div>
                )}
                <div className="more-btn" onClick={scrollLeft}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div> 
            </div>
            
        </div>
     );
}
 
export default Subscription;