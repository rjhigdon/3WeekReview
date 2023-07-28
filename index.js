console.log('connected 😊')

const list = document.getElementById('hobby-list')
const form = document.getElementById('hobby-form')
const input = document.getElementById('hobby-input')
const sleepBtn = document.getElementById('sleep')
const eatBtn = document.getElementById('eat')
const drinkBtn = document.getElementById('drink')
const sleepNum = document.getElementById('sleep-number')
const eatNum = document.getElementById('eat-number')
const drinkNum = document.getElementById('drink-number')

const addDrink = () => {
    let current = +drinkNum.textContent 
    drinkNum.textContent = current + 8
    /*the + turns it into a numerical value*/
}
const addFood = () => {
    let current = +eatNum.textContent 
    eatNum.textContent = current + 500
    /*the + turns it into a numerical value*/
}
const goToBed = () => {
    if(+drinkNum >= 60){
    drinkNum.textContent = '0'
    eatNum.textContent = '0'
    let current = +sleepNum.textContent 
    sleepNum.textContent = current + 1
    /*the + turns it into a numerical value*/
    }else{
        alert("can't go to bed. Need More Water!")
    }
    
    
}


const handleSubmit = (event) =>{
    event.preventDefault() 
    let newHobby = input.value
    let newItem = document.createElement('li')
    newItem.textContent = newHobby
    list.appendChild(newItem)  
}

form.addEventListener('submit', handleSubmit)
drinkBtn.addEventListener('click', addDrink)
eatBtn.addEventListener('click', addFood)
