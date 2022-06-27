var klients = "Jānis Bērziņš";
var summa = 1000;
var procents = [0.01, 0.02, 0.03, 0.04, 0.05]; // 0.01% par gadu - 1.gadā

var result = Math.round(summa * procents[0])/100; // ieguvums pēc 1 gada
var result2 = Math.round(summa * procents[1])/100; // ieguvums pēc 2 gada
var result3 = Math.round(summa * procents[2])/100; // ieguvums pēc 3 gada
var result4 = Math.round(summa * procents[3])/100; // ieguvums pēc 4 gada
var result5 = Math.round(summa * procents[4])/100; // ieguvums pēc 5 gada
var result6 = Math.round((summa * procents[4]/100) + summa); // ieguvums pēc 5 gada


document.getElementById("klients").innerHTML = "Labdien, godātais klients " +klients;
document.getElementById("summa").innerHTML = "Ja jūs ieguldīsiet " +summa +" euro mūsu bankā, tad ";

    document.getElementById("result").innerHTML = "Jūsu Ieguvums pēc 1 gada sastādīs: " + result +" euro";
    document.getElementById("result2").innerHTML = "Jūsu Ieguvums pēc 2 gada sastādīs: " + result2 +" euro";
    document.getElementById("result3").innerHTML = "Jūsu Ieguvums pēc 3 gada sastādīs: " + result3 +" euro";
    document.getElementById("result4").innerHTML = "Jūsu Ieguvums pēc 4 gada sastādīs: " + result4 +" euro";
    document.getElementById("result5").innerHTML = "Jūsu Ieguvums pēc 5 gada sastādīs: " + result5 +" euro";

    document.getElementById("result6").innerHTML = "Jūsu kopējais Ieguvums pēc 5 gadiem kopā sastādīs: " + result6 +" euro";