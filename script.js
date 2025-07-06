<script>
    const display = document.getElementById("box");
    const buttons = document.getElementById("buttons");
  
    let currentInput = "";
  
    buttons.addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON") return; // Only respond to buttons
  
      const btn = event.target.textContent;
  
      if (btn === "DEL") {
        // Delete last character
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || "0";
      } 
      else if (btn === "=") {
        try {
          // Evaluate expression safely
          let result = eval(currentInput);
          display.textContent = result;
          currentInput = result.toString();
        } catch {
          display.textContent = "Error";
          currentInput = "";
        }
      } 
      else {
        // Append number or operator
        currentInput += btn;
        display.textContent = currentInput;
      }
    });
  </script>