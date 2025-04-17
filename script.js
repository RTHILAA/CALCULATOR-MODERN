let buttons = document.querySelector('.buttons');
let display = document.querySelector('#display');

buttons.addEventListener('click', (event) => {
    let target = event.target;
    if (!target.matches('button')) return;

    if (target.classList.contains('equal')) {
        try {
            let result = eval(display.value);
            display.value = result;
        } catch (error) {
            alert('You have an error, I will remove your operation');
            display.value = '';
        }
    }
    else if (target.classList.contains('clear')) {
        display.value = '';
    }
    else {
        display.value += target.value;
    }
});
