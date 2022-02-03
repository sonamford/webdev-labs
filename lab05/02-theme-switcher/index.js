/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = ev => {
   document.querySelector("body").className = ev.currentTarget.id;
};

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
   btn.addEventListener('click', changeTheme);
})

