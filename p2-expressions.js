/*
    CIT 281 Project 2
    Name: Daphne Carwin
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
let minLength;
let maxLength;
let randomString= "";

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger= function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// returns a random lowercase letter of the alphabet 
const getRandomLetter= function(){
    let letter = alphabet[Math.floor(Math.random()*27)]
    return letter;

}

// returns a random length string 
const getRandomString= function(minLength,maxLength){
    for(let x= minLength; x<maxLength; x++){
        randomString += getRandomLetter();
    }
    return randomString;
}

// returns a string in ascending order
const getSortedString= function(string){
    return string.split("").sort().toString(); 
}


 for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

console.log(getSortedString(getRandomString(10,20)));
