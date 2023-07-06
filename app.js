document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("main").classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("languague").addEventListener("click", function () {
    document.querySelector("languague").classList.toggle("open2");
  });
});
