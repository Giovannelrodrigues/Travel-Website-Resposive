/*========== SHOW MENU ==========*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close')
/*========== MENU SHOW ==========*/
/*========== validade if constant exist==========*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ==========*/
/*========== validade if constant exist==========*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(link => {
    link.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
})

/*========== CHANGE BACKGROUND HEADER==========*/

function scrollHeader(){
    const header= document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*========== SWIPER DISCOVER ==========*/
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    }
});


/*========== VIDEO ==========*/
const videFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video__button-icon')

function playPause(){
    if(videFile.paused){
        //play video
        videFile.play()
        //change icon
        videoIcon.classList.remove('ri-play-line')
        videoIcon.classList.add('ri-pause-line')
    }else{
        videFile.pause()
        //change icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)


function finalVideo(){
    //video end, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
//ended, whe the video ends

videFile.addEventListener('ended', finalVideo)


//scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//dark mode

const $html = document.querySelector('html')
const iconTheme = document.querySelector('.ri-moon-fill')
let cont = 0
iconTheme.addEventListener('click', () =>{
    $html.classList.toggle('dark-mode')
    if(cont % 2 == 0){
        iconTheme.style.color = "hsl(var(--hue-color), 8%, 60%)"
        cont ++
    }else{
        iconTheme.style.color = "hsl(var(--white-color))"
    }
    
}) 