// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

const container = document.querySelector('#container')
//console.log(container)

const h1 = document.createElement('h1')
//console.log(h1)
h1.innerText = 'welcome to hogwarts!'
document.body.appendChild(h1)

const h2 = document.createElement('h2')
h2.innerText = 'salima harun'
document.body.appendChild(h2)

const h3 = document.createElement('h3')
h3.innerText = 'slytherin'
document.body.appendChild(h3)

const h4pet = document.createElement('h4')
h4pet.innerText = 'kenma'
h4pet.classList.add('cat')
//console.log(h4pet)
document.body.appendChild(h4pet)

const h4wand = document.createElement('h4')
h4wand.innerText = 'hawthorn wand with dragon heartstring core'
//console.log(h4wand)
document.body.appendChild(h4wand)