// JS Objects
// objektu var nodefinēt ar figuriekavu palīdzību - {};
// {name:value}
// objekta literālis (ang. literal)

const car = {type:"Fiat", model:"500", color:"white"};
car.transmission = "Automatic";

// objekta īpašibas (property) izgūšana
console.log(car.model);
console.log(car["model"]);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  // this - griezīsies pie objekta funkcijā

  const market = {
    product: "dators",
    priceNet: 100,
    productTax: 21,
    priceWithTax: (100 * 21) / 100,
    priceGala: 100 + ((100 * 21)/100),
    priceGross : function() {
        return this.product + " " + "maksā" + " " + this.priceGala + " " + "EUR"; 
    }
  };