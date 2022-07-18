let grades = [91, 66, 66, 84, 66];
let search = 66;

function searchGrade(grades, search) {
    for (var i = 0 ; i < grades.length ; i++) {
        if (grades[i] == search) {
            console.log(`The grade ${search} exists`);
            break;
        }
    }
}

searchGrade(grades, search);

/* function searchGrade(grades, search) {
    for (currentGrade of grades) {
        if (currentGrade == search) {
            console.log(`The grade ${search} exists`);
            break;
        }
    }
} */

// Call - uz aktuālo 
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  let x = person1.fullName.call(person2); 
  document.getElementById("demo").innerHTML = x; 

  // Bind - var uztaisīt kopiju (funkcijas aizņemšana - borrowing)
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  
  document.getElementById("demo2").innerHTML = fullName();

/* 
*call() gets invoked immediately whereas bind() returns a function that we can invoke later.
*call() takes additional arguments but bind() does not.
*call() doesn't make a copy of the function unlike bind(). 
*/

