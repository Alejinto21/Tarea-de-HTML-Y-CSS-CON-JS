// 1.Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    }
    return 0;
}
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

// 2.Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(...elementos) {
    elementos.forEach(elemento => console.log(elemento));
}
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo

// 3.Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

function contarRango(inferior, superior) {
    let contador = 0;
    for (let i = inferior + 1; i < superior; i++) {
        contador++;
    }
    return contador;
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

// 4.Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

function sumarRango(inicial, final) {
    let suma = 0;
    for (let i = inicial; i <= final; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

// 5.Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(str) {
    let contador = 0;
    for (let char of str) {
        if (char === 'a') {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let char of str) {
        if (char === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4


// 7. Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

function sumarArreglo(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma;
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

// 8.Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

function multiplicarArreglo(arr) {
    let producto = 1;
    for (let num of arr) {
        producto *= num;
    }
    return producto;
}

console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

// 9.Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

function capitalizar(str) {
    if (str.length === 0) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

// 10.Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

function max(arr) {
    let maximo = arr[0];
    for (let num of arr) {
        if (num > maximo) {
            maximo = num;
        }
    }
    return maximo;
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

