let carName = "BMW";
    document.getElementById("demo").innerHTML = carName;

var x = 60;
document.getElementById("dec").innerHTML = x;

var bit_number = 7;
var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);

document.getElementById("bin").innerHTML = z;

/* var bit_number = 7;
var y = (x << (bit_number-7)) >> bit_number;
var z = String(y);
[un tā -6, -5... 0]

y = (x << bit_numbrt -7) >> bit_number
z = z + '_' + String(y);

y = (x << bit_numbrt -6) >> bit_number

var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);
*/


/* var a = 1;
 { 
     console.log(+a);
     var a = 2
     console.log(a);
     }
console.log(a) */
