
const moveCross = document.querySelector('.move-cross');
const moveOverLay = document.querySelector('.moveOverLay');
const mta = document.querySelectorAll('.mta');

// show move and switch overlay
for (let i = 0; i < mta.length; i++) {
    mta[i].addEventListener('click', () => {
        moveOverLay.classList.add('active');
    });
}
moveCross.addEventListener('click', () => {
    moveOverLay.classList.remove('active');
});
