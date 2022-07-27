function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName;
      };
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // The prototype property allows you to add new methods to objects constructors
  Person.prototype.nationality = "English";
  

  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
  
  Person.prototype.Father = function() {
    return `My fathers name is ${this.firstName} ${this.lastName} and he is ${this.age} 
    age old`;
  };
  
