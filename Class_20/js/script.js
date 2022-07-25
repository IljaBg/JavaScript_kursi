const person = {
    firstName: "John",
    lastName: "Doe",
    language: "english",
    counter: 0,
    
    get_language: function() {
        return `${this.firstName} knows ${this.language}`
    },
    
    set_language: function(lang){
        this.language = lang;
    },
    
    set_firstName: function(fName){
        this.firstName = fName;
    },
    get lang() {
      return `${this.firstName} knows ${this.language}`;
    },

    set lang(lang) {
        this.language = lang;
      },
    
      set multiply(value) {
        // this.counter = this.counter * value;
        this.counter *= value;
      },
};
  
document.getElementById("demo").innerHTML = person.lang;
document.getElementById("demo2").innerHTML = person.get_language();

person.language = "latvian";
person.firstName = "Jānis";
document.getElementById("demo3").innerHTML = person.get_language();

person.set_language("lithuanian");
person.set_firstName("Židrunas");
document.getElementById("demo4").innerHTML = person.get_language();

// Define setters and getters
Object.defineProperty(person, "reset", {
    get: function () {
      this.counter = 0;
    },
  });
  Object.defineProperty(person, "increment", {
    get: function () {
      // this.counter = this.counter + 1;
      this.counter++;
    },
  });
  Object.defineProperty(person, "decrement", {
    get: function () {
      this.counter--;
    },
  });
  Object.defineProperty(person, "add", {
    set: function (value) {
      this.counter += value;
    },
  });
  Object.defineProperty(person, "subtract", {
    set: function (value) {
      this.counter -= value;
    },
  });
  
  Object.defineProperty(person, "test_get_with_parameter", {
    // get: function (value) {
    get: function () {
      //console.log("output from test_get_with_parameter: "+value);
      console.log("output from test_get_with_parameter: " + this.counter);
    },
  });
  
  Object.defineProperty(person, "test_set_with_parameters", {
    // set: function (value1,value2) {
      set: function ([value1, value2]) {
      console.log("output from test_set_with_parameters: " + value1);
      console.log("output from test_set_with_parameters: " + value2);
      console.log("output from test_set_with_parameters: " + this.counter);
    },
  });
  
  console.log(person);
  
  person.reset;
  console.log(person.counter);
  person.add = 5;
  console.log(person.counter);
  person.subtract = 1;
  console.log(person.counter);
  person.increment;
  console.log(person.counter);
  person.decrement;
  console.log(person.counter);
  person.multiply = 4;
  console.log(person.counter);
  
  //person.test_get_with_parameter = 100;
  person.test_get_with_parameter;
  console.log(person.counter);
  
  //person.test_set_with_parameters = 300, 400;
  person.test_set_with_parameters = [300, 400];
  console.log(person.counter);