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
        displayName: 'Starstruck',
        cover: 'assets/starstruck-Cents.jpg',
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
