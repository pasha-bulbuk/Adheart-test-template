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

document.addEventListener("DOMContentLoaded", function() {
  var choiceList = document.querySelectorAll("ul.choice li");

  choiceList.forEach(function(choice) {
    choice.addEventListener("click", function() {
      var choice_id = this.getAttribute("data-choice");

      choiceList.forEach(function(choice) {
        choice.classList.remove("current");
      });

      this.classList.add("current");
      document.getElementById(choice_id).classList.add("current");
    });
  });
});




