const intro = document.querySelector(".intro")

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY
  console.log(scrolled)

  if (scrolled >= '1000') {
    intro.style.color = 'blue'
  }
})