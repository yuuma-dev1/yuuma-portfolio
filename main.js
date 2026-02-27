"use strict";



const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("global-nav");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.classList.toggle("is-open");

  });

}


const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

      }

    });

  });

  reveals.forEach((el) => observer.observe(el));

} else {

  // 古いブラウザ用フォールバック
  reveals.forEach((el) => el.classList.add("is-visible"));

}


const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

}

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

      localStorage.setItem("theme", "dark");

    } else {

      localStorage.setItem("theme", "light");

    }

  });

}



const links = document.querySelectorAll(".nav-link");

const current = location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {

  if (link.getAttribute("href") === current) {

    link.classList.add("is-current");

  }

});
