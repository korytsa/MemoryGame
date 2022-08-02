// валидация
const form = document.querySelector(".form");
const input = document.querySelector(".content_userName");
const button = document.querySelector("#nickname");


const validInput = ({
    target
}) => {
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

// function triggerInput() {
//     var event = new Event('input', {
//         'bubbles': true,
//         'cancelable': true
//     });

//     input.dispatchEvent(event);
// }

input.addEventListener("input", validInput, false);

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("player", input.value);
    window.location = "./game.html";
};

form.addEventListener("submit", handleSubmit, false);

//random name

const loadUserName = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const input = document.querySelector(".content_userName");
    // const eventInput = new CustomEvent('change', {
    //     bubbles: true
    // });
    // input.dispatchEvent(eventInput);
    // const form = document.querySelector(".form");
    // const eventForm = new Event('submit', {
    //     bubbles: true
    // });
    // form.dispatchEvent(eventForm);
    // const button = document.querySelector("#nickname");
    // const eventButton = new Event('click', {
    //     bubbles: true
    // });
    // button.dispatchEvent(eventButton);
    
    input.value = data.results[0].name.last;
}


document.querySelector('#randomUser').addEventListener('click', loadUserName, false);