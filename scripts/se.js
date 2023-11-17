//left-hero animations

//programs initializations
const fcsProgram = document.getElementById("fcs-detail");
const fswProgram = document.getElementById("fsw-detail");
const fsdProgram = document.getElementById("fsd-detail");
const uixProgram = document.getElementById("uix-detail");
const programBack = document.getElementById("programs");
const fcsButton = document.getElementById("fcs");
const fswButton = document.getElementById("fsw");
const fsdButton = document.getElementById("fsd");
const uixButton = document.getElementById("uix");

fcsButton.classList.remove("default-button");
fcsProgram.classList.remove("default-program");

//hero effects
const heroLeft = document.getElementById("hero-left");
console.log("started");

//programs toggle

let programClick = document.querySelectorAll(".program-button");
programClick.forEach(function (button) {
  button.addEventListener("click", function () {
    let buttonId = this.id;
    if (buttonId == "fcs") {
      button.classList.remove("default-button");
      fswButton.classList.add("default-button");
      fsdButton.classList.add("default-button");
      uixButton.classList.add("default-button");
      fcsProgram.classList.remove("default-program");
      programBack.style.backgroundColor = "rgb(255, 198, 53)";
      fswProgram.classList.add("default-program");
      fsdProgram.classList.add("default-program");
      uixProgram.classList.add("default-program");
    }
    if (buttonId == "fsw") {
      button.classList.remove("default-button");
      fcsButton.classList.add("default-button");
      fsdButton.classList.add("default-button");
      uixButton.classList.add("default-button");
      fswProgram.classList.remove("default-program");
      programBack.style.backgroundColor = "#28eea7";
      fcsProgram.classList.add("default-program");
      fsdProgram.classList.add("default-program");
      uixProgram.classList.add("default-program");
    }
    if (buttonId == "fsd") {
      button.classList.remove("default-button");
      fcsButton.classList.add("default-button");
      fswButton.classList.add("default-button");
      uixButton.classList.add("default-button");
      fsdProgram.classList.remove("default-program");
      programBack.style.backgroundColor = "#9864da";
      fcsProgram.classList.add("default-program");
      fswProgram.classList.add("default-program");
      uixProgram.classList.add("default-program");
    }
    if (buttonId == "uix") {
      button.classList.remove("default-button");
      fcsButton.classList.add("default-button");
      fswButton.classList.add("default-button");
      fsdButton.classList.add("default-button");
      uixProgram.classList.remove("default-program");
      programBack.style.backgroundColor = "#fb508e";
      fcsProgram.classList.add("default-program");
      fswProgram.classList.add("default-program");
      fsdProgram.classList.add("default-program");
    }
  });
});

//FAQ

