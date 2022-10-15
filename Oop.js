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

  //When we make a new class and add properties inside of the constructor, we use this to be sure we are referencing the properties inside this class.

// MAKING INSTANCES OF CLASS CUSTOMIZABLE AND SETTING DEFAULT VALUES
class Animal {
    constructor(name, type, color, walkStyle, isFriendly = true) {
      this.name = name;
      this.type = type;
      this.age = 4;
      this.color = color;
      this.isFriendly = isFriendly;
      this.walkStyle = walkStyle || "Walka, walka";// USING SHORT CIRCUTING OR TERNARY HERE ALSO WORKS FINE
    }
    walk() {
      console.log(this.walkStyle);
    }
    greet(otherBeing) {
      console.log(`Sniff sniff, ${otherBeing}`);
    }
  }
  const buttons = new Animal("Buttons", "turtle", "green");
  const fluffy = new Animal("Fluffy", "cat", "calico", "Strut, strut", false);
  const marshmallow = new Animal(
    "Marshmallow",
    "miniature horse",
    "white",
    "Clip clop, clip clop"
  );
  
  console.log(buttons);
  console.log(fluffy);
  console.log(marshmallow);

  class Animal {
    constructor(name, type, color, walkStyle, isFriendly = true) {
      this.name = name;
      this._type = type;
      this.age = 4;
      this.color = color;
      this.isFriendly = isFriendly;
      this.walkStyle = walkStyle || "Walka, walka";
    }
    walk() {
      console.log(this.walkStyle);
    }
    greet(otherBeing) {
      console.log(`Sniff sniff, ${otherBeing}`);
    }
    ageUp() {
      this.age++;
    }
  }
  const buttons = new Animal("Buttons", "turtle", "green");
  const fluffy = new Animal("Fluffy", "cat", "calico", "Strut, strut", false);
  const marshmallow = new Animal("Marshmallow", "miniature horse", "white");
  
  buttons.ageUp();
  console.log(buttons);
  console.log(buttons._type);

  class Animal {
    constructor(name, type, color, walkStyle, isFriendly = true) {
      this.name = name;
      this._type = type;
      this.age = 4;
      this.color = color;
      this.isFriendly = isFriendly;
      this.walkStyle = walkStyle || "Walka, walka";
    }
    walk() {
      console.log("Clip clop, clip clop");
    }
    greet(otherBeing) {
      console.log(`Sniff sniff, ${otherBeing}`);
    }
    // objects interacting with other objects
    classyGreeting(otherClassyBeing) {
      console.log(`Howdy ${otherClassyBeing.name}`);
    }
    ageUp() {
      this.age++;
    }
  }
  const buttons = new Animal("Buttons", "turtle", "green");
  const fluffy = new Animal("Fluffy", "cat", "calico", "Strut, strut", false);
  const marshmallow = new Animal("Marshmallow", "miniature horse", "white");
  
  buttons.classyGreeting(marshmallow);
  marshmallow.classyGreeting(buttons);
