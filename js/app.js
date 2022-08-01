// document.addEventListener('DOMContentLoaded', () => {
//     const selectors = {
//        
//     }

//     const state = {
//         gameStarted: false,
//         flippedCards: 0,
//         totalFlips: 0,
//         totalTime: 0,
//         loop: null
//     }







//     sortArray(allCards);
//     gameBoard(allCards);
// })

// // валидация
// const form = document.querySelector(".form");
// const input = document.querySelector(".content_userName");
// const button = document.querySelector(".content_btnPlay");


// const validInput = ({
//     target
// }) => {
//     if (target.value.length > 2 && target.value.length < 10) {
//         button.removeAttribute('disabled');
//         return
//     }

//     button.setAttribute("disabled", "");
// };

// input.addEventListener("input", validInput);

// const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("player", input.value);
//     window.location = "./game.html";
// };

// form.addEventListener("submit", handleSubmit);


const app = new Controller(new Model(), new View());

app.init();