const home = document.querySelectorAll('#home')
const projects = document.querySelectorAll('#projects')
const articles = document.querySelectorAll('#articles')
const products = document.querySelectorAll('#products')

home.forEach((event) => {
    event.addEventListener('click', () => {
        window.location.href = "/dist/home.html"
    })
})

projects.forEach((event) => {
    event.addEventListener('click', () => {
        window.location.href = "/dist/projects.html"; 
    })
})

articles.forEach((event) => {
    event.addEventListener('click', () => {
        window.location.href = "/dist/articles.html"
    })
})


products.forEach((event) => {
    event.addEventListener('click', () => {
        window.location.href = "/dist/products.html"
    })
})