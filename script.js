//your JS code here. If required.

document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < 5) {
            document.querySelector(`.code:nth-child(${index + 2})`).focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
            document.querySelector(`.code:nth-child(${index})`).focus();
        }
    });
});