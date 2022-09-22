//module.exports = (value) => !isNaN(parseInt(value, 10));

module.exports = (value) => Number.isInteger(value);

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Labrīt!";
} else if (time < 20) {
  greeting = "Labdien!";
} else {
  greeting = "Labvakar!";
}