// Write you code here
import { jsonRecipes } from "./data.js";

const parsedData = JSON.parse(jsonRecipes);

console.log(parsedData);

parsedData.cakes.forEach( cake => {
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.style.width = 18 + 'rem'
    
    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.style.height = 200+'px'
    img.alt = "Card image cap"
    img.src = cake.image;

    const divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = cake.title

    const author = document.createElement('p')
    author.classList.add('card-text')
    author.textContent = cake.author

    const hr = document.createElement('hr')

    const ingredients = document.createElement('p')
    ingredients.classList.add('card-text')
    ingredients.textContent = 'Ingredients: '
    cake.ingredients.forEach( (str,i) => {
        ingredients.textContent += str + (i!==cake.ingredients.length-1 ? ', ' : '')
    } )

    divCard.append(img)
    divCardBody.append(title)
    divCardBody.append(author)
    divCardBody.append(hr)
    divCardBody.append(ingredients)
    divCard.append(divCardBody)

    const section = document.getElementById('cakes')
    section.append(divCard)

});

parsedData.biscuits.forEach( biscuit => {
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.style.width = 18 + 'rem'
    
    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.style.height = 200+'px'
    img.alt = "Card image cap"
    img.src = biscuit.image;

    const divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = biscuit.title

    const author = document.createElement('p')
    author.classList.add('card-text')
    author.textContent = biscuit.author

    const hr = document.createElement('hr')

    const ingredients = document.createElement('p')
    ingredients.classList.add('card-text')
    ingredients.textContent = 'Ingredients: '
    biscuit.ingredients.forEach( (str,i) => {
        ingredients.textContent += str + (i!==biscuit.ingredients.length-1 ? ', ' : '')
    } )

    divCard.append(img)
    divCardBody.append(title)
    divCardBody.append(author)
    divCardBody.append(hr)
    divCardBody.append(ingredients)
    divCard.append(divCardBody)

    const section = document.getElementById('biscuits')
    section.append(divCard)

});


parsedData.bread.forEach( bread => {
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.style.width = 18 + 'rem'
    
    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.style.height = 200+'px'
    img.alt = "Card image cap"
    img.src = bread.image;

    const divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = bread.title

    const author = document.createElement('p')
    author.classList.add('card-text')
    author.textContent = bread.author

    const hr = document.createElement('hr')

    const ingredients = document.createElement('p')
    ingredients.classList.add('card-text')
    ingredients.textContent = 'Ingredients: '
    bread.ingredients.forEach( (str,i) => {
        ingredients.textContent += str + (i!==bread.ingredients.length-1 ? ', ' : '')
    } )

    divCard.append(img)
    divCardBody.append(title)
    divCardBody.append(author)
    divCardBody.append(hr)
    divCardBody.append(ingredients)
    divCard.append(divCardBody)

    const section = document.getElementById('bread')
    section.append(divCard)

});