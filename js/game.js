const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d')

let x = 10

function gameLoop() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,0,300,300);

    ctx.fillStyle = 'red';
    ctx.fillRect(x,10,100,100);
    x += 2
}

setInterval(gameLoop, 1000 / 60)