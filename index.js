console.log("Hello there!");

const herbivores = ["Ankylosaur", "Brontosaur", "Parasaur", "Diplodocus", "Paracer", "Iguanodon", "Beelzebufo", "Dodo"];
const carnivores = ["T-Rex", "Raptor", "Carnotaurus", "Daeodon", "Direwolf", "Giganotosaur", "Hyaenodon", "Terror Bird"];
const dinoNames = ["Cayden", "Sauri", "Ernest", "Jarrett", "Tiffani", "Dusty", "Rowina", "Lorin", "Blanche"]
const dinoGender = ["Male", "Female", "Genderfluid"]
const textSnips = ["Your favorite Dinosaur is a ", "You get eaten by a ", "You get stomped on by a ", "You tamed a "];
const allDinos = herbivores.concat(carnivores);
// console.log(carnivores.length); FOR DEBUGGING

function randomNum(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max))
}

function textAssembly() {
    let snipPos = randomNum(textSnips.length);
    // console.log(snipPos); FOR DEBUGGING
    switch (snipPos) {
        case 0:
            // let allDinos = herbivores.concat(carnivores);
            let dinoPos = randomNum(allDinos.length);
            // console.log("DINOPOS: " + dinoPos); FOR DEBUGGING
            console.log(textSnips[snipPos] + allDinos[dinoPos] + ".");
            break;

        case 1:
            let carniPos = randomNum(carnivores.length);
            console.log(textSnips[snipPos] + carnivores[carniPos] + ".");
            break;
        
        case 2:
            let herbiPos = randomNum(herbivores.length);
            console.log(textSnips[snipPos] + herbivores[herbiPos] + ".");
            break;
        
        case 3: 
            // let allDinos = herbivores.concat(carnivores);
            let tamedPos = randomNum(allDinos.length);
            let namedPos = randomNum(dinoNames.length);
            let genderPos = randomNum(dinoGender.length);
            console.log(`${textSnips[snipPos]}${allDinos[tamedPos]} and named it ${dinoNames[namedPos]}. ${dinoNames[namedPos]}'s gender is ${dinoGender[genderPos]}.`)
            break;

        default: 
            console.log("Something went wrong, sorry...")
    }
}

textAssembly();