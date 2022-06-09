const intro = document.querySelector(".intro")
const button = document.querySelector("button")
const introBio1 = document.querySelector(".introBio1")
const introBio2 = document.querySelector(".introBio2")

window.addEventListener('scroll', function() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  console.log(scrollHeight, 'height')

  const scrolled = window.scrollY
  console.log(scrolled)

  if (scrolled >= 1000 && scrolled <= 1300) {
    let scroll = 0.8*(scrolled-1000)
    intro.style.fontSize = `${scroll}px`
  }

  const scroll1 = window.scrollY - 2700
  introBio1.style.left = `${scroll1}px`
  introBio2.style.right = `${scroll1}px`

  
  const smallWindowSize = window.matchMedia("(max-width: 600px")

    if (smallWindowSize.matches) {
      if (scrolled >= 1000 && scrolled <= 1300) {
        let scroll = 0.4*(scrolled-1000)
        intro.style.fontSize = `${scroll}px`
      }

      // const scroll1 = window.scrollY - 2700
      // introBio1.style.left = `${scroll1}px`
      // introBio2.style.right = `${scroll1}px`
    }

})

button.addEventListener('click', function() {
  window.scrollTo(0,0)
})
