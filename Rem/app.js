const musicFiles = [
    'media/audio/audio1.mp3',
    'media/audio/audio2.mp3',
    'media/audio/audio3.mp3',
    'media/audio/audio4.mp3',
    'media/audio/audio5.mp3',
    'media/audio/audio6.mp3',
    'media/audio/audio7.mp3',
    'media/audio/audio8.mp3'
];

let audio = document.getElementById('background-music');
let nextBtn = document.getElementById('next-btn');
let playPauseBtn = document.getElementById('play-pause-btn');
let currentTrack = 0;

function loadTrack(trackIndex) {
    if (audio) {
        audio.src = musicFiles[trackIndex];
        audio.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        console.error('El navegador no es compatible con la reproducción de audio.');
    }
}

nextBtn.addEventListener('click', function () {
    currentTrack = (currentTrack + 1) % musicFiles.length;
    loadTrack(currentTrack);
});

playPauseBtn.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});
