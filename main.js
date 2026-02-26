"use strict";

const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("global-nav");

toggle.addEventListener("click", () => {

  nav.classList.toggle("is-open");

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("is-visible");

    }

  });

});

reveals.forEach((el) => observer.observe(el));
