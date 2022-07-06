const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
text += x + "<br>";
}

document.getElementById("loop").innerHTML = text;

text = "";
for (i = 0; i < cars.length; i++) {
text += cars[i] + "<br>";
}

document.getElementById("loop_old").innerHTML = text;


let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x + "<br>";
}

document.getElementById("demo").innerHTML = text2;

// Uzdevums
        
var burtu_skaititajs_varda = 0;
var simbolu_skaittitajs_teikuma = 0;
N = 5;  
var derigu_vardu_skaits = 0;

let text5 = prompt("Lūdzu ievadiet vārdus"); // uzliekot atstarpi beigās vai definējot arī tex = text + " ", tad skripts aprēķinās pēdējo vārdu
for (let x of text5) {
    simbolu_skaittitajs_teikuma++;
    if (x == " ") {
        //console.log(x + " tā ir atstarpe");
        //console.log("iepriekšējā vārdā bija " + burtu_skaititajs_varda + " burti");
        if (burtu_skaititajs_varda >= N) {
            //console.log("Iepriekšējā vārdā bija " + N + " un vairāki burti");
            derigu_vardu_skaits++;
        }

        burtu_skaititajs_varda = 0;
    } else {
        burtu_skaititajs_varda++;
        //console.log(x + " tas ir " + burtu_skaititajs_varda + ". simbols vārdā");
    
        if (simbolu_skaittitajs_teikuma == text5.length) {
        //console.log("Vēl vairāk, iepriekšējā  vārdā bija " + burtu_skaititajs_varda + " un vairāki burti");
            if (burtu_skaititajs_varda >= N) {
                //console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un virāk burti");
                derigu_vardu_skaits++;
            }
            burtu_skaititajs_varda = 0;
            //console.log("Un vēl vairāk šis bija pēdējais vārds teikumā");
        }
    }
}
document.getElementById("text_analysis").innerHTML = "Šajā teikumā:<br> <b>" + text5 + "</b><br> ir " + derigu_vardu_skaits + " vārdi, kuru garums ir lielāks >= " + N;