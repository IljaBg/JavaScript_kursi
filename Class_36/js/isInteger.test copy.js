
test("Sanity check, just text", () => {});
test("Sanity check with function", () => {expect(true).toBe(true);});

const isInteger = require("./isInteger");

test("isInteger passes for integer value", () => {
    expect(isInteger(1)).toBe(true);
});

test("isInteger fails for non-integer numeric value", () => {
    expect(isInteger(1.23)).toBe(false);
});

const integerNumbers = [time < 10, time <= 20, time <= 24];
test.each(integerNumbers)(
    "isInteger passes for integer value %j from array (only true is waited for)",
    (fixture) => expect(isInteger(fixture)).toBe(true)
);

const Numbers = [
    [time < 10, false],
    [time <= 20, true],
    [time <= 24, false]
  ];
test.each(Numbers)(
    "isInteger passes for numeric value %j from array with result %j",
    (fixture, result) => expect(isInteger(fixture)).toBe(result)
);

// Formula Greetings
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Labrīt!";
} else if (time < 20) {
  greeting = "Labdien!";
} else {
  greeting = "Labvakar!";
}

