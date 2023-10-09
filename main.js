const typing = document.querySelector(".typing");
const clearButton = document.querySelector(".clear");
const enterButton = document.querySelector(".submit")
const letterButtons = document.querySelectorAll(".letter")

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
    alert("Enter");
})

function submit(){
    // read the typing panel
    // check if it's a valid word, if so add it to the previous panel, points++
    // reset the typing display 
}
function randomizeLetters(){
    // select 6 random letters without replacement, at least one vowel 
    const result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    while(result.length < 5){
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
    // read the word array
    // select the valid ones -> first trim by first letter -> then look for usability
}
// validate word function
function validateWord(){

    return true;
}
// initialize page
function start(){
    randomizeLetters()
    // create word list
}

start();