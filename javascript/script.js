var typed = new Typed(".text",{
    strings: ["Web Developer","UI/UX Designer","Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Navbar elements
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.navbar-menu-items a, .mobile-menu-items a');
const logoLink = document.querySelector('.navbar-logo a');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('.footer');

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
navbarToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuClose.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Position the footer correctly
function positionFooter() {
    const activeSection = document.querySelector('section.active');
    if (activeSection) {
        const sectionBottom = activeSection.offsetTop + activeSection.offsetHeight;
        footer.style.marginTop = '0';
        footer.style.position = 'absolute';
        footer.style.top = `${sectionBottom}px`;
    }
}

// Call on page load
window.addEventListener('load', positionFooter);
// Call on window resize
window.addEventListener('resize', positionFooter);

// Function to activate a section
function activateSection(sectionName) {
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to links with matching section
    document.querySelectorAll(`[data-section="${sectionName}"]`).forEach(link => {
        link.classList.add('active');
    });
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.querySelector(`.${sectionName}`);
    if (targetSection) {
        targetSection.classList.add('active');
        setTimeout(positionFooter, 100);
    }
    
    // Close mobile menu
    closeMobileMenu();
}

// Add click event to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionName = this.getAttribute('data-section');
        activateSection(sectionName);
    });
});

// Logo click event
logoLink.addEventListener('click', function(e) {
    e.preventDefault();
    activateSection('home');
});

// Mobile menu CTA button
document.querySelector('.mobile-menu-cta a').addEventListener('click', function(e) {
    e.preventDefault();
    activateSection('contact');
});

// Hire Me button in home section
document.querySelector('.home-detail .btn-sci a[data-section="contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    activateSection('contact');
});

// Resume Section Navigation
const resumeNavBtns = document.querySelectorAll('.resume-nav-btn');
const resumeContents = document.querySelectorAll('.resume-content');

resumeNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        resumeNavBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Hide all content sections
        resumeContents.forEach(content => content.classList.remove('active'));

        // Show the selected content section
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        // Reposition footer after content change
        setTimeout(positionFooter, 100);
    });
});

// Animate skill progress bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 300);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});

// Re-animate skill bars when skills tab is clicked
document.querySelector('[data-target="skills"]').addEventListener('click', animateSkillBars);

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    
    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
    
    // Reposition footer after content change
    setTimeout(positionFooter, 100);
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled')
    } else {
        index = 5;
        arrowRight.classList.add('disabled')
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')
    } else {
        index = 0;
        arrowLeft.classList.add('disabled')
    }

    activePortfolio();
});

// Scroll Up Button Functionality
const scrollUp = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove('active');
    }
});

scrollUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Learn More buttons activate Portfolio section
document.querySelectorAll('.service-btn').forEach(btn => {
btn.addEventListener('click', e => {
e.preventDefault();
const sectionName = btn.getAttribute('data-section');
if (!sectionName) return;

// Hide all sections
document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));

// Show the target section
const targetSection = document.querySelector(`section.${sectionName}`);
if (targetSection) targetSection.classList.add('active');

// Scroll to top of the section
window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
});
});
});
