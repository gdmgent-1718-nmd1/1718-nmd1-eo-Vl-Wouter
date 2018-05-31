

// Select button
let stylebutton = document.getElementById('tile-style');
let colorbutton = document.getElementById('logo-color');
let logolist = document.getElementsByClassName('logo');
let logos = Array.from(logolist);
let tile = document.getElementById('tiletext');

console.log(logos);

// Functions
// Change style of tile-text
let styleChange = function() {
    tile.classList.toggle('tile-normal');
    tile.classList.toggle('tile-light');
};

// Change colour of logo
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

// Assign colours to colour-fill
let colourtiles = Array.from(document.getElementsByClassName('colour-fill'));
function colours() {
    for(let i = 0; i < colourtiles.length; i++) {
        console.log(colourtiles[i]);
        colourtiles[i].style.backgroundColor = "var(--" + colourtiles[i].id + ")";
    }
}

colours();


// Event listener
stylebutton.addEventListener('click', styleChange);
colorbutton.addEventListener('click', colourChange);