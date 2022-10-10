class Animal {}

// instantiate a new animal
// const buttons = new Animal();
// const marshmallow = new Animal();

console.log(buttons);
console.log(marshmallow);

// ADDING METHODS TO A CLASS
// Right now, our objects are empty and don't do anything. Let's add a method. What is great, is that we will add our code in one place, but it will update both of our objects. This keeps our code DRY (principle of don't repeat yourself).

class Animal {
    // adding properties to our objects using a constructor
    constructor() {
        this.type = "agama lizard";
        this.age = "4";
        this.color = "red";
        this.isFriendly = true;
    }
    // adding methods to a class and all its instances
  walk() {
    console.log("Clip clop, clip clop");
  }
  greet(otherBeing) {
    console.log(`Sniff sniff, ${otherBeing}`);
  }
}
const buttons = new Animal();
const marshmallow = new Animal();

console.log(buttons);
console.log(marshmallow);

buttons.walk();
marshmallow.walk();

buttons.greet("Fluffy");
marshmallow.greet("Patches");

/* VENDING MACHINE
* A vending machine is an object
* Has an array of snacks (make 3 snacks)  the snacks are objects that have a name and a price
* A vending machine has a function vend that allows user to enter the array postion (a number) of the snack and then the snack will be returned
* Be able to call vendingMachine.vend() with a valid integer to return a snack
*/
const vendingMachine = {
    snacks: [
      {
        name: "kitkat",
        price: 6,
      },
      {
        name: "sun chips",
        price: 7,
      },
      {
        name: "apple",
        price: 12,
      },
    ],
    vend(input) {
      console.log("vending", this.snacks[input]);
    },
  };
  
  vendingMachine.vend(1);

