import "./style.css";

const GregorianYear = new Date().getFullYear();
const HijriYear = Math.round((GregorianYear - 622) * (33 / 32));
const title = document.querySelector("title");
title.innerHTML = `Selamat Hari Raya Idul Fitri ${HijriYear} H`;
const typed = new Typed("#element", {
  strings: [`Selamat Hari Raya Idul Fitri ${HijriYear} H`],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  loop: true,
  showCursor: false,
});
