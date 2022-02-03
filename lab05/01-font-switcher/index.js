let currentFontSize = 1.4;

const updateFontSize = () => {
   document.querySelector('.content').style.fontSize = `${currentFontSize}em`
   document.querySelector('h1').style.fontSize = `${currentFontSize + 1}em`
}

const makeBigger = () => {
   currentFontSize += 0.2;
   updateFontSize();
}

const makeSmaller = () => {
   currentFontSize -= 0.2;
   updateFontSize();
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
