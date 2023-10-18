const typing = document.querySelector(".typing");
const clearButton = document.querySelector(".clear");
const enterButton = document.querySelector(".submit");
const letterButtons = document.querySelectorAll(".letter");
const previous = document.querySelector(".previous");
const keyHover = document.querySelector(".keyHover");
const keyButton = document.querySelector(".keyButton");
const point_display = document.querySelector(".pointsDisplay")
const keyPanel = document.querySelector(".keyPanel");

// TODO: stop repeat word entries: make previous an array and compare

clearButton.addEventListener('click', e => {
    typing.innerHTML = "";
    // CLEAR PREVIOUS WORD SECTION
})
letterButtons.forEach(letter => {
    letter.addEventListener('click', e => {
        // add clicked letter to the display, if under 7 characters
        let current_display = typing.textContent;
        let selected = letter.textContent;
        let updated = typing.textContent + selected; 
        if(updated.length < 7){
            typing.textContent = updated;
        }
    })
})
enterButton.addEventListener('click', e => {
    if(validateEntry(typing.textContent.toLowerCase())){
        previous.textContent = previous.textContent + typing.textContent.toLowerCase() + ' ';
        point_value += typing.textContent.length;
        point_display.textContent = point_value;
    }
    typing.textContent = '';
})
function randomizeLetters(){
    // select 6 random letters without replacement, at least one vowel 
    const result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    while(result.length < 4){
        let ran = Math.floor(Math.random() * 26);
        let ranA = alphabet.charAt(ran)
        if(!(result.includes(ranA))){
            result.push(ranA);
        }
    }
    while(result.length < 6){
        let ranN = Math.floor(Math.random() * 5);
        let ranV = vowels.charAt(ranN)
        if(!(result.includes(ranV))){
            result.push(ranV);
        }
    }
    // place letters into DOM
    letterButtons.forEach((letter, index) => {
        letter.textContent = String(result[index]).toUpperCase();
    })
}

// create an array of possible words, base on first letter (can only be one of the six)
function createWordList(){
    // select the valid ones -> first trim by first letter -> then look for usability
    let game_letters = [];
    letterButtons.forEach(letter => {
        game_letters.push(letter.textContent.toLowerCase());
    })
    dictionary.forEach(word => {
        // console.log(word);
        if(_validateWord(word)){
            valid_words.push(word);
        }
    })
}
// HELPER: createWorldList - validate word function
function _validateWord(word){
    let game_letters = [];
    letterButtons.forEach(letter => {
        game_letters.push(letter.textContent.toLowerCase());
    })
    const allowedLetter = new Set(game_letters);
    for(let i = 0;i<word.length;i++){
        if(!allowedLetter.has(word[i])){
            return false;
        }
    }
    return true;
}
// Validate word in the game
function validateEntry(word){
    if(valid_words.includes(word)){
        return true;
    }
    return false;
}
// initialize page
function start(){
    randomizeLetters();
    createWordList();
}
function keyReveal(){
    if(keyPanel.textContent.length > 0){
        keyPanel.textContent = '';
        return;
    }
    key = '';
    for(let i = 0; i<valid_words.length; i++){
        key = key + " " + valid_words[i];
    }
    keyPanel.textContent = key;
}
function next(){
    window.location.reload("Refresh");
}

let point_value = 0; 
let valid_words = [];
start();