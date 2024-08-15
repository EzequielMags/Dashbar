const btnRetorno = document.getElementById('retorno')
const body = document.querySelector('body')

body.onscroll = () => {
    btnRetorno.classList.remove('hidden')
}

btnRetorno.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})