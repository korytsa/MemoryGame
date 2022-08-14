// валидация
const form = document.querySelector(".form");
const input = document.querySelector(".content_userName");
const button = document.querySelector("#nickname");
const randomNickname = document.querySelector('#randomUser');

const validInput = ({
    target
}) => {
    if (target.value.length > 2 && target.value.length < 15) {
        button.removeAttribute('disabled');
        return
    }
   
    button.setAttribute("disabled", "");
};

function triggerInput() {
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    input.dispatchEvent(event);
}

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

    input.value = data.results[0].name.last;
    triggerInput();
    if (input.value !== '') {
        randomNickname.setAttribute('disabled', '');
        return
    } 
}


document.querySelector('#randomUser').addEventListener('click', loadUserName, false);