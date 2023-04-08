const header = document.querySelector('header')
const button = document.querySelectorAll('.button')
const h1 = document.querySelectorAll('h1')



h1.forEach(title => {
    button.forEach(btn => {
        btn.classList.remove('active')
        if (btn.classList.contains('main-btn')) {
            return
        } else if (title.classList.contains('about') && btn.classList.contains('about-btn')) {
            btn.classList.add('active')
        } else if (title.classList.contains('portfolio') && btn.classList.contains('portfolio-btn')) {
            btn.classList.add('active')
        } else if (title.classList.contains('contact') && btn.classList.contains('contact-btn')) {
            btn.classList.add('active')
        }

    })
})