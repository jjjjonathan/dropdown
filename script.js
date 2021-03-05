function openMenu(event) {
  const icon = event.target;
  const nav = icon.parentElement.parentElement;
  nav.classList.remove("nav-close");
  nav.classList.add("nav-open");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-times", "animate__animated", "animate__bounceIn");
  icon.addEventListener("animationend", () => {
    icon.classList.remove("animate__animated", "animate__bounceIn");
  });

  icon.removeEventListener("click", openMenu);
  icon.addEventListener("click", closeMenu);
}

function closeMenu(event) {
  const icon = event.target;
  const nav = icon.parentElement.parentElement;
  nav.classList.remove("nav-open");
  nav.classList.add("nav-close");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars", "animate__animated", "animate__bounceIn");
  icon.addEventListener("animationend", () => {
    icon.classList.remove("animate__animated", "animate__bounceIn");
  });

  icon.removeEventListener("click", closeMenu);
  icon.addEventListener("click", openMenu);
}

function onload() {
  const navButton = document.getElementById("nav-button");
  const navIcon = document.createElement("i");
  navIcon.classList.add("fas", "fa-bars");
  navButton.appendChild(navIcon);

  navIcon.addEventListener("click", openMenu);
}

document.addEventListener("DOMContentLoaded", onload);
