var klients = "Jānis Bērziņš";
var summa = 1000;
var procents = 0.01; // 0.01% par gadu - 1.gadā

var result = Math.round(summa * procents)/100; // ieguvums pēc 1 gada


document.getElementById("klients").innerHTML = "Klienta vārds, uzvārds: " +klients;
document.getElementById("summa").innerHTML = "Ieguldīta summa: " +summa +" euro";

    document.getElementById("result").innerHTML = "Ieguvums pēc 1 gada: " + result +" euro";

    