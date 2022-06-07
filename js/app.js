const intro = document.querySelector(".intro")

window.addEventListener('scroll', function() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  console.log(scrollHeight, 'height')

  const scrolled = window.scrollY
  console.log(scrolled)

  if (scrolled >= 500 && scrolled <= 900) {
    let scroll = 0.7*(scrolled-500)
    intro.style.fontSize = `${scroll}px`
  }
})
