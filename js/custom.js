var person = {
   name: "Steve",
   age: 42,
   favoriteFood: "rats",
   dislikes: ["turtles", "Spider-Man", "trees", "the Sun"]
};

console.log(person);

person.dislikes.forEach(function(unwanted) {
   console.log(unwanted);
});