// declare global variables
var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber;

var winMsg = "You won!"
var lossMsg = "You lost :("

// create a start game function that runs when the page loads, and when you win or lose
function startGame() {

    // this empties the crystals ID of its values, which will be reset in a moment
    $("#crystals").empty();

    // this is an array of the crystal images
    var images = [
        "assets/images/BlueGem.png",
        "assets/images/GreenGem.png",
        "assets/images/PurpleGem.png",
        "assets/images/RedGem.png"
    ];

    // here we determine the random number the player is trying to hit
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    // then we show that random number in the browser
    $("#number-to-guess").text(targetNumber);

    // unecessary code that makes the console log easier to read 
    console.log("-------------");
    console.log(targetNumber);
    console.log("-------------");

    // here is the for loop that will create the images, give them backgrounds, and assign them the values we will use in our game

    for (var i = 0; i < 4; i++) {

        // this generates a random number between 1-12 four times that gets assigned to each crystal
        var randomNum = Math.floor(Math.random() * 11) + 1;
        console.log(randomNum);

        // here we're creating the images, giving them a class, and giving them the attribute of the random numbers created above 
        var crystal = $("<div>");
            crystal.attr({
            "class": "crystal-image",
            "data-crystalvalue": randomNum
        });

        // this assigns the different images above from the array to the backgrounds
        crystal.css({
            "background-image" : "url("+images[i]+")"
        });

        // here we actually add those crystal images with values to the broswer within the crystals ID
        $("#crystals").append(crystal);

    };

    // update the score with the current counter (should be 0)
    $("#current-score").text(counter);

}

// run the startGame function when the page loads to set everything up
startGame();

// this is the code that runs everytime you click a crystal
$(document).on('click', ".crystal-image", function () {

    // this code takes the random number assigned to the crystals and converts it into an integer so we can use it
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // now we're adding the values of the crystals to the counter (why we needed integers)
    counter += crystalValue;

    // update the score everytime we add to it
    $("#current-score").text(counter);

    // this is code that runs if you WIN
    if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#message").text(winMsg);
        counter = 0;
        startGame();
    }

    // this is code that runs if you LOSE
    else if (counter >= targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#message").text(lossMsg);
        counter = 0;
        startGame();
    }

});