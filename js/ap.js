var vistaUno = document.getElementById('grid');
var vistaDos = document.getElementById('single');
var grid = document.getElementById('grid-section');

var single = document.getElementById('single-section');


vistaUno.addEventListener('click', primera);
vistaDos.addEventListener('click', segunda);

function primera() {
    grid.style.display = 'block';
    single.style.display = 'none';
}

function segunda() {
    single.style.display = 'block';
    grid.style.display = 'none';
}