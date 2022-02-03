/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggle = document.getElementById("dyslexia-toggle");

const isDyslexic = () => {
  // localStorage value is a string, make it a boolean by comparing to string 'true' 
  return window.localStorage.getItem("dyslexic") === 'true';
};

const toggleDyslexiaStyles = () => {
  document.body.classList.toggle("dyslexia-mode");
};

const initPage = () => {
  // If dyslexia mode is already enabled, turn on the dyslexia styling
  if (isDyslexic()) {
    toggleDyslexiaStyles();
  }

  // add event listener to button
  toggle.addEventListener('click', toggleDyslexiaMode);
};

const toggleDyslexiaMode = ev => {
  // update the localStorage value, which will update what isDyslexic returns from now on
  window.localStorage.setItem("dyslexic", String(!isDyslexic()));

  toggle.setAttribute('aria-pressed', String(isDyslexic()));

  toggleDyslexiaStyles();
};

initPage();
