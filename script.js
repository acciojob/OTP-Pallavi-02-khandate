//your JS code here. If required.


const inputs = document.querySelectorAll(".code");

// Focus first box on load
inputs[0].focus();

inputs.forEach((input, index) => {

  // Move forward when typing
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Move backward on backspace
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });

});

