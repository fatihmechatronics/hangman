import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*
//import uuidv4 from `uuid/v4`
//import validator from `validator`
import Hangman from `./scriptHangman.js` //export { Hangman as default }
import getPuzzle from `./requestsHangman.js`
//console.log(uuidv4())
//console.log(validator.isEmail(`andrew@mead.com`))


const puzzleEl = document.querySelector(`#puzzle`)
const guessesEl = document.querySelector(`#guesses`)
//const game1 = new Hangman(`Car Parts`, 2)
let game1
//puzzleEl.textContent = game1.puzzle
//guessesEl.textContent = game1.statusMessage

window.addEventListener(`keypress`, function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = function () {
  //puzzleEl.textContent = game1.puzzle
  puzzleEl.innerHTML = ``
  guessesEl.textContent = game1.statusMessage

  //game1.puzzle => `*** co**`
  game1.puzzle.split(``).forEach(function (letter) {
    const letterEl = document.createElement(`span`)
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async function () {
  const puzzle = await getPuzzle(`2`) //Fetching the puzzle
  game1 = new Hangman(puzzle, 5) //5 is totalGuesses. Creating the new game
  render() //Rendering the instance to the browser
}

document.querySelector(`#reset`).addEventListener(`click`, startGame)
//startGame() function will be called when the reset button is clicked

startGame()
*/