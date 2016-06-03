window.addEventListener('load', init);

function init(){
	// initialise variables and game state
	plays = 0;
	stage = -1;
	allWords = [
		"cat",
		"goldfish",
		"monkey",
		"island",
		"sky",
		"house"
		];

	boardDiv = document.getElementById("boardDiv");
	gallows = document.getElementById("gallowsDiv");
	ui = document.getElementById("uiDiv");

	setBoard();
	displayBoard();
}

function setBoard(){
	//word = allWords[Math.floor((Math.random() * 5) + 0)];
	word = "sssttt";
	board = "_". repeat(word.length);
}

function guessLetter() {
	console.log("Word: " + word);
    var guess = document.getElementById("guessInput").value;
    console.log("Guess: " + guess);
    board = board.split('');
    console.log("Split board before: " + board);
    guessedLetter = false;
    for(var i = 0; i < word.length; i++){
    	if (word[i] == guess){
    		board[i] = guess + " ";
    		guessedLetter = true;
    	}
    }
    board = board.join('');
    console.log("Board: " + board);
    console.log("guessedLetter: " + guessedLetter);
    return guessedLetter;
}

function displayGallows(stage){
	// 
	imageFile = "img/"+"hangman-"+stage+".png";
	console.log(imageFile);
	gallowsDiv.innerHTML = `<img width="150" height="150" class='gallowsImage' src='${imageFile}'>`;
}

function displayBoard(){
	boardDiv.innerHTML = board;
}

function main(){
 if(hasWon()){
    	success();
    } else {
    	stage += 1;
    	displayGallows(stage);
    }
}

function hasWon(){
	// check if game has been won
}