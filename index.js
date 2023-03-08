const quantityArrow = document.querySelectorAll('.arrow')
const perfils = document.querySelector('#perfils')
const range = document.querySelector('input[type="range"]')
const mensal = document.querySelector('.mensal')
const anual = document.querySelector('.anual')
const price = document.querySelector('#price')

// perfil quantity handlers
quantityArrow.forEach(arrow => arrow.addEventListener('click', event => {
    const side = event.target.id

    if (side === 'right') {
        range.value = parseInt(perfils.innerHTML) + 1
        if (perfils.innerHTML !== '10') {
            perfils.innerHTML = parseInt(perfils.innerHTML) + 1
        }
    } else {
        range.value = parseInt(perfils.innerHTML) - 1
        if (perfils.innerHTML !== '1') {
            perfils.innerHTML = parseInt(perfils.innerHTML) - 1    
        }
    }
    priceHandler() 
}))

range.addEventListener('input', () => {
    perfils.innerHTML = range.value
    priceHandler()
})

// period handler
mensal.addEventListener('click', () => {
    mensal.classList.add('active')
    if (anual.classList.contains('active')) {
        anual.classList.remove('active')
    }
    priceHandler()
})

anual.addEventListener('click', () => {
    anual.classList.add('active')
    if (mensal.classList.contains('active')) {
        mensal.classList.remove('active')
    }
    priceHandler()
})

function priceHandler() {
    if (mensal.classList.contains('active')) {
        price.innerHTML = `R$${((246.41 * parseInt(perfils.innerHTML))).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
    }
    if (anual.classList.contains('active')) {
        price.innerHTML = `R$${(Math.round((246.41 * parseInt(perfils.innerHTML) * 12) * 100) / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
    }
}
