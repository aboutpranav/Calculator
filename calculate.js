let screen = document.getElementById('output-screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === 'AC') {
            screenValue = "";
            screen.value = screenValue;

        } else if (buttonText === '=') {
            screen.value = eval(screenValue);

        } else if (buttonText === 'Pow') {
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === 'Sqrt') {
            // buttonText = 0;
            screenValue = Math.sqrt(screenValue);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

function backspace() {
    let number = document.getElementById("output-screen");
    let remove = number.value;

    remove = remove.slice(0, -1);
    screenValue = remove;
    screen.value = screenValue;
}