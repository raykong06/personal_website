let aboutMeNav = document.getElementById("about");
let educationNav = document.getElementById("education");
let achievementsNav = document.getElementById("achievements");
let projectsNav = document.getElementById("projects");
let contactNav = document.getElementById("contact");

let title = document.querySelector("title");

aboutMeNav.addEventListener("mouseover", (event) => {
    aboutMeNav.style.textDecoration = "underline"; 
});

aboutMeNav.addEventListener("mouseout", (event) => {
    aboutMeNav.style.textDecoration = "none"; 
});

educationNav.addEventListener("mouseover", (event) => {
    educationNav.style.textDecoration = "underline"; 
});

educationNav.addEventListener("mouseout", (event) => {
    educationNav.style.textDecoration = "none"; 
});

achievementsNav.addEventListener("mouseover", (event) => {
    achievementsNav.style.textDecoration = "underline"; 
});

achievementsNav.addEventListener("mouseout", (event) => {
    achievementsNav.style.textDecoration = "none"; 
});

projectsNav.addEventListener("mouseover", (event) => {
    projectsNav.style.textDecoration = "underline"; 
});

projectsNav.addEventListener("mouseout", (event) => {
    projectsNav.style.textDecoration = "none"; 
});

contactNav.addEventListener("mouseover", (event) => {
    contactNav.style.textDecoration = "underline"; 
});

contactNav.addEventListener("mouseout", (event) => {
    contactNav.style.textDecoration = "none"; 
});

if (title.innerHTML == "About Me")
{
    aboutMeNav.style.color = "rgb(250, 206, 110)";
}
if (title.innerHTML == "Education")
{
    educationNav.style.color = "rgb(250, 206, 110)";
}
if (title.innerHTML == "Achievements")
{
    achievementsNav.style.color = "rgb(250, 206, 110)";
}
if (title.innerHTML == "Projects")
{
    projectsNav.style.color = "rgb(250, 206, 110)";
}
if (title.innerHTML == "Contact")
{
    contactNav.style.color = "rgb(250, 206, 110)";
}