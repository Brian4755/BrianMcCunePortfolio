const intro = document.querySelector(".intro")
const button = document.querySelector("button")
const introBio1 = document.querySelector(".introBio1")
const introBio2 = document.querySelector(".introBio2")

window.addEventListener('scroll', function() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  console.log(scrollHeight, 'height')

  const scrolled = window.scrollY
  console.log(scrolled)

  if (scrolled >= 800 && scrolled <= 1100) {
    let scroll = 0.6*(scrolled-800)
    intro.style.fontSize = `${scroll}px`
  }

  const scroll1 = window.scrollY - 2300
  introBio1.style.left = `${scroll1}px`
  introBio2.style.right = `${scroll1}px`

  // while (scrolled >= 1700 && scrolled <= 2500) {
  //   introBio1.style.position = "fixed"
  // }
})

button.addEventListener('click', function() {
  window.scrollTo(0,0)
})