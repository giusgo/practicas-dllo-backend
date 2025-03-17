const data = require('./15-datos-parcial-01.json');

function nombre_cursos(estudiante) {
    return estudiante.cursos.map((curso) => curso.nombre);
}

function mejor_nota(estudiante) {
    return Math.max(...estudiante.cursos.map((curso) => curso.nota));
}

function es_alto(estudiante) {
    return estudiante.altura > 1.65;
}

function nombre_completo(estudiante) {
    return `${estudiante.nombre} ${estudiante.apellido}`;
}

function diferencia_altura(estudiante_1, estudiante_2) {
    return Math.abs(estudiante_1.altura - estudiante_2.altura);
}

function agregar_campo(estudiante) {
    return { ...estudiante, nombreCompleto: nombre_completo(estudiante) }
}

// Para ver la estructura
console.log("Ejemplo: ", data[0]);

// Testeo
console.log(nombre_cursos(data[1]));
console.log(mejor_nota(data[0]));
console.log(es_alto(data[0]));
console.log(nombre_completo(data[0]));
console.log(diferencia_altura(data[0], data[2]));
console.log(agregar_campo(data[0]));