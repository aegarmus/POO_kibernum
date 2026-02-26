// Spread Operator -> Operador de esparcimiento

const objeto1 = {
  name: "Sebastian",
  lastName: "Vera",
  edad: 25,
};

const objeto2 = { ...objeto1 };

console.log(objeto1);
console.log(objeto2);

objeto2.colorPelo = "azul";

console.log(objeto2);
console.log(objeto1);

let numero1 = 5;
let numero2 = numero1;

console.log(numero1);
console.log(numero2);

numero2 = 10;

console.log(numero1);
console.log(numero2);
