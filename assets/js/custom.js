/*
-------------------------------------------------------------------------
* Template Name    : Landing Page Template     * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : February 2024                                          *
* File Description : Main Js file of the template                       * 
*------------------------------------------------------------------------
*/
//  Window scroll sticky class add
//Menu
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}
window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
});

const menuItems = document.querySelectorAll('.nav-item a');
const sections = document.querySelectorAll('section');

// Function to handle intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        const correspondingNavItem = document.querySelector(`.nav-item a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            correspondingNavItem.classList.add('active');
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Event listener for click on navigation links
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const linksInsideContainer = document.querySelectorAll('li a.active');
        linksInsideContainer.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});