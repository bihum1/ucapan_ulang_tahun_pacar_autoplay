const music = document.getElementById('bgMusic');

function playMusic() {
  if (!music) return;
  music.volume = 0.8;
  music.play().catch(() => {
    console.log('Browser memblokir autoplay bersuara. Musik akan menyala otomatis saat layar disentuh/scroll.');
  });
}

// Mencoba memutar musik langsung saat halaman dibuka
window.addEventListener('load', playMusic);
document.addEventListener('DOMContentLoaded', playMusic);

// Fallback: jika browser memblokir autoplay, musik menyala otomatis saat ada interaksi pertama
['click', 'touchstart', 'scroll', 'mousemove', 'keydown'].forEach(eventName => {
  document.addEventListener(eventName, playMusic, { once: true });
});

function mulai() {
  const opening = document.getElementById('opening');
  const content = document.getElementById('content');

  opening.style.display = 'none';
  content.style.display = 'block';

  playMusic();
}

function buatHati() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💕';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  heart.style.fontSize = Math.random() * 18 + 14 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6500);
}

setInterval(buatHati, 320);
