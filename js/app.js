const intro = document.querySelector(".intro")

window.addEventListener('scroll', function() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  console.log(scrollHeight, 'height')

  const scrolled = window.scrollY
  console.log(scrolled)

  if (scrolled >= 800 && scrolled <= 1100) {
    let scroll = 0.6*(scrolled-800)
    intro.style.fontSize = `${scroll}px`
  }
})

// intro.style.fontSize = "25px"