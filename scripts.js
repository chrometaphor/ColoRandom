class Color {
    constructor() {
        this.locked = false;

    }
}

var boxes = document.querySelectorAll('.box')


window.addEventListener('load',setRandomColor);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
    
  }

  function setRandomColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
      }
    }
=======
    constructor () {
        this.locked = false;
    }
    getRandomColor() {
        var letters =  ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}

// var hex = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// function generateHex() {
// var randomHex = [];

// for (var i = 0; i =6; i++) {
// var randomIndex = Math.floor(Math.random() * hex.length);
// randomHex.push(hex[randomIndex]);
// }

// return randomHex;
// }

