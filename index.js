// adding some functionality to my navigation bar so that whennthe button is clicked the nav bar slides out
// once the nav bar slides out the back page goes dim
function toggleNav() {
  document.querySelector(".side-nav").classList.toggle("active");
  document.querySelector(".blur").classList.toggle("blurr");
}

document.getElementById("toggle").addEventListener("click", () => {
  toggleNav();
});

document.querySelector(".closebtn").addEventListener("click", () => {
  toggleNav();
});
document.querySelector;
