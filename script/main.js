const nav = document.querySelector("nav");
const movingBar = document.querySelector(".moving-bar");
const links = document.querySelectorAll("nav ul li");

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const linkRect = e.target.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    movingBar.style.width = `${linkRect.width}px`;
    movingBar.style.left = `${linkRect.left - navRect.left}px`;
  });
});

nav.addEventListener("mouseleave", () => {
  movingBar.style.width = "0";
});


const socialLinks = document.querySelectorAll(".icon a");

socialLinks.forEach((link) => {
  link.addEventListener("click", () => {
    alert(`You are visiting ${link.getAttribute("aria-label")}!`);
  });
});


function handleScroll() {
  const images = document.querySelectorAll(".dish-food img");
  images.forEach((img) => {
    const imgPosition = img.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (imgPosition < screenHeight - 100) {
      img.classList.add("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", handleScroll);
window.addEventListener("scroll", handleScroll);


const hiddenElements = document.querySelectorAll(".price-circle3.hidden");

function checkVisibility() {
  hiddenElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight - 50) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    }
  });
}


window.addEventListener("scroll", checkVisibility);


checkVisibility();


window.addEventListener("scroll", function () {
  const chef = document.querySelector(".chef");
  const chefPosition = chef.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;


  if (chefPosition < screenPosition) {
    chef.classList.add("show");
  } else {
    chef.classList.remove("show");
  }
});


