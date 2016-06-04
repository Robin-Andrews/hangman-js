window.addEventListener('load', init);

function init(){
	// initialise variables and game state
	plays = 0;
	stage = -1;
	allWords = [
	"we",
	"cat",
	"goldfish",
	"monkey",
	"island",
	"sky",
	"house",
	];

	// elements
	boardDiv = document.getElementById("boardDiv");
	gallows = document.getElementById("gallowsDiv");
	ui = document.getElementById("uiDiv");
	inputField = document.getElementById("guessInput");
	// make enter key work to submit as well as button
	inputField.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      main();
    }
});
	// set board and display
	setBoard();
	displayBoard();
}

function setBoard(){
	var wordPos = Math.floor(Math.random() * (allWords.length));
	console.log(wordPos);
	word = allWords[wordPos];//len allwords +1
	board = "_". repeat(word.length);
	console.log(word); // for debugging only
}

function main(){
	var guess = document.getElementById("guessInput").value;
	guessedLetter = false;
	board = board.split('');
	for(var i = 0; i < word.length; i++){
		if (word[i] == guess){
			board[i] = guess;
			guessedLetter = true;
		}
	}
	board = board.join('');
	// check if game is won and if so, display success message
	if (hasWon()){
		displayBoard();
		success();
	} else if (guessedLetter){ 
	// check if guessed letter is in secret word
		displayBoard();
		inputField.value = "";
		inputField.focus();
	} else {
		// display next image
		stage += 1;
		displayGallows(stage);
		inputField.value = "";
		inputField.focus();
	}
}

function displayGallows(stage){
	// 
	imageFile = "img/"+"hangman-"+stage+".png";
	console.log("stage: " + stage);
	console.log(imageFile);
	gallowsDiv.innerHTML = `<img width="150" height="150" class='gallowsImage' src='${imageFile}'>`;
	if(stage == 6){
		fail();
	}
}

function displayBoard(){
	boardDiv.innerHTML = board;
}

function success(){
	gallowsDiv.innerHTML = "Yay, you guessed<br>the word!";
}

function fail(){
	boardDiv.style.letterSpacing = "normal";
	boardDiv.innerHTML = "Oh dear!";
}

function hasWon(){
	// check if game has been won
	if(board == word){
		return true;
	} else {
		return false;
	}
}
/* to do
add reset button
display used letters
increase word list
refactor as OOP?
finish commenting
rationalise variable/function names
push to git
submit for review
write again in PHP and Python
*/