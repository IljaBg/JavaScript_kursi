const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  
  const x = person;
  x.age = 10;
  
  document.getElementById("demo").innerHTML =
  " 1.piemērs - " + person.firstName + " is " + person.age + " years old.";

// Mutable Objects - 2,piemērs 

const obj1 = { property1: 10};

document.getElementById("demo1").innerHTML = " 2.piemērs - " +
`obj1.property1=${obj1.property1}`;

const obj2 = obj1;
obj2.property1 = 20;

document.getElementById("demo2").innerHTML = " 3.piemērs - " +
`obj2.property1=${obj2.property1}`;

// Objects ar mainīgajiem 
//$ - kā pluss (+) un jālieto ` ar {}

var x1 = 10;
document.getElementById("demo3").innerHTML = `x1=${x1}`;

var x2 = x1;
x2 = 20;
document.getElementById("demo4").innerHTML = `x2=${x2}`;
document.getElementById("demo5").innerHTML = `and now - x1=${x1}`;

// Objects ar atribūtiem (Enumerable - ko radīt (true), ko nē (false))
Object.defineProperty(obj2, "property2", {
  value: 100,
  enumerable: true,
});

let txt = "";
for (let current_property in obj1) {
  txt += current_property + ": " + obj1[current_property] + "<br>";
}

document.getElementById("demo111").innerHTML = " 5.piemērs ar Enumerable ar true - " + "<br>" +txt;

// Configurable - kur nedrīkst dzēst datus
Object.defineProperty(obj2, "property3", {
  value: "ABC",
  configurable: false,
});

let txt1 = "";
for (let current_property in obj1) {
  txt1 += current_property + ": " + obj1[current_property] + "<br>";
}

document.getElementById("demo123").innerHTML = " 6.piemērs ar Configurable ar false - " + "<br>" +txt1;

delete obj2.property3;
console.log(obj2.property3);

// Objects and Arrays (Nested Object) - Values in objects can be arrays, and values in arrays can be objects
let xx = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  xx += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    xx += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("demo222").innerHTML = xx;