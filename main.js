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
// 2 vowels, 4 consonants
function randomizeLetters(){
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
// 


randomizeLetters()