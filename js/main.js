// //Ingresar numero y mostrar alerta si es mayor que 1.000

let number1 = prompt("Please type a number");
if (number1 >= 1000) {
    alert(`${number1}  is higher than 1.000`)
} else {
    alert(`${number1} is less than 1.000`)
}
// //Ingresar Hello e imprimir en consola si es correcto

let data1 = prompt("Please type Hello ");
if (data1 === "Hello") {
    console.log(`${data1}  is correct`)
} else {
    console.log(`${data1} is incorret`)
}

// //Ingresar numero entre 10 y 50 y mostrar alerta

let digit1 = prompt("Please type a number");
if (digit1 >= 10 && digit1 <= 50) {
    alert(`${digit1} is between 10 and 50`)
} else {
    alert(`${digit1} is not on the range`)
}