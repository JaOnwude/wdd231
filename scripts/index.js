const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const hamburgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const allCourses = document.querySelector(".all-courses");
const cseCourses = document.querySelector(".cse-courses");
const wddCourses = document.querySelector(".wdd-courses");
const homeAnchor = document.querySelector(".home");
const chamberAnchor = document.querySelector(".chamber");
const finalAnchor = document.querySelector(".final");
const gitHubAnchor = document.querySelector(".github");
const linkedInAnchor = document.querySelector(".linkedin");
let courseContainer = document.querySelector(".course-list-container");
let displayTotalCredits = document.querySelector(".total-credits")
let totalCredit = 0;
const courseDetails = document.querySelector("#course-details");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});

allCourses.addEventListener("click", () => {
    createCourseCard(courses)
})

cseCourses.addEventListener("click", () => { 
    createCourseCard(courses.filter(course => course.subject == "CSE"));
})

wddCourses.addEventListener("click", () => {
    createCourseCard(courses.filter(course => course.subject == "WDD"))
})

homeAnchor.textContent = "📍 Home";

homeAnchor.addEventListener("click", () => {
    chamberAnchor.textContent = "";
    homeAnchor.textContent = "📍 Home";
    finalAnchor.textContent = "Final";
    gitHubAnchor.textContent = "GitHub Profile";
    linkedInAnchor.textContent = "LinkedIn";
    chamberAnchor.textContent = "Chamber";
})

chamberAnchor.addEventListener("click", () => {
    chamberAnchor.textContent = "";
    homeAnchor.textContent = "Home";
    finalAnchor.textContent = "Final";
    gitHubAnchor.textContent = "GitHub Profile";
    linkedInAnchor.textContent = "LinkedIn";
    chamberAnchor.textContent = `📍 Chamber`;
})

finalAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "Home";
    finalAnchor.textContent = "📍 Final";
    gitHubAnchor.textContent = "GitHub Profile";
    linkedInAnchor.textContent = "LinkedIn";
    chamberAnchor.textContent = "Chamber";
})

gitHubAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "Home";
    finalAnchor.textContent = "Final";
    gitHubAnchor.textContent = "📍 GitHub Profile";
    linkedInAnchor.textContent = "LinkedIn";
    chamberAnchor.textContent = "Chamber";
})

linkedInAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "Home";
    finalAnchor.textContent = "Final";
    gitHubAnchor.textContent = "GitHub Profile";
    linkedInAnchor.textContent = "📍 LinkedIn";
    chamberAnchor.textContent = "Chamber";
})

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

createCourseCard(courses);

function createCourseCard(courses) {
    courseContainer.innerHTML = "";
    displayTotalCredits.textContent = "";
    totalCredit = 0;
    courses.forEach(course => {    
        let list = document.createElement("li");
        list.textContent = `${course.subject} ${course.number}`;        
        totalCredit += course.credits;
        displayTotalCredits.innerHTML = `The total number of credits of the courses listed below is: <span class="credits-color">${totalCredit}</span>`;
        
        if (course.completed == true) {
            list.style.backgroundColor = "#4e1805";
            list.style.color = "#f5f5f5"
        } else {
            list.style.backgroundColor = " #ccc";
            list.style.color = "#000"
        }

        list.addEventListener('click', () => {
            displayCourseDetails(course);
          });
          
       courseContainer.appendChild(list);
    })
}

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    closeModal.addEventListener("click", () => {
      courseDetails.close();
    });
  }
