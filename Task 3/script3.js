const display = document.getElementById("display");
    const calculator = document.getElementById("calculator");
    let poweredOn = true;

    function togglePower() {
      poweredOn = !poweredOn;
      calculator.classList.toggle("off");
      display.innerText = poweredOn ? "0" : "";
    }

    function toggleTheme() {
      document.body.classList.toggle("light-theme");
    }

    function append(value) {
      if (!poweredOn) return;
      if (display.innerText === "0") {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      if (!poweredOn) return;
      display.innerText = "0";
    }

    function Backspace() {
        if (!poweredOn) return;
        display.innerText = display.innerText.slice(0, -1) || "0";
      }

    function calculate() {
      if (!poweredOn) return;
      try {
        const result = eval(display.innerText);
        display.innerText = result;
      } catch {
        display.innerText = "Error";
      }
    }

    document.addEventListener("keydown", function (e) {
      if (!poweredOn) return;
      const key = e.key;
      if (!isNaN(key) || "+-*/.".includes(key)) {
        append(key);
      } else if (key === "Enter") {
        e.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1) || "0";
      } else if (key.toLowerCase() === "c") {
        clearDisplay();
      }
    });