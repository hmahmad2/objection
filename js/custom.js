// var person = {
//    name: "Steve",
//    age: 42,
//    favoriteFood: "rats",
//    dislikes: ["turtles", "Spider-Man", "trees", "the Sun"],
//    changeName: function(newName) {
//       if (typeof newName == 'string') {
//          person.name = newName;
//       } else {
//          console.log("Please enter a valid name");
//       }
//    }
// };

// console.log(person);

// person.dislikes.forEach(function(unwanted) {
//    console.log(unwanted);
// });

// var bob = Object.create(person);

// bob.changeName("Gary");
// console.log(bob);

// function Person(name, age, favoriteFood, dislikes) {
//    this.name = name;
//    this.age = age;
//    this.favoriteFood = favoriteFood;
//    this.dislikes = dislikes;
// }

// var anton = new Person("Anton", 23, "Dark chocolate", "Freedom");
// console.log(anton);

class Person {
   constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
      // this.ownsPet = false;
      // this.likes = ["apples"];
      // this.dislikes = ["smog"];
   }

   aboutPerson = function() {
      return "My name is " + this.name + ", I am " + this.age +
         " years old, and I am a(n) " + this.job;
   }

   changeJob = function(newJob) {
      this.job = newJob;
   }
}

var tony = new Person("Greg", 19, "construction worker");
const p = document.createElement('p');
p.id = 'bob';
p.appendChild(document.createTextNode(tony.aboutPerson()));
document.querySelector('body').appendChild(p);

document.getElementById('bob').style.color = 'red';
// let newGuy = tony.aboutPerson();
// // console.log(newGuy);

// const p = document.createElement('p');
// p.id = 'orig';
// p.innerHTML = newGuy;
// // p.appendChild(document.createTextNode(newGuy));
// document.querySelector('body').appendChild(p);

// // console.log(p);

// // let differentJob = tony;
// tony.changeJob('accountant');
// let differentJob = tony.aboutPerson();
// const j = document.createElement('p');
// j.id = 'altJob';
// j.innerHTML = differentJob;
// document.querySelector('body').appendChild(j);

// // console.log(j.id);
// // console.log(p.id);

// // document.querySelector('orig').style.color = 'red';
// // document.querySelector('body altJob').style.color = 'green';
// console.log(document.querySelector('orig'));