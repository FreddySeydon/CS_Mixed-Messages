PLANNING

Message Types:
- Your favorite Dinosaur is [random Dinosaur]
- You get eaten by a [carnivore] on [date]
- You get stomped on by a [herbivore] on [date]
- You tamed a [random dinosaur] and called it [random Name]

Variables: 
- carnivores
- herbivores
- dinoNames
- dates

Functions:
randomNum
- gets random number between two values (min, max)
-> Two values being the length of the array I want the Text snippet from arr.length
- Min always 0
- Max = arr.length

First:
textSnips.length -> randomNum max
-> results to array position (first text snippet)

textAssambly {
    let textPos //random number in between array range = randomNum(0, (textSnips.length + 1) //+1 because max is exclusive
    let randomMessage = textSnips[textPos]
}

console.log(textSnips[])


Learnings: 
- I don't need to add +1 to my max number because I dont need to include the max number, since arrays start at 0.
- I can't declare a variable with the same name in a switch statement even if the statement creating the variable isn't launched. -> Why?
- To make it more readable in case 3, I could have created variables that store the value of the array number of that specific text snippet, name etc. I need eg. "dinoName[2]" and then concatenated them in the console.log.