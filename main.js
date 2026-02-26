"use strict";

const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("global-nav");

toggle.addEventListener("click", () => {

  nav.classList.toggle("is-open");

});
