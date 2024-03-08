const passwordCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ",",
    ">",
    ".",
    "?",
    "/",
];

let button = document.querySelector(".generate");
let passwordText = document.querySelector(".password");
let lengthInput = document.querySelector(".length");

lengthInput.addEventListener("change", () => {
    let val = lengthInput.value;
    lengthInput.value = val < 8 ? 8 : val > 16 ? 16 : val;
});

button.addEventListener("click", () => {
    let passwordLength = lengthInput.value ? lengthInput.value : 8;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password +=
            passwordCharacters[
                Math.floor(Math.random() * passwordCharacters.length)
            ];
        passwordText.innerHTML = password;
    }
});
