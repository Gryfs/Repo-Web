const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

let x = 20
let y = 20

let rectWidth = 100
let rectHeight = 100

let ColorCircleBorder = 'white';
let borderThickness = 8;

let goUp = new Boolean ("false");
let goRight = new Boolean("true");

var colors = "#FF0000";

const gameObjects = [];


function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
  }
  
  document.addEventListener("DOMContentLoaded", startup);

function gameloop(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, rectWidth, rectHeight);
    
    if (goUp) {
        y += 1
    }
    else{
        y -= 1
    }

    if (goRight) {
        x += 1
    }
    else{
        x -= 1
    }

    if (x+rectWidth >= canvas.width || x <= 0) {
        goRight = !goRight
    }

    if (y+rectHeight >= canvas.height || y <= 0) {
        goUp = !goUp
    }
   
    

}

function handleStart(ev) {
    ev.preventDefault();

    var touches = ev.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        console.log("Touche " + i);
        const x = ev.touches[i].clientX;
        const y = ev.touches[i].clientY;
        const r = Math.random() * 100 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Ajoute un nouveau cerlcle au tableau gameobjects
        gameObjects.push(cercle_create(x, y, r, color, 3, 8, Math.random() >= 0.5));
    }
}

function cercle_create(x, y, rayon, color, angleStart, angleEnd, sensAntiHoraire) {
    console.log("Create new circle");
    
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = ColorCircleBorder
    ctx.lineWidth = borderThickness;
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 50, 0, Math.PI * 2); 
    ctx.fill();
    ctx.stroke();
}



function handleEnd(ev) {
    ev.preventDefault();
    
}


setInterval(gameloop, 1000 / 10)