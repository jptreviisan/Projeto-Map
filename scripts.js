const list = document.querySelector('ul')
let myLi = ''
const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function showAll(productsArray) {
    myLi = ''
    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R${product.price}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function sumAllItens() {
    const totalPrices = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `        
    <li>
            <p>O valor total dos itens é R$ ${totalPrices}</p>
        </li>`
}

function filterAllItens(){
    const newVegan = menuOptions.filter((number) => number.vegan)

    showAll(newVegan)
}

buttonMapAll.addEventListener('click', mapAllItens)
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItens)