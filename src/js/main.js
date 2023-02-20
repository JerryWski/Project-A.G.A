const navList = document.querySelector(".navbar__list");
const navLinks = document.querySelectorAll(".navbar__list-item");
const linksSelect = document.querySelectorAll(".links");
const hamburgerBtn = document.querySelector(".hamburger");

const toggleHamburger = () => {
  hamburgerBtn.classList.toggle("is-active");
  navList.classList.toggle("active");
  document.body.classList.toggle("sticky-body");
  handleNavLinksAnimate();
};

const removeSticky = () => {
  document.body.classList.remove("sticky-body");
  navList.classList.remove("active");
  hamburgerBtn.classList.remove("is-active");
};

const handleNavLinksAnimate = () => {
  let delayTime = 0;

  linksSelect.forEach((item) => {
    item.classList.toggle("links--animation");

    item.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

hamburgerBtn.addEventListener("click", toggleHamburger);
navLinks.forEach((links) => {
  links.addEventListener("click", removeSticky);
});
