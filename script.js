
function openNavbar() {
    document.getElementById("sideNavigationBar").classList.add("open");
  
    document.body.style.overflow = "hidden";
}


function closeNavbar() {
    document.getElementById("sideNavigationBar").classList.remove("open");
    
    document.body.style.overflow = "auto";
}


function handleScroll() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

function highlightActiveLink() {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
}

window.addEventListener("scroll", function() {
    handleScroll();
    highlightActiveLink();
});


window.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sideNavigationBar");
    const menuButton = document.querySelector(".sideMenuButton");
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("open");
        document.body.style.overflow = "auto";
    }
});
