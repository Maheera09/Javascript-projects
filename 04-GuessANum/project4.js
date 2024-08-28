let randonNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.guesses')
const lastresult = document.querySelector('.lastresult')
const lowOrHi = document.querySelector('.lowOrHi')
const Startover = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevguess = []
let numguesses = 1
let playGame = true

if (playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(randonNum);
    validateguess(guess);
    })
}

function validateguess(guess){
    //checks if the vlaue is a number and not less than 1
    if (isNaN(guess)){
        alert('Please, enter valid number.')
    } else if (guess<1){
        alert('Please, enter valid number.')
    } else if (guess>100){
        alert('Please, enter a number less than 100.')
    } else {
        prevguess.push(guess)
        if (numguesses === 11){
            displayGuess(guess)
            displayMSG(`Game Over. Random Number was ${randonNum}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess (guess){
    //check if the value is low or high or equal
    if (guess===randonNum){
        displayMSG(`You guessed right!`)
        endGame()
    } else if (guess>randonNum){
        displayMSG("Your guess is greater than Random number")
    } else if (guess<randonNum){
        displayMSG("Your guess is less than Random number")
    }
}

function displayMSG(msg){
    //this method interacts with DOM directly
    lowOrHi.innerHTML = `<h3>${msg}</h3>`
}

function displayGuess(guess){
userInput.value=''
guessSlot.innerHTML+=`${guess} `
numguesses++
lastresult.innerHTML = `${11-numguesses}`
}

function newGame(){
const newgamebtn = document.querySelector('#newgame')
newgamebtn.addEventListener('click', function(e){
    randonNum = parseInt(Math.random() * 100 + 1);
    prevguess=[]
    numguesses=1
    guessSlot.innerHTML=''
    lastresult.innerHTML = `${11-numguesses}`
    userInput.removeAttribute('disabled')
    Startover.removeChild(p)
    lowOrHi.innerHTML=''
    playGame = true
})
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h4 id='newgame'>Start new game</h4>`;
Startover.appendChild(p)
playGame = false
newGame()
}