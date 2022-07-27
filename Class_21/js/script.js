// funkcijas pieraksts , bet citā veidā ar = () =>

var counter = 1;
var showCounter = () => { console.log(counter); return true};

// ja variākā darbības vajag iedarbināt, tad jāliek {}.
// var showCounter = () => {console.log(counter); return true};
// ! ar "var" uztaisītais mainīgais ir pielikts pie "window" objekta, bet "let" - nē

// innerWidth - logs, kur parādās dokumenta saturs
// outterWidth - viss lapas saturs

/* let features = 'height=600,width=800',
    url = 'https://www.w3schools.com/js/js_object_prototypes.asp';
window.open('https://www.w3schools.com/js/js_object_prototypes.asp'); */


// let jsWindow = window.open(url, 'test', features);

let jsWindow = window.open(
    'http://127.0.0.1:5500/Class_20/',
    'about',
    'height=600,width=600'
);

setTimeout(() => {
    jsWindow.open("http://127.0.0.1:5500/Class_19/", "about")
}, 3000
);
// "_blank" jauna lapa tab'ā

setTimeout(() => {
    jsWindow.resizeTo(600, 300);
  }, 6000);
// resizeTo - darbojas tikai uz mūsu iekšējiem resursiem, uz ārējiem nē (nav kontrole)

/* setTimeout(() => {
    jsWindow.close();
  }, 9000); */

  setTimeout(() => {
    jsWindow.open("http://127.0.0.1:5500/Class_18/", "about")
}, 12000
); 

setTimeout(() => {
    jsWindow.alert("Hello World!")
}, 13000
);