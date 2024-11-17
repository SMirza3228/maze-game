let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let goal;

canvas.width = 600;
canvas.height = 550;

const cellSize = 40; 
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];

let player = {x: 13, y: 13};
const rows = Math.floor(canvas.height / cellSize);
const cols = Math.floor(canvas.width / cellSize);

function drawMaze() {
    const wallColor = '#000';
    const spaceColor = '#fff';

    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            const x = col * cellSize;
            const y = row * cellSize;

            if (maze[row][col] === 1) {
                ctx.fillStyle = wallColor; 
                ctx.fillRect(x, y, cellSize, cellSize);
            } else {
                ctx.fillStyle = spaceColor; 
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'blue'; 
    ctx.fillRect(player.x * cellSize, player.y * cellSize, cellSize, cellSize);
}


function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawMaze(); 
    drawPlayer(); 
    requestAnimationFrame(updateGame); 
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && maze[player.y - 1]?.[player.x] === 0) player.y--;
    if (e.key === 's' && maze[player.y + 1]?.[player.x] === 0) player.y++;
    if (e.key === 'a' && maze[player.y]?.[player.x - 1] === 0) player.x--; 
    if (e.key === 'd' && maze[player.y]?.[player.x + 1] === 0) player.x++;
    updateGame(); 
});

updateGame();