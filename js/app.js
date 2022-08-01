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

// валидация
const form = document.querySelector(".form");
const input = document.querySelector(".content_userName");
const button = document.querySelector("#nickname");


const validInput = ({target}) => {
    if (target.value.length > 2 && target.value.length < 15) {
        button.removeAttribute('disabled');
        return
    } 
    if (input.value !== '') {
        button.removeAttribute('disabled');
        return
    }

    button.setAttribute("disabled", "");
};

input.addEventListener("input", validInput);

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("player", input.value);
    window.location = "./game.html";
};

// form.addEventListener("submit", handleSubmit);

import Model from "./model";
import View from "./view";
import Controller from "./controller";
//random name

const loadUserName = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].name.last)

    const input = document.querySelector(".content_userName");
    input.value = data.results[0].name.last
    console.log(input.value.length.split(0, 10))

    if(input.value.length > 10) {

    }
    console.log(input.value)
}

document.querySelector('#randomUser').addEventListener('click', loadUserName);



const app = new Controller(new Model(), new View());

app.init();