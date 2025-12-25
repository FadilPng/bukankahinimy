const videoLinks = [
    'asset/1.mp4',
    'asset/2.mp4',
    'asset/3.mp4',
    'asset/4.mp4'
];

//untuk musik
const bgMusic = document.getElementById('bgm');
const workVideos = document.querySelectorAll('.kotak-work video');
const floatingVideo = document.getElementById('vidio-preng');
let isMusicPlaying = false;

//musik autoplay
window.addEventListener('load', () => {
    document.body.addEventListener('click', function playBgMusic() {
        if (!isMusicPlaying) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
            }).catch(e => console.log('Audio play prevented:', e));
            document.body.removeEventListener('click', playBgMusic);
        }
    }, { once: true });
});

//pause muik pas play vidio
function setupVideoListeners(video) {
    video.addEventListener('play', () => {
        bgMusic.pause();
    });
    
    video.addEventListener('pause', () => {
        bgMusic.play();
    });
    
    video.addEventListener('ended', () => {
        bgMusic.play();
    });
}
workVideos.forEach(video => {
    setupVideoListeners(video);
});
setupVideoListeners(floatingVideo);

const floatingBtn = document.getElementById('tombol-preng');
const floatingContainer = document.getElementById('kotak-preng');
const closeFloatingBtn = document.getElementById('close-preng-vid');

floatingBtn.addEventListener('click', () => {
    // Pilih video random
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const randomVideo = videoLinks[randomIndex];

    // Set video source
    floatingVideo.src = randomVideo;
    
    // Tampilkan kontener vidio dan sembunyikan tombol play
    floatingBtn.style.display = 'none';
    floatingContainer.classList.add('active');
    
    // Auto play video
    floatingVideo.play();
    
    // Pause background music
    bgMusic.pause();
});

closeFloatingBtn.addEventListener('click', () => {
    // Stop video dan reset
    floatingVideo.pause();
    floatingVideo.currentTime = 0;
    floatingVideo.src = '';
    
    // Sembunyikan kontener vidio dan tampilkan tombol play
    floatingContainer.classList.remove('active');
    floatingBtn.style.display = 'flex';
    
    // lanjut background music
    bgMusic.play();
});

//untuk bintang kecil
const lightDotsContainer = document.getElementById('titik-terang');
const numberOfDots = 50;
   
for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('titik-terang');
            
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 3 + 1;
    const delay = Math.random() * 5;
            
    dot.style.left = `${posX}%`;
    dot.style.top = `${posY}%`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.animationDelay = `${delay}s`;
            
    lightDotsContainer.appendChild(dot);
}

const shootingStarsContainer = document.getElementById('bintangjatuh');
        
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('bintangjatuh');
    
    const posX = Math.random() * 100;
    const posY = Math.random() * 30;
    
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    
    const duration = 2 + Math.random() * 2;
    star.style.animationDuration = `${duration}s`;
    
    shootingStarsContainer.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

//interval bintang
setInterval(() => {
    if (Math.random() > 0.5) { // 50% chance
        createShootingStar();
    }
}, 2000);

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        createShootingStar();
    }, i * 1000);
}

//animasi progress bar
window.addEventListener('load', () => {
    const progressFills = document.querySelectorAll('.isi-progress');
    progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        setTimeout(() => {
            fill.style.width = progress + '%';
        }, 100);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});