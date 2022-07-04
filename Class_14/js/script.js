/* text = "automatic count: <br>";
for (let i = 1; i < 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("automatic_count").innerHTML = text;

// Nonclassic
text = "automatic for: <br>";
var i = 1;
for ( ; i < 5; ) {
  text = text + i + "<br>";
  i++;
}
document.getElementById("automatic_nonclassic").innerHTML = text;

// While 
text = "automatic while: <br>";
var i = 1;
while ( i < 5 ) {
  text = text + i + "<br>";
  i++;
}
document.getElementById("automatic_while").innerHTML = text;

// Break
text = "automatic ar break, ja i==3: <br>";
for (let i = 1; i < 10; i++) {
    text = text + i + "<br>";
    i++;
if (i == 3) {
    break;
    }
}
document.getElementById("automatic_break").innerHTML = text;

// DO while
text = "do while: <br>";
var i = 1;
do {
    text = text + i + "<br>";
    i++;
} while (i < 5 && i == 2);
document.getElementById("automatic_do_while").innerHTML = text;

*/

// skaitīšana ar funkciju
let text = "for count until " + 5 + ":<br>";
for (let i = 1; i <= 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_1").innerHTML = text;

/* koda fragments */

text = "for count until " + 10 + ":<br>";
for (let i = 1; i <= 10; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_2").innerHTML = text;

/* koda fragments */

text = "for count until " + 15 + ":<br>";
for (let i = 1; i <= 15; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_3").innerHTML = text;

// auto skaitīšana
function counter(N, html_el_id_nr) {
    text = "for count until " + N + ":<br>";
    for (let i = 1; i <= N; i++) {
        text = text + i + "<br>";
    }

document.getElementById("count_"+html_el_id_nr).innerHTML = text;
}
counter(20,1);


// Skaitīšanas funkcija
function summator(a, b) {
    c = a + b;
    return c;
  }
  
  function dialogs() {
    var a = Number(prompt("Ievadiet a vērtību:")),
      b = Number(prompt("Ievadiet b vērtību:"));
    document.getElementById("summator_1").innerHTML =
      a + " un " + b + " summa ir " + summator(a, b);
  }
  
  dialogs();

