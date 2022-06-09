const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const menuItem = document.querySelectorAll('nav ul li a')

for (const element of menuItem) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

function headerBorder() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function backToTop() {
  const backToTop = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  headerBorder()
})

// SWIPER COROUSEL

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true
})

// SCROLL REVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .text, #about .image,
  #services .header, #services .card,
  #testimonials .header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
