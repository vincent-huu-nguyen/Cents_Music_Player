const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/changes.wav',
        displayName: 'changes',
        cover: 'assets/changes-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/carefree.wav',
        displayName: 'carefree',
        cover: 'assets/carefree-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/journey.wav',
        displayName: 'journey',
        cover: 'assets/journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/dreams.wav',
        displayName: 'dreams',
        cover: 'assets/dreams-Cents.jpeg',
        artist: 'Cents',
    },
    {
        path: 'assets/Destination.wav',
        displayName: 'destination',
        cover: 'assets/destination-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/memories.wav',
        displayName: 'Memories',
        cover: 'assets/new_journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/dizzy_city.wav',
        displayName: 'Dizzy City',
        cover: 'assets/new_journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/prom.wav',
        displayName: 'Prom',
        cover: 'assets/new_journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/one_night_in_august.wav',
        displayName: 'One night in august',
        cover: 'assets/new_journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/new_journey.wav',
        displayName: 'New Journey',
        cover: 'assets/new_journey-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/back_to_gold.mp3',
        displayName: 'Back To Gold',
        cover: 'assets/back_to_gold-Cents.png',
        artist: 'Cents',
    },
    {
        path: 'assets/presents.wav',
        displayName: 'Presents',
        cover: 'assets/presents-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Livin.wav',
        displayName: 'Livin\'',
        cover: 'assets/livin-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Escapism.wav',
        displayName: 'Escapism',
        cover: 'assets/escape_from_reality-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Realism.wav',
        displayName: 'Realism',
        cover: 'assets/escape_from_reality-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/fragments.wav',
        displayName: 'Fragments',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/cold.wav',
        displayName: 'Cold',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/reflection.wav',
        displayName: 'Reflection',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Distorted.wav',
        displayName: 'Distorted',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Gameboy.wav',
        displayName: 'Gameboy',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/cozy_diner.wav',
        displayName: 'Cozy Diner',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/presents.wav',
        displayName: 'Presents',
        cover: 'assets/cold-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Jazz_N_Funk_NS.wav',
        displayName: 'Jazz N Funk NS',
        cover: 'assets/jazz_n_funk_ns-Cents.png',
        artist: 'Cents',
    },
    {
        path: 'assets/DizzyCityRemix.wav',
        displayName: 'Dizzy City (Boss Remix)',
        cover: 'assets/dizzy_city_remix-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Starstruck.wav',
        displayName: 'Starburst',
        cover: 'assets/starstruck-Cents.jpg',
        artist: 'Cents',
    },
    {
        path: 'assets/Drive.wav',
        displayName: 'Drive',
        cover: 'assets/Drive.jpg',
        artist: 'Cents',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);

document.querySelector('.playlist-container').addEventListener('click', function() {
    this.classList.toggle('active');
});

const playlistContainer = document.querySelector('.playlist-container');



// Add event listeners to all songs in the playlist
document.querySelectorAll('#songs').forEach(songElement => {
    songElement.addEventListener('click', () => {
        // Get the index of the clicked song
        const songIndex = songElement.getAttribute('data-song-index');
        const selectedSong = songs[songIndex];

        // Load and play the selected song
        loadMusic(selectedSong);
        playMusic();
    });
});


document.getElementById("slideright").addEventListener("click", function () {
    document.querySelector(".game-container").classList.add("active");
});

document.getElementById("slideleft").addEventListener("click", function () {
    document.querySelector(".game-container").classList.remove("active");
});

// Left Game Container Controls
document.getElementById("slideleft-arrow").addEventListener("click", function () {
    document.querySelector(".left-game-container").classList.add("active");
});

document.getElementById("slideleft-close").addEventListener("click", function () {
    document.querySelector(".left-game-container").classList.remove("active");
});

// Snake Game
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const snakeRestartBtn = document.getElementById('snakeRestartBtn');
const snakeScoreElement = document.getElementById('snakeScore');

const gridSize = 15;
const tileCount = canvas.width / gridSize;

let snake = [
    {x: 10, y: 10}
];
let food = {x: 15, y: 15};
let dx = 0;
let dy = 0;
let score = 0;
let gameRunning = false;
let gameLoop;

function drawSnake() {
    ctx.fillStyle = '#000000'; // Black snake
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });
}

function drawFood() {
    ctx.fillStyle = '#ffffff'; // White food
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        snakeScoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
    
    // Make sure food doesn't spawn on snake
    snake.forEach(segment => {
        if (segment.x === food.x && segment.y === food.y) {
            generateFood();
        }
    });
}

function checkCollision() {
    const head = snake[0];
    
    // Wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        return true;
    }
    
    // Self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    
    return false;
}

function gameOver() {
    gameRunning = false;
    clearInterval(gameLoop);
    alert(`Game Over! Score: ${score}`);
}

function update() {
    if (!gameRunning) return;
    
    moveSnake();
    
    if (checkCollision()) {
        gameOver();
        return;
    }
    
    // Clear canvas with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawSnake();
    drawFood();
}

function startGame() {
    snake = [{x: 10, y: 10}];
    food = {x: 15, y: 15};
    dx = 0;
    dy = 0;
    score = 0;
    snakeScoreElement.textContent = score;
    gameRunning = true;
    
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(update, 150);
}

function handleKeyPress(e) {
    if (!gameRunning) return;
    
    switch(e.key) {
        case 'ArrowUp':
            if (dy !== 1) { dx = 0; dy = -1; }
            break;
        case 'ArrowDown':
            if (dy !== -1) { dx = 0; dy = 1; }
            break;
        case 'ArrowLeft':
            if (dx !== 1) { dx = -1; dy = 0; }
            break;
        case 'ArrowRight':
            if (dx !== -1) { dx = 1; dy = 0; }
            break;
    }
}

// Event listeners
snakeRestartBtn.addEventListener('click', startGame);
document.addEventListener('keydown', handleKeyPress);

// Initialize snake game
startGame();


//Minesweeper
// Script.js
const numRows = 8;
const numCols = 8;
const numMines = 10;

const gameBoard = document.getElementById("gameBoard");
const restartBtn = document.getElementById("restartBtn");
let board = [];

function initializeBoard() {
    board = [];
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
            board[i][j] = {
                isMine: false,
                revealed: false,
                flagged: false,
                count: 0,
            };
        }
    }

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < numMines) {
        const row = Math.floor(Math.random() * numRows);
        const col = Math.floor(Math.random() * numCols);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minesPlaced++;
        }
    }

    // Calculate counts
    for (let i = 0; i < numRows; i++) {
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            if (!board[i][j].isMine) {
                let count = 0;
                for (
                    let dx = -1;
                    dx <= 1;
                    dx++
                ) {
                    for (
                        let dy = -1;
                        dy <= 1;
                        dy++
                    ) {
                        const ni =
                            i + dx;
                        const nj =
                            j + dy;
                        if (
                            ni >= 0 &&
                            ni <
                                numRows &&
                            nj >= 0 &&
                            nj <
                                numCols &&
                            board[ni][
                                nj
                            ].isMine
                        ) {
                            count++;
                        }
                    }
                }
                board[i][j].count =
                    count;
            }
        }
    }
}

function revealCell(row, col) {
    if (
        row < 0 ||
        row >= numRows ||
        col < 0 ||
        col >= numCols ||
        board[row][col].revealed
    ) {
        return;
    }

    board[row][col].revealed = true;

    if (board[row][col].isMine) {
        // Handle game over
        /*alert(
            "Game Over! You stepped on a mine."
        );*/
    } else if (
        board[row][col].count === 0
    ) {
        // If cell has no mines nearby,
        // Reveal adjacent cells
        for (
            let dx = -1;
            dx <= 1;
            dx++
        ) {
            for (
                let dy = -1;
                dy <= 1;
                dy++
            ) {
                revealCell(
                    row + dx,
                    col + dy
                );
            }
        }
    }

    renderBoard();
}

function flagCell(event, row, col) {
    event.preventDefault(); // Prevent right-click menu

    if (board[row][col].revealed) return; // Don't flag revealed cells

    board[row][col].flagged = !board[row][col].flagged;
    renderBoard();
}

function renderBoard() {
    gameBoard.innerHTML = "";

    for (let i = 0; i < numRows; i++) {
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            const cell =
                document.createElement(
                    "div"
                );
            cell.className = "cell";
            if (board[i][j].revealed) {
                cell.classList.add("revealed");
                if (board[i][j].isMine) {
                    cell.classList.add("mine");
                    cell.textContent = "💣";
                } else if (board[i][j].count > 0) {
                    cell.textContent = board[i][j].count;
                }
            } else if (board[i][j].flagged) {
                cell.classList.add("flagged");
                cell.textContent = "🚩";
            }
            cell.addEventListener("click", () => revealCell(i, j));
            cell.addEventListener("contextmenu", (event) => flagCell(event, i, j)); // Right-click to flag
            gameBoard.appendChild(cell);
        }
        gameBoard.appendChild(
            document.createElement("br")
        );
    }
}

// Restart game
restartBtn.addEventListener("click", () => {
    initializeBoard();
    renderBoard();
});

// Prevent right-click menu on game board
gameBoard.addEventListener("contextmenu", (event) => event.preventDefault());

initializeBoard();
renderBoard();
