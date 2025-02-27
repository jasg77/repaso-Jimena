let correctasNumero = 0;
let incorrectasNumero = 0;
let correctasColor = 0;
let incorrectasColor = 0;
let correctasEstacion = 0;
let incorrectasEstacion = 0;
let correctasRopa = 0;
let incorrectasRopa = 0;

const numerosEnIngles = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
];

const coloresEnIngles = {
    "red": "rojo",
    "blue": "azul",
    "green": "verde",
    "yellow": "amarillo",
    "black": "negro",
    "white": "blanco",
    "orange": "naranja",
    "purple": "morado",
    "pink": "rosa",
    "brown": "marrón",
    "gray": "gris"
};

const estacionesEnIngles = {
    "spring": "primavera",
    "summer": "verano",
    "autumn": "otoño",
    "winter": "invierno"
};

const ropaEnIngles = {
    "shirt": "camisa",
    "trousers": "pantalones",
    "dress": "vestido",
    "shoes": "zapatos",
    "hat": "sombrero",
    "coat": "abrigo",
    "skirt": "falda",
    "socks": "calcetines",
    "gloves": "guantes",
    "scarf": "bufanda"
};

function generarNumero() {
    let numero = Math.floor(Math.random() * 21);
    document.getElementById('numero').innerText = numero;
    document.getElementById('respuesta-numero').value = '';
    document.getElementById('resultado-numero').innerText = '';
    document.getElementById('resultado-numero').classList.remove('correcto', 'incorrecto');
}

function verificarRespuestaNumero() {
    let numero = parseInt(document.getElementById('numero').innerText, 10);
    let respuesta = document.getElementById('respuesta-numero').value.toLowerCase().trim();
    let respuestaCorrecta = numerosEnIngles[numero];

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado-numero').innerText = '¡Correcto!';
        document.getElementById('resultado-numero').classList.add('correcto');
        document.getElementById('resultado-numero').classList.remove('incorrecto');
        correctasNumero++;
    } else {
        document.getElementById('resultado-numero').innerText = `Incorrecto. La respuesta correcta es "${respuestaCorrecta}".`;
        document.getElementById('resultado-numero').classList.add('incorrecto');
        document.getElementById('resultado-numero').classList.remove('correcto');
        incorrectasNumero++;
    }
    document.getElementById('contador-numero').innerText = `Correctas: ${correctasNumero} | Incorrectas: ${incorrectasNumero}`;
}

function generarColor() {
    let colores = Object.keys(coloresEnIngles);
    let color = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('color').style.backgroundColor = color;
    document.getElementById('color').dataset.color = color;
    document.getElementById('respuesta-color').value = '';
    document.getElementById('resultado-color').innerText = '';
    document.getElementById('resultado-color').classList.remove('correcto', 'incorrecto');
}

function verificarRespuestaColor() {
    let color = document.getElementById('color').dataset.color;
    let respuesta = document.getElementById('respuesta-color').value.toLowerCase().trim();
    let respuestaCorrecta = color;

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado-color').innerText = '¡Correcto!';
        document.getElementById('resultado-color').classList.add('correcto');
        document.getElementById('resultado-color').classList.remove('incorrecto');
        correctasColor++;
    } else {
        document.getElementById('resultado-color').innerText = `Incorrecto. La respuesta correcta es "${respuestaCorrecta}".`;
        document.getElementById('resultado-color').classList.add('incorrecto');
        document.getElementById('resultado-color').classList.remove('correcto');
        incorrectasColor++;
    }
    document.getElementById('contador-color').innerText = `Correctas: ${correctasColor} | Incorrectas: ${incorrectasColor}`;
}

function generarEstacion() {
    let estaciones = Object.keys(estacionesEnIngles);
    let estacion = estaciones[Math.floor(Math.random() * estaciones.length)];
    document.getElementById('imagen-estacion').src = `images/${estacion}.jpg`;
    document.getElementById('imagen-estacion').dataset.estacion = estacion;
    document.getElementById('respuesta-estacion').value = '';
    document.getElementById('resultado-estacion').innerText = '';
    document.getElementById('resultado-estacion').classList.remove('correcto', 'incorrecto');
}

function verificarRespuestaEstacion() {
    let estacion = document.getElementById('imagen-estacion').dataset.estacion;
    let respuesta = document.getElementById('respuesta-estacion').value.toLowerCase().trim();
    let respuestaCorrecta = estacion;

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado-estacion').innerText = '¡Correcto!';
        document.getElementById('resultado-estacion').classList.add('correcto');
        document.getElementById('resultado-estacion').classList.remove('incorrecto');
        correctasEstacion++;
    } else {
        document.getElementById('resultado-estacion').innerText = `Incorrecto. La respuesta correcta es "${respuestaCorrecta}".`;
        document.getElementById('resultado-estacion').classList.add('incorrecto');
        document.getElementById('resultado-estacion').classList.remove('correcto');
        incorrectasEstacion++;
    }
    document.getElementById('contador-estacion').innerText = `Correctas: ${correctasEstacion} | Incorrectas: ${incorrectasEstacion}`;
}

function generarRopa() {
    let prendas = Object.keys(ropaEnIngles);
    let prenda = prendas[Math.floor(Math.random() * prendas.length)];
    document.getElementById('imagen-ropa').src = `images/${prenda}.jpg`;
    document.getElementById('imagen-ropa').dataset.prenda = prenda;
    document.getElementById('respuesta-ropa').value = '';
    document.getElementById('resultado-ropa').innerText = '';
    document.getElementById('resultado-ropa').classList.remove('correcto', 'incorrecto');
}

function verificarRespuestaRopa() {
    let prenda = document.getElementById('imagen-ropa').dataset.prenda;
    let respuesta = document.getElementById('respuesta-ropa').value.toLowerCase().trim();
    let respuestaCorrecta = prenda;

    if (respuesta === respuestaCorrecta) {
        document.getElementById('resultado-ropa').innerText = '¡Correcto!';
        document.getElementById('resultado-ropa').classList.add('correcto');
        document.getElementById('resultado-ropa').classList.remove('incorrecto');
        correctasRopa++;
    } else {
        document.getElementById('resultado-ropa').innerText = `Incorrecto. La respuesta correcta es "${respuestaCorrecta}".`;
        document.getElementById('resultado-ropa').classList.add('incorrecto');
        document.getElementById('resultado-ropa').classList.remove('correcto');
        incorrectasRopa++;
    }
    document.getElementById('contador-ropa').innerText = `Correctas: ${correctasRopa} | Incorrectas: ${incorrectasRopa}`;
}

// Generar un número, un color, una estación y una prenda al cargar la página
window.onload = function() {
    generarNumero();
    generarColor();
    generarEstacion();
    generarRopa();
};
