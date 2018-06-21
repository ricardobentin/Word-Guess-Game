var wordClues = ["Colombia", "Peru"];
var word;
var pictureClues = new Array();
    pictureClues[0] = new Image();
    pictureClues[0].src = "./assets/images/Colombia.jpg";
    pictureClues[1] = new Image();
    pictureClues[1].src = "./assets/images/Peru.jpg";
var picture;
var computerChoice = [];
var wins = 0;
var losses = 0;
var guessesLeft= 9;
//logic for the computer to guess between the items in wordClues and PictureClues arrays randomly
var computerGuess = Math.floor(Math.random()* pictureClues.length);
computerChoice.push(computerGuess);

//set the wordclues and pictureClues to the index set by computerGuess

word = wordClues[computerChoice];
picture = pictureClues[computerChoice];

document.querySelector("#word").innerHTML = word;
document.querySelector("#image").innerHTML = picture;

//set a variable blanks to the length of the word that we need to blank out
var blanks = word.length

var blankReplace = []

blankReplace.push(blanks)