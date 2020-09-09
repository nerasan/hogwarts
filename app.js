// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

// YEAR ONE 

const container = document.querySelector('#container')
//console.log(container)

const h1 = document.createElement('h1')
//console.log(h1)
h1.innerText = 'welcome to hogwarts!'
container.appendChild(h1)

// YEAR TWO

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
// ul.innerHTML = '<li>butter beer</li><li class="secret">invisibility cloak</li><li class="secret">magic map</li><li class="secret">time turner</li><li class="cat">leash</li><li>bertie bott\'s every flavor [jelly] beans</li>'
//console.log(ul)
container.appendChild(ul)

const li1 = document.createElement('li')
li1.innerText = 'butter beer'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.classList.add('secret')
li2.innerText = 'invisibility cloak'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.classList.add('secret')
li3.innerText = 'magic map'
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.classList.add('secret')
li4.innerText = 'time turner'
ul.appendChild(li4)

const li5 = document.createElement('li')
li5.classList.add('cat')
li5.innerText = 'leash'
ul.appendChild(li5)

const li6 = document.createElement('li')
li6.innerText = 'bertie bott\'s every flavor [jelly] beans'
ul.appendChild(li6)

// YEAR FOUR

const table = document.createElement('table')
container.appendChild(table)

const h5 = document.createElement('h5')
h5.innerText = 'spring 2017'
container.insertBefore(h5, table)

const thead = document.createElement('thead')
table.appendChild(thead)

    const thday = document.createElement('th')
    thday.innerText = 'day'
    thead.appendChild(thday)

    const thclasses = document.createElement('th')
    thclasses.innerText = 'classes'
    thead.appendChild(thclasses)

const tr1 = document.createElement('tr')
table.appendChild(tr1)

    const tdmonday = document.createElement('td')
    tdmonday.innerText = 'monday'
    tr1.appendChild(tdmonday)

    const tdmondayclass = document.createElement('td')
    tdmondayclass.innerText = 'herbology, charms, potions'
    tr1.appendChild(tdmondayclass)

const tr2 = document.createElement('tr')
table.appendChild(tr2)

    const tdtuesday = document.createElement('td')
    tdtuesday.innerText = 'tuesday'
    tr2.appendChild(tdtuesday)

    const tdtuesdayclass = document.createElement('td')
    tdtuesdayclass.innerText = 'defense against the dark arts, quidditch practice'
    tr2.appendChild(tdtuesdayclass)

const tr3 = document.createElement('tr')
table.appendChild(tr3)

    const tdwednesday = document.createElement('td')
    tdwednesday.innerText = 'wednesday'
    tr3.appendChild(tdwednesday)

    const tdwednesdayclass = document.createElement('td')
    tdwednesdayclass.innerText = 'history of magic, divination, transfiguration'
    tr3.appendChild(tdwednesdayclass)

const tr4 = document.createElement('tr')
table.appendChild(tr4)

    const tdthursday = document.createElement('td')
    tdthursday.innerText = 'thursday'
    tr4.appendChild(tdthursday)

    const tdthursdayclass = document.createElement('td')
    tdthursdayclass.innerText = 'defense against the dark arts, quidditch practice'
    tr4.appendChild(tdthursdayclass)

const tr5 = document.createElement('tr')
table.appendChild(tr5)

    const tdfriday = document.createElement('td')
    tdfriday.innerText = 'friday'
    tr5.appendChild(tdfriday)

    const tdfridayclass = document.createElement('td')
    tdfridayclass.innerText = 'astronomy, muggle studies, care of magical creatures'
    tr5.appendChild(tdfridayclass)

// YEAR FIVE

h4wand.remove() // select element containing wand and remove
li1.remove() // remove butter beet from list
container.insertBefore(h4wand, ul) // adding element containing wand back after pet name
h4wand.innerText = 'hawthorn wand with unicorn hair core' // new text describing new wand
h4wand.style.color = 'gold'
container.appendChild(h4pet) // moving pet to the bottom of the page
h4pet.remove() // removing pet from DOM
container.insertBefore(h4pet, h4wand) // moved aka re-inserted pet to original location before wand

// YEAR SIX 

// hide belongings with class of secret
const secret = document.getElementsByClassName('secret')
//console.log(secret)
secret[0].style.opacity = '0'
secret[1].style.opacity = '0'
secret[2].style.opacity = '0'

// show secret belongings after 2 seconds using setTimeout 
const reappear = () => {
    setTimeout(function(){ 
        secret[0].style.opacity = '0.5'
        secret[1].style.opacity = '0.5'
        secret[2].style.opacity = '0.5'
    }, 3000)
}

reappear()

// adding class cabbage to pet's leash 
li5.classList.add('cabbage')

// removing class cabbage and keeping it to cat
li5.classList.remove('cabbage')
//console.log(li5)
//console.log(h4pet)

// YEAR SEVEN
h5.innerText = 'fall 2018' // update class schedule to fall 2018

// buy more butter beer
const li7 = document.createElement('li')
li7.innerText = 'butter beer'
ul.insertBefore(li7, li2)

// replace ul property from trunk to chest
ul.setAttribute('storage', 'chest')