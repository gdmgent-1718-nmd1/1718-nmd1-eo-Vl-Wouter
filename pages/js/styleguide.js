

// Select button
let stylebutton = document.getElementById('tile-style');
let colorbutton = document.getElementById('logo-color');
let logolist = document.getElementsByClassName('logo');
let logos = Array.from(logolist);
let tile = document.getElementById('tiletext');

console.log(logos);

// Function
let styleChange = function() {
    tile.classList.toggle('tile-normal');
    tile.classList.toggle('tile-light');
};

let colourChange = function() {
    for(let i = 0; i < logos.length; i++) {
        if(logos[i].classList.contains('yellow')) {
            logos[i].classList.toggle('yellow');
            logos[i].src = 'images/SVG/Logo_Zwart.svg';
        }
        else {
            logos[i].classList.toggle('yellow');
            logos[i].src = 'images/SVG/Logo_Geel.svg';
        }
    }
};


// Event listener
stylebutton.addEventListener('click', styleChange);
colorbutton.addEventListener('click', colourChange);