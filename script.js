// Seleciona elementos
let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

// Alterna classes para abrir/fechar o menu
menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

// Fecha o menu ao rolar a página
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
})