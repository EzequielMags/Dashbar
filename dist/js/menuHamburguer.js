const menuLateral = document.getElementById('menu-lateral')
const btnMenuHamburgher = document.getElementById('btn-menuHamburguer')
const conteudoMenuLateralCelular = document.getElementById('menu-lateral-celular')
const principal = document.querySelector('.principal')

btnMenuHamburgher.addEventListener('click', (event) => {
    event.preventDefault()

    if(menuLateral.classList.contains('ativo')){
        menuLateral.setAttribute('class', 'menu-lateral esconder')
        conteudoMenuLateralCelular.setAttribute('class', 'menu-lateral__lista-celular esconder-conteudo')
        principal.setAttribute('class', 'principal ')
    }   else{
        menuLateral.setAttribute('class', 'menu-lateral ativo')
        conteudoMenuLateralCelular.setAttribute('class', 'menu-lateral__lista-celular ativo-conteudo')
        principal.setAttribute('class', 'principal hidden')
    }
})