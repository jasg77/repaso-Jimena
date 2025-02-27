let sumaCorrectas = 0;
let sumaIncorrectas = 0;
let restaCorrectas = 0;
let restaIncorrectas = 0;

function generarProblemas() {
    // Generar problema de suma
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    document.getElementById('suma-problema').innerText = `${num1} + ${num2} = ?`;
    document.getElementById('suma-respuesta').value = '';
    document.getElementById('suma-resultado').innerText = '';
    document.getElementById('suma-resultado').classList.remove('correcto', 'incorrecto');

    // Generar problema de resta
    let num3 = Math.floor(Math.random() * 20);
    let num4 = Math.floor(Math.random() * 10);
    if (num3 < num4) {
        [num3, num4] = [num4, num3];
    }
    document.getElementById('resta-problema').innerText = `${num3} - ${num4} = ?`;
    document.getElementById('resta-respuesta').value = '';
    document.getElementById('resta-resultado').innerText = '';
    document.getElementById('resta-resultado').classList.remove('correcto', 'incorrecto');
}

function verificarSuma() {
    let problema = document.getElementById('suma-problema').innerText;
    let [num1, num2] = problema.split(' + ').map(part => parseInt(part, 10));
    let respuesta = parseInt(document.getElementById('suma-respuesta').value, 10);
    let resultado = num1 + num2;

    if (respuesta === resultado) {
        document.getElementById('suma-resultado').innerText = '¡Correcto!';
        document.getElementById('suma-resultado').classList.add('correcto');
        document.getElementById('suma-resultado').classList.remove('incorrecto');
        sumaCorrectas++;
    } else {
        document.getElementById('suma-resultado').innerText = `Incorrecto. La respuesta correcta es ${resultado}.`;
        document.getElementById('suma-resultado').classList.add('incorrecto');
        document.getElementById('suma-resultado').classList.remove('correcto');
        sumaIncorrectas++;
    }
    document.getElementById('suma-contador').innerText = `Correctas: ${sumaCorrectas} | Incorrectas: ${sumaIncorrectas}`;
}

function verificarResta() {
    let problema = document.getElementById('resta-problema').innerText;
    let [num3, num4] = problema.split(' - ').map(part => parseInt(part, 10));
    let respuesta = parseInt(document.getElementById('resta-respuesta').value, 10);
    let resultado = num3 - num4;

    if (respuesta === resultado) {
        document.getElementById('resta-resultado').innerText = '¡Correcto!';
        document.getElementById('resta-resultado').classList.add('correcto');
        document.getElementById('resta-resultado').classList.remove('incorrecto');
        restaCorrectas++;
    } else {
        document.getElementById('resta-resultado').innerText = `Incorrecto. La respuesta correcta es ${resultado}.`;
        document.getElementById('resta-resultado').classList.add('incorrecto');
        document.getElementById('resta-resultado').classList.remove('correcto');
        restaIncorrectas++;
    }
    document.getElementById('resta-contador').innerText = `Correctas: ${restaCorrectas} | Incorrectas: ${restaIncorrectas}`;
}

// Generar problemas al cargar la página
window.onload = generarProblemas;
