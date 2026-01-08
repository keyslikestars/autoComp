let menu = document.querySelector('#menu-icon');
let sidebar = document.querySelector('.side-navbar');
let content = document.querySelector('.content');

menu.onclick = () =>{
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
}

/* About Section animation */

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  reveals.forEach(el => observer.observe(el));
});

