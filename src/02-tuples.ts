const prices: (number | string)[] = [1, 3, 2, 2, 2, "asase"];
prices.push(1);
prices.push("1");

//Esto no es un array es una tupla donde la posicion y el orden importa
let user: [string, number];
user = ["nicobytes", 15];

//Deconstrucción
const [username, age] = user;
console.log(username);
console.log(age);
