class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

export { Hangman as default }


/* class Hangman {
  constructor(word0, remainingGuesses0) {
    this.word = word0.toLowerCase().split(``)
    this.remainingGuesses = remainingGuesses0
    this.guessedLetters = []
    this.status = `playing`
  }

  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter) || letter === ` `
    }) //return this.guessedLetters.includes(letter) 
    if (this.remainingGuesses === 0) {
      this.status = `failed`
    } else if (finished) {
      this.status = `finished`
    } else {
      this.status = `playing`
    }
  }

  get statusMessage() { //REMEMBER THAT THE NAME FOR THE METHOD NEEDS TO MATCH WITH THE PROPERTY!
    if (this.status === `playing`) {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === `failed`) {
      return `Nice try! The word was "${this.word.join(``)}".`
    } else {
      return `Great work! You guessed the work.`
    }
  }

  get puzzle() {
    let puzzle = ``
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ` `) {
        puzzle += letter
      } else {
        puzzle += `*`
      }
    })
    return puzzle
  }

  makeGuess(guess) { //Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (this.status !== `playing`) {
      return
    }//If the status is playing, the below code will run.
    if (isUnique) {
      //this.guessedLetters.push(guess)
      this.guessedLetters = [...this.guessedLetters, guess]
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses = this.remainingGuesses - 1
    }
    this.calculateStatus(0)
  }
}

export { Hangman as default } */