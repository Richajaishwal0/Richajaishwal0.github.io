// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar on Scroll
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize first slide as active
showSlide(currentSlide);
// Example of dynamically animating circular progress bars (optional)

const circularProgressBars = document.querySelectorAll('.outer');

circularProgressBars.forEach((bar, index) => {
    let percentage = parseInt(bar.textContent);
    let progress = 0;
    let timer = setInterval(() => {
        if (progress >= percentage) clearInterval(timer);
        bar.style.background = `conic-gradient(#00ffff ${progress}%, #0a192f ${progress}%)`;
        progress++;
    }, 20);  // Increase the value smoothly
});

function showSkills(skillType) {
    let skills = {
        languages: "Languages: Python, Java, C, HTML, CSS, JavaScript",
        frameworks: "Frameworks: Django, Pandas, NumPy, Matplotlib",
        databases: "Databases: MySQL, PostgreSQL, MongoDB (Basic)",
        tools: "Tools: Git, GitHub, VS Code, PyCharm, IntelliJ, Jupyter, Colab, Kaggle, Arduino",
        'problem-solving': "Problem Solving: 5-star on HackerRank (Python, Java), LeetCode"
    };
    document.getElementById("popup-content").innerText = skills[skillType];
    document.getElementById("skills-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("skills-popup").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    const aboutText = "I'm Richa Jaishwal, a highly driven Computer Science enthusiast with a passion for technology...";
    let index = 0;
    
    function type() {
        if (index < aboutText.length) {
            document.getElementById("about-text").textContent += aboutText.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in ms)
        }
    }
    
    type();
});

// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
