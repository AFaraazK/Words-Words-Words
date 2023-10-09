const typing = document.querySelector(".typing");
const resetButton = document.querySelector(".reset");
const enterButton = document.querySelector(".submit")
const letterButtons = document.querySelectorAll(".letter")

resetButton.addEventListener('click', e => {
    typing.innerHTML = "";
})

letterButtons.forEach(letter => {
    letter.addEventListener('click', e => {
        let selected = letter.innerHTML;
        alert(`Clicked on ${selected}`);
    })
})

enterButton.addEventListener('click', e => {
    alert("Enter");
})