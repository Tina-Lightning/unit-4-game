var randomWordArray = [
    "hearts",
    "shootingstars",
    "horseshoes",
    "clovers",
    "moons",
    "rainbows",
    "redballoons",
    "potsofgold",
    "greenhats"
];

// choose a random word from the array above

function chooseWord() {
    randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
    console.log(randomWord);
}

// some globally defined variables
var count = 12;
var wins = 0;
var losses = 0;
var answerArray = [];
var guessedArray = [];

function startGame() {
    chooseWord();
    answerArray = [];
    guessedArray = [];
    count = 12;
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('lettersGuessed').innerHTML = guessedArray;
    for (var i = 0; i < randomWord.length; i++) {
        // take the random word and replaces the letters with underscores
        answerArray[i] = "_";
    }
    // put the underscores in a string
    document.getElementById("answer").innerHTML = answerArray.join(" ");;
}

startGame();

document.onkeyup = function (event) {
    console.log(answerArray);
    // here we get the letter the user types
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // check to make sure it's a letter
    if (/[0-9-_ ]/.test(userGuess)) {
        alert("That's not a letter");
    }
    else {
        for (var i = 0; i < randomWord.length; i++) {
            // if the random word contains the userGuessed letter
            if (randomWord[i] === userGuess) {
                // assign it to the letter
                answerArray[i] = userGuess;
            }
        }
        // here we count how many guesses have been made
        count--;
        document.getElementById("counter").innerHTML = count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }

    // here's what happens if you WIN
    if (answerArray.includes("_")) {

    } else {
        wins++;
        count = 12;
        document.getElementById('counter').innerHTML = count;
        startGame();
        return; // keeps the code further down the page from running
    }

    // here's what happens if you LOSE
    if (count < 1) {
        losses++;
        count = 12;
        document.getElementById('counter').innerHTML = count;
        startGame();
        return;
    }

    // here's what happens when you guess letters

    // this makes sure letters arent entered in the array twice
    if (guessedArray.indexOf(userGuess) >= 0) {

    } 
    // this adds the letters to the guessed letters array
    else if (count >= 0 ) {
        guessedArray.push(userGuess);
        document.getElementById('lettersGuessed').innerHTML = guessedArray.join(", ");
        console.log(guessedArray);
    }

}