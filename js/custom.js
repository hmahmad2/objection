var person = {
   name: "Steve",
   age: 42,
   favoriteFood: "rats",
   dislikes: ["turtles", "Spider-Man", "trees", "the Sun"],
   changeName: function(newName) {
      if (typeof newName == 'string') {
         person.name = newName;
      } else {
         console.log("Please enter a valid name");
      }
   }
};

console.log(person);

person.dislikes.forEach(function(unwanted) {
   console.log(unwanted);
});

var bob = Object.create(person);

bob.changeName("Gary");
console.log(bob);

function Person(name, age, favoriteFood, dislikes) {
   this.name = name;
   this.age = age;
   this.favoriteFood = favoriteFood;
   this.dislikes = dislikes;
}

var anton = new Person("Anton", 23, "Dark chocolate", "Freedom");
console.log(anton);