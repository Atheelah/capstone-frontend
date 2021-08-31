function toggleNav() {
  document.querySelector('.side-nav').classList.toggle('active')
  document.querySelector(".blur").classList.toggle("blurr")
}

document.getElementById('toggle').addEventListener('click', () => {
  toggleNav()
})

document.querySelector('.closebtn').addEventListener('click', () => {
  toggleNav()
})
