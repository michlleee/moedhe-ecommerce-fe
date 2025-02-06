const hidden = document.querySelector('.hidden');
const tulisan1 = document.querySelector('.tulisan1');
const tulisan2 = document.querySelector('.tulisan2');
const tulisan3 = document.querySelector('.tulisan3');
const a1 = document.querySelector('.tulisan1 a');
const a2 = document.querySelector('.tulisan2 a');
const a3 = document.querySelector('.tulisan3 a');
//ketika useer di klik

document.querySelector('#teken').onclick = () => {
    hidden.classList.toggle('active');
    tulisan1.classList.toggle('active');
    tulisan2.classList.toggle('active');
    tulisan3.classList.toggle('active');
    a1.classList.toggle('active');
    a2.classList.toggle('active');
    a3.classList.toggle('active'); 
};

const hamburgermenu = document.querySelector('#teken');
document.addEventListener('click', function(e) {
    if (!hamburgermenu.contains(e.target) && !hidden.contains(e.target)){
        hidden.classList.remove('active');
        tulisan1.classList.remove('active');
        tulisan2.classList.remove('active');
        tulisan3.classList.remove('active');
        a1.classList.remove('active');
        a2.classList.remove('active');
        a3.classList.remove('active');
    }
});

const banners = document.querySelectorAll('.banner');
let currentBannerIndex = 0;

function showNextBanner() {
    banners[currentBannerIndex].style.display = 'none';
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    banners[currentBannerIndex].style.display = 'flex';
}

setInterval(showNextBanner, 6000);