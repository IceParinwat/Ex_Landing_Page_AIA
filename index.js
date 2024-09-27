const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav-link')
const navLinkLi = document.querySelectorAll('.nav-link li')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})
// HamburgerMenu
hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})
// navLink
navLinkLi.forEach(li => li.addEventListener('click',()=> {
    navLinkLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinkLi.classList.remove('active')
}))

//slideTextJs
var typed = new Typed('#slide-text', {
    strings: 
    [
    'ตัวแทนประกันสุขภาพ ',
     'ประกันชีวิตออนไลน์'
    ],
    typeSpeed: 60,
    loop: true,
    loopCount: Infinity,
  });