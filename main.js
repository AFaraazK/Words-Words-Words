const typing = document.querySelector(".typing");
const clearButton = document.querySelector(".clear");
const enterButton = document.querySelector(".submit")
const letterButtons = document.querySelectorAll(".letter")

clearButton.addEventListener('click', e => {
    typing.innerHTML = "";
})

letterButtons.forEach(letter => {
    letter.addEventListener('click', e => {
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

}

function randomizeLetters(){
    const result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    while(result.length < 6){
        let ran = Math.floor(Math.random() * 26);
        let ranA = alphabet.charAt(ran)
        if(!(result.includes(ranA))){
            result.push(ranA);
        }
    }

    // place letters into DOM
    letterButtons.forEach((letter, index) => {
        letter.textContent = String(result[index]).toUpperCase();
    })
}

randomizeLetters()