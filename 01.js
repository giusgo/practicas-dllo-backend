// Punto 1
function conditional(students) {
    let count = 0;

    for (const student of students) {
        if (student.grade < 3.3) count++;
    }

    return count;
}

// Punto 2
function get_full_names(students) {
    let full_names = [];

    for (const student of students) {
        full_names.push(student.first_name + " " + student.last_name);
    }

    return full_names;
}

// Punto 3
function id_by_height(students) {
    return students
        .slice()
        .sort((a, b) => a.height - b.height)
        .map(student => student.id);
}

// Punto 4
function prom(list) {
    let acc = 0;

    for (const number of list) {
        acc += number;
    }

    return acc / list.length;
}

// Punto 5
function palin(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - i - 1]) { return false }
    }

    return true;
}

// Punto 6
function invert(word) {
    let new_word = "";

    for (let i = word.length - 1; i >= 0; i--) {
        new_word += word[i];
    }

    return new_word;
}

// Punto 7
function ascend(objects, field) {
    return objects.slice().sort((a, b) => a[field] - b[field]);
}

// Test
const students = [
    { id: "a1b2c3d4", grade: 2, first_name: "John", last_name: "Doe", height: 150 },
    { id: "e5f6g7h8", grade: 4, first_name: "Jane", last_name: "Smith", height: 160 },
    { id: "i9j0k1l2", grade: 3, first_name: "Alex", last_name: "Johnson", height: 155 },
    { id: "m3n4o5p6", grade: 5, first_name: "Emily", last_name: "Davis", height: 165 },
    { id: "q7r8s9t0", grade: 1, first_name: "Michael", last_name: "Brown", height: 145 },
    { id: "u1v2w3x4", grade: 3, first_name: "Sarah", last_name: "Wilson", height: 158 },
    { id: "y5z6a7b8", grade: 4, first_name: "David", last_name: "Taylor", height: 162 },
    { id: "c9d0e1f2", grade: 2, first_name: "Laura", last_name: "Anderson", height: 150 },
    { id: "g3h4i5j6", grade: 5, first_name: "James", last_name: "Thomas", height: 170 },
    { id: "k7l8m9n0", grade: 1, first_name: "Olivia", last_name: "Jackson", height: 140 }
];

console.log("En matricula condicional: " + conditional(students));
console.log("Nombres completos: " + get_full_names(students));
console.log("IDs por altura: " + id_by_height(students));
console.log("Promedio: " + prom([3, 4, 5]));
console.log("Palindrome: " + palin("rallar"));
console.log("Invertida: " + invert("sadddsdf"));
console.log("Campo: " + JSON.stringify(ascend(students, "grade")));