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


document.addEventListener("DOMContentLoaded", function() {
  var tabList = document.querySelectorAll("ul.tabs li");

  tabList.forEach(function(tab) {
    tab.addEventListener("click", function() {
      var tab_id = this.getAttribute("data-tab");

      tabList.forEach(function(tab) {
        tab.classList.remove("current");
      });

      var tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach(function(content) {
        content.classList.remove("current");
      });

      this.classList.add("current");
      document.getElementById(tab_id).classList.add("current");
    });
  });
});

