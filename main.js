"use strict";


// =============================
// ナビ開閉（スマホ用）
// =============================
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("global-nav");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.classList.toggle("is-open");

  });

}


// =============================
// スクロール表示アニメーション
// =============================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("is-visible");

    }

  });

});

reveals.forEach((el) => observer.observe(el));


// =============================
// テーマ切替（保存機能付き）
// =============================
const themeBtn = document.getElementById("theme-toggle");

// 保存されたテーマ読み込み
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

}

// ボタンクリックで切替＋保存
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


// =============================
// 現在ページのナビに下線つける
// =============================
const links = document.querySelectorAll(".nav-link");

const current = location.pathname.split("/").pop();

links.forEach((link) => {

  if (link.getAttribute("href") === current) {

    link.classList.add("is-current");

  }

});
