let btnToggle = document.querySelector('.btn-toggle')
let container = document.querySelector('.container')

btnToggle.onclick = function() {
    container.classList.toggle('active')
}
