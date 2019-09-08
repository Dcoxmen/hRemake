const words = ['Awkward','Bagpipes','Banjo','Bungler','Croquet', 'Crypt','Dwarves','Fervid','Fishhook','Fjord','Gazebo', 'Gypsy', 'Haiku','Haphazard', 'Hyphen','Ivory', 'Jazzy', 'Jiffy', 'Jinx','Jukebox', 'Kayak','Kiosk','Klutz','Memento','Mystify', 'Numbskull','Ostracize', 'Oxygen','Pajama','Phlegm','Pixel', 'Polka', 'Quad','Quip', 'Rhythmic', 'Rogue', 'Sphinx', 'Squawk', 'Swivel', 'Toady', 'Twelfth', 'Unzip', 'Waxy', 'Wildebeest', 'Yacht', 'Zealous', 'Zigzag', 'Zippy',' Zombie']

//Gets random word from array
const getRandWord = function () {
    return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

let wins = 0
let losses = 0 
let guesses = 10
const lettersGuessed = []
let word = getRandWord()


// displays blank on page
const displayWord = function (chosen) {
    let wordStr = ''
    word.split('').forEach(function (letter) {
        if (letter === chosen || lettersGuessed.indexOf(letter) !== -1) {
            wordStr += `${letter} `
        } else{
            wordStr += '_ '
        }
    })
    document.getElementById('word').textContent = wordStr
}

//letter guessed by user
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.key <= 90) {
     if (word.includes(event.key)) {
         lettersGuessed.push(event.key)
         displayWord(event.key)
     }
    }
    
}