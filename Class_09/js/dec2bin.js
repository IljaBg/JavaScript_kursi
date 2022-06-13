///* Ja pieņem kā Zemes radiuss ir tik, tad pieņēmam, ka ekvatora garums ir - */

var x = 6371;
var p = 3.14159;
c = 2*p*x;

num = c;
roundedString = num.toFixed(2);
rounded = Number(roundedString);

document.getElementById("ekvators").innerHTML = "Ekvatora garums:" +rounded +" km";
document.getElementById("radiuss").innerHTML = "Zemes rādiuss:" +x +" km";

console.log("Ja pieņēmam, ka Zemes rādiuss ir: "+x , "km,", "tad ekvatora garums būs: " +c , "km");


// Uzdevums: Bankas uzdevums
// gada procentu likme - 0.01% (0.02% ja līgums uz 2 gadiem), pirmais mainīgias - Vārds+uzvārds, otrais - nogūldāmā summa
// Vēstule: "Cien., klienta v/u. Jūsu bankas konta ir ___summa, Ja Jūs ieguldīsiet to summu uz 1 gadu, tad pēc gada kā % Jūs saņemsiet___ (ieguvums)"

/*
var x = 250;
document.getElementById("dec").innerHTML = x;


>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar ((x>>?) & 1)


var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;

x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 110_0_ >> 0 -> 0011 1100
           1(dec) atbilst 0000 0001(bin)
(x >> 0) & 1 -> 0011 1100
                0000 0001
                0000 0000(bin) -> 0(dec)

console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;

0011 11_0_0 >> 1 -> 0001 1110
(x >> 1) & 1 ->    0001 1110
                   0000 0001
                   0000 0000(bin) -> 0(dec)

console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. bits: " + bit_sequence);


......... Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
......... vai par 0 un 1 simbolu secību
......... drīkst izmantot tikai divus vai trīs mainīgos

// sākumā var atrast un pielietot standarta JS funkciju, kas pārveido dec to bin
// if, for utt. pagaidām izmantot nedrīkst
document.getElementById("bin").innerHTML = bit_sequence; */
