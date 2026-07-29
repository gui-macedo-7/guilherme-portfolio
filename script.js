const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    body.classList.toggle('scroll-disable')
})

// Fechar menu ao clicar no link
const menuLinks = document.querySelectorAll('.menu a')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        body.classList.remove('scroll-disable')
    })
})
