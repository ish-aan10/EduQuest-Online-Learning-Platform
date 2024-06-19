import { courses } from "../data/courses.js";

let coursesHTML = "";

courses.forEach(course => {
    coursesHTML += `
            <div class="course-container">
                <div class="image-container">
                    <img src="${course.image}" class="course-image">                    
                </div>
                <div class="course-details">
                    <div class="course-name">${course.name}</div>
                    <div class="course-author">${course.author}</div>
                    <div class="course-price">&#8377; ${course.pricePaisa / 100}</div>
                </div>
                <button class="buy-course">BUY</button>
            </div>`;  
});

document.querySelector(".js-course-grid").innerHTML = coursesHTML;