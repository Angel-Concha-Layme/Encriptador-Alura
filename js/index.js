const input = document.getElementById("input");
let output = document.getElementById("output_text");
let buttonEncode = document.getElementById("buttonEncode");
let buttonDecode = document.getElementById("buttonDecode");
let buttonCopy = document.getElementById("copy");
let defaultView = document.getElementsByClassName("default");
let resultView = document.getElementsByClassName("result");

const decode = () => {
  let inputText = input.value;
  if (inputText !== "") {
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
      if (
        inputText[i] === "e" &&
        inputText[i + 1] === "n" &&
        inputText[i + 2] === "t" &&
        inputText[i + 3] === "e" &&
        inputText[i + 4] === "r"
      ) {
        outputText += "e";
        i += 4;
      } else if (
        inputText[i] === "i" &&
        inputText[i + 1] === "m" &&
        inputText[i + 2] === "e" &&
        inputText[i + 3] === "s"
      ) {
        outputText += "i";
        i += 3;
      } else if (inputText[i] === "a" && inputText[i + 1] === "i") {
        outputText += "a";
        i += 1;
      } else if (
        inputText[i] === "o" &&
        inputText[i + 1] === "b" &&
        inputText[i + 2] === "e" &&
        inputText[i + 3] === "r"
      ) {
        outputText += "o";
        i += 3;
      } else if (
        inputText[i] === "u" &&
        inputText[i + 1] === "f" &&
        inputText[i + 2] === "a" &&
        inputText[i + 3] === "t"
      ) {
        outputText += "u";
        i += 3;
      } else {
        outputText += inputText[i];
      }
    }
    output.innerHTML = outputText;
    defaultView[0].classList.add("dontShow");
    resultView[0].classList.remove("dontShow");
  } else {
    defaultView[0].classList.remove("dontShow");
    resultView[0].classList.add("dontShow");
  }
};

const encode = () => {
  let inputText = input.value;
  if (inputText !== "") {
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === "e") {
        outputText += "enter";
      } else if (inputText[i] === "i") {
        outputText += "imes";
      } else if (inputText[i] === "a") {
        outputText += "ai";
      } else if (inputText[i] === "o") {
        outputText += "ober";
      } else if (inputText[i] === "u") {
        outputText += "ufat";
      } else {
        outputText += inputText[i];
      }
    }
    output.innerHTML = outputText;
    defaultView[0].classList.add("dontShow");
    resultView[0].classList.remove("dontShow");
  } else {
    defaultView[0].classList.remove("dontShow");
    resultView[0].classList.add("dontShow");
  }
};

buttonEncode.addEventListener("click", encode);
buttonDecode.addEventListener("click", decode);
