function openNav() {
  document.getElementById("side-bar").style.width = "500px";
  document.getElementById("toggle").style.position = "static";
  console.log(openNav);
}
function closeNav() {
  document.getElementById("side-bar").style.width = "0";
  document.getElementById("toggle").style.marginRight = "0";
  document.getElementById("toggle").style.position = "relative";
}
