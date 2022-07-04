console.log("Skripta izpildes sākums:\n" + new Date());

document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 1; i < 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("automatic_count").innerHTML = text;

let test = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    test += "Pāra skaitlis - " + i + "<br>";
  }
}

document.getElementById("automatic_count10").innerHTML = test;

let skaitlis = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    skaitlis += +i + " - Pāra skaitlis" + "<br>";
  } else {
    skaitlis += +i + " - Nepāra skaitlis " + "<br>";
  }
}

document.getElementById("count_even").innerHTML = skaitlis;

var   text1 = "",
      dalit=[2,3,4,6,8];
for (let i = 1; i < 25; i++) 
{
  text1 = text1+ i+ " dalās ar skaitli ";
  for (var k=0; k<dalit.length; k++ )
      if (i % dalit[k] == 0) {
      text1 = text1+dalit[k]+",";
     }
    
    if (i%2 == 0)
    {
      text1 = text1 +  " pāra skaitlis "
    }
    else 
    {
      text1 = text1 +  " nepāra skaitlis "
    }
    text1=text1+"<BR>";
}
document.getElementById("automatic_count2").innerHTML = text1;

// From Loop to Array
let array = [];
let test2 = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    array.push(+i);
  }
}

document.getElementById("masivs").innerHTML = "Pāra skaitļa masīvs - " + array;

// Pārbaude
document.getElementById("masivs2").innerHTML = "Masīva pirmais elements - " + array[0];

/* text += cars[0] + "<br>";
text = text + cars[0] + "<br>";

for (s begining - darbība/-s ciklu uzsākot; n - nosacījums/-i cikla turpināšanai; so - soļa veikšana){} 
s-> n -> so {} ir spēkā -> / s-> n-> so -> n (nav spēka)
pārējam pie nākamās darbības aiz cikla

% - atlikums no dalījuma (i % 2==0 , pāra skaitļi dalās ar 2 un nav atlikuma)
3 % 2 ==0 (būs false); 4 % 2 ==0 (būs true)


 let text = "";
for (let i = 1; i < 11; i++) {
if (i % 2 == 0) {
text = text + i + "<br>";
}
}
*/
