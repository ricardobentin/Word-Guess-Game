//create an array of word clues
var wordClues = ["Algeria", "Bermuda", "Colombia", "Cyprus", "Kenya", "Liechtenstein", "Moldova", "Morocco", "Peru", "Philippines", "Qatar", "Tonga", "Tunisia", "Turkmenistan", "Vietnam"];
//create an array of picture clues that are in the same index as the word clue
var pictureClues = new Array();
pictureClues[0] = new Image();
pictureClues[0].src = "./assets/images/Algeria.jpg";
pictureClues[1] = new Image();
pictureClues[1].src = "./assets/images/Bermuda.jpg";
pictureClues[2] = new Image();
pictureClues[2].src = "./assets/images/Colombia.jpg";
pictureClues[3] = new Image();
pictureClues[3].src = "./assets/images/Cyprus.jpg";
pictureClues[4] = new Image();
pictureClues[4].src = "./assets/images/Kenya.jpg";
pictureClues[5] = new Image();
pictureClues[5].src = "./assets/images/Liechtenstein.jpg";
pictureClues[6] = new Image();
pictureClues[6].src = "./assets/images/Moldova.jpg";
pictureClues[7] = new Image();
pictureClues[7].src = "./assets/images/Morocco.jpg";
pictureClues[8] = new Image();
pictureClues[8].src = "./assets/images/Peru.jpg";
pictureClues[9] = new Image();
pictureClues[9].src = "./assets/images/Philippines.jpg";
pictureClues[10] = new Image();
pictureClues[10].src = "./assets/images/Qatar.jpg";
pictureClues[11] = new Image();
pictureClues[11].src = "./assets/images/Tonga.jpg";
pictureClues[12] = new Image();
pictureClues[12].src = "./assets/images/Tunisia.jpg";
pictureClues[13] = new Image();
pictureClues[13].src = "./assets/images/Turkmenistan.jpg";
pictureClues[14] = new Image();
pictureClues[14].src = "./assets/images/Vietnam.jpg";
var word;
var picture;
var computerChoice = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var hiddenWord = [];

//logic for the computer to guess between the items in wordClues and PictureClues arrays randomly
var computerGuess = Math.floor(Math.random() * pictureClues.length);
computerChoice.push(computerGuess);

//set the wordclues and pictureClues to the index set by computerGuess

word = wordClues[computerChoice];
picture = pictureClues[computerChoice];


//for loop to get the length of the word and replace it with a _ - THIS MIGHT BE MORE COMPLICATED
for (var i = 0; i < word.length; i++) {
    hiddenWord[i] = "_";
}

var remainingLetters = word.length;

//print the hidden word and the picture clue to the page
document.querySelector("#word").innerHTML = hiddenWord.join(" ");
document.querySelector("#image").appendChild(picture);

//capture the user's letters in a variable
// while (remainingLetters > 0) {
 
    document.onkeyup = function (event) {
        // Determine which key is pressed and store it in a variable called userGuess
        var userGuess = event.key;
            for (var h = 0; h < word.length; h++) {
                if (word[h] === userGuess) {
                    hiddenWord[h] = userGuess;
                    remainingLetters--;
                }
            }
            //print the hidden word and the picture clue to the page
            document.querySelector("#word").innerHTML = hiddenWord.join(" ");
            document.querySelector("#image").appendChild(picture);
            if (remainingLetters === 0)
                alert("Congratulations! The Flag is from "+word);
                //reset logic
                
            
    }
// }
