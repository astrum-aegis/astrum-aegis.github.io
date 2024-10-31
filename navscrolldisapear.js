function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(30,30,46,.95)";
  var element = document.getElementById("menu");
  element.classList.toggle("hidden");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "var(--ctp-mocha-base)";
  var element = document.getElementById("menu");
  element.classList.toggle("shown");
}
