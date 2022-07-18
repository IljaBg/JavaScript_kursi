// funkcijas definēšanas ar apgalvojuma palīdzību

function square_statement(number) {
    return number * number;
}
const x = square_statement(4);

console.log(x);

// funkcijas pieteikšanas ar izteiksmes palīdzību
// anonīma funkcija - bez nosaukuma

const square_expression = function (number) {
  return number * number;
}
const y = square_expression(4);

console.log(y);

// rekursīva funkcija - izsauks sevi
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1); // " : " tas pats kā if/else, izmanto, ja nav paredzēta zarošana
  }
  // nosacījums ? true_darbības : false darbības;
  
  console.log(factorial(3));
  // 3 < 2 - false, tad 3-1 = 2; 2 <2 - false, tad 2-1=1; 1<2 - true;


  // Piemērs ar funkciju, kuras argumants (viens no) arī ir funkcija
 
  function map(f, a) {
    const result = [];
    i = 0;
    for (const v of a) {
      //result[i] = f(v);
      //i++;
      result.push(f(v));
    }
    return result;
  }
  
  const f = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(f, numbers);
  console.log(cube);

// Piemērs ar ? :  ((min < 10) ? "0" : "")
// min = 5. Tad :
// 5 < 10 ir true -> tad jāliek "0" pie cipara -> 05. Ja (else) , tad būs tukša rinda - "".

  // Funkcijas piemērs
  