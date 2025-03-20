// Iteration 1: Names and Input

const hacker1 = "Alberto";
console.log(`The driver's name is ${hacker1} `);

const hacker2 = "Jose";
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals

if (hacker1 > hacker2) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1 < hacker2) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops

let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += hacker1[i] + " ";
}
console.log(driver.toUpperCase());

let navigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator += hacker2[i];
}
console.log(navigator);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = "Lorem Ipsum is simply dummy text is of isthe printing and typesetting isindustry."
let wordsNum = longText.length
let wordSearch = "is"
console.log(wordsNum)
let counter = 0
for(let i=0; i<wordsNum; i++){
    if(longText.indexOf(wordSearch, i) != -1){
        counter++
        i=longText.indexOf(wordSearch, i)+wordSearch.length
    }
}
console.log(counter)

// Bonus 2

let phraseToCheck = 'A man, a plan, a canal, Panama!'
let phraseJoined = phraseToCheck.replace(/ /g,"")

let reversephrase = ''

for(let i=phraseJoined.length-1; i>=0; i--){
  reversephrase += phraseJoined[i]
}

if(phraseJoined === reversephrase) {
    console.log("It's a Palindrome!")
} else {
    console.log("It's not a Palindrome")
}