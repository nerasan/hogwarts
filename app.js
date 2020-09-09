// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

const container = document.querySelector('#container')
//console.log(container)

const h1 = document.createElement('h1')
//console.log(h1)
h1.innerText = 'welcome to hogwarts!'
container.appendChild(h1)

const h2 = document.createElement('h2')
h2.innerText = 'salima harun'
container.appendChild(h2)

const h3 = document.createElement('h3')
h3.innerText = 'slytherin'
container.appendChild(h3)

const h4pet = document.createElement('h4')
h4pet.innerText = 'kenma'
h4pet.classList.add('cat')
//console.log(h4pet)
container.appendChild(h4pet)

const h4wand = document.createElement('h4')
h4wand.innerText = 'hawthorn wand with dragon heartstring core'
//console.log(h4wand)
container.appendChild(h4wand)

// YEAR THREE

const ul = document.createElement('ul')
ul.setAttribute('storage', 'trunk')
ul.innerHTML = '<li>butter beer</li><li class="secret">invisibility cloak</li><li class="secret">magic map</li><li class="secret">time turner</li><li class="cat">leash</li><li>bertie bott\'s every flavor [jelly] beans</li>'
console.log(ul)
container.appendChild(ul)