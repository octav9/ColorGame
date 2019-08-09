var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function () {
            if (index == 0) {
                modeButtons[0].classList.add("selected");
                modeButtons[1].classList.remove("selected");
            }
            else {
                modeButtons[1].classList.add("selected");
                modeButtons[0].classList.remove("selected");
            }
            this.textContent == "New Game Easy" ? reset(3) : reset(6);
        });
    }
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;

            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.background = "#2E3440";
                messageDisplay.textContent = "Try again";
            }
        });
    }

    reset(6);
}

function reset(num) {
    colors = generateColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    for (let index = 0; index < squares.length; index++) {
        if (colors[index]) {
            squares[index].style.display = "block";
            squares[index].style.background = colors[index];
        }
        else squares[index].style.display = "none";
    }
    h1.style.background = "#5E81AC";
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    var arr = [];
    for (let index = 0; index < num; index++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}