
 
    const inputs = document.querySelectorAll(".code");

    // Auto focus first input
    inputs[0].focus();

    inputs.forEach((input, index) => {

      // Forward typing
      input.addEventListener("input", (e) => {
        let value = e.target.value;

        // Allow digits only
        e.target.value = value.replace(/[^0-9]/g, "");

        if (e.target.value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Backspace behavior
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

          if (input.value === "" && index > 0) {
            inputs[index - 1].value = "";
            inputs[index - 1].focus();
          }
        }
      });
    });


    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
            document.querySelector(`.code:nth-child(${index})`).focus();
        }
    });
});