"use strict";

console.log("Hello, test");

const herbivores = ["Ankylosaur", "Brontosaur", "Parasaur", "Diplodocus", "Paracer", "Iguanodon", "Beelzebufo", "Dodo"];
const carnivores = ["T-Rex", "Raptor", "Carnotaurus", "Daeodon", "Direwolf", "Giganotosaur", "Hyaenodon", "Terror Bird"];
const dinoNames = ["Cayden", "Sauri", "Ernest", "Jarrett", "Tiffani", "Dusty", "Rowina", "Lorin", "Blanche"]
const dinoGender = ["Male", "Female", "Genderfluid"]
const textSnips = ["Your favorite Dinosaur is ", "You get eaten by a ", "You get stomped on by a ", "You tamed a "];
// console.log(carnivores.length);

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
//   }
  
//   console.log(randomDate(new Date(2012, 0, 1), new Date()))

// function getRandomDate() {
//     const maxDate = Date.now();
//     const timestamp =
// }

// Get random Number 
// function randomNum() {
//     let randomNum = Math.random()*10
//     randomNum = Math.ceil(randomNum);
//     return randomNum
// }

function randomNum(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max+1) + 0)
}

console.log(dinoNames.length);
console.log(randomNum(dinoNames.length));