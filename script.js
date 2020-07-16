let currentQuestion = 0;
let currentAnswer = 0;
let currentRightScore = 0;
let currentWrongScore = 0;
let startButton = document.querySelector('.start-button');
let score = document.querySelector('.score');
startButton.addEventListener('click', startGame);
let scoreRight = document.querySelector('.score-right');
let scoreWrong = document.querySelector('.score-wrong');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let flashcard = document.querySelector('#flashcard');
let controls = document.querySelector('#controls');
let form = document.querySelector('form');
let userInput = document.querySelector('.input');
let resetButton = document.querySelector('.reset-game');
resetButton.addEventListener('click', resetGame);
let rightScore = 10;
let wrongScore = 5;
form.addEventListener('submit', function (e) {
	e.preventDefault();
	let answer = cards[currentAnswer];
	// console.log(answer.a);
	// console.log(userInput.value);
	currentAnswer = currentAnswer + 1;
	// console.log(currentAnswer);
	nextCard.style.display = 'flex';
    form.style.display = 'none';
	if (answer.a === userInput.value) {
		document.querySelector('#flashcard').innerText = 'Correct!';
		scoreRight.innerText = ++currentRightScore;
        flashcard.style.background = 'green';
	} else {
		document.querySelector('#flashcard').innerText = 'Incorrect! ' + answer.a;
		scoreWrong.innerText = ++currentWrongScore;
        flashcard.style.background = 'red';
	}
	if (rightScore === currentRightScore) {
		document.querySelector('#flashcard').innerText = 'You have won the game!';
		nextCard.style.display = 'none';
		resetButton.style.display = 'block';
	} else if (wrongScore === currentWrongScore) {
        document.querySelector('#modal').style.display = 'block';
		nextCard.style.display = 'none';
		resetButton.style.display = 'block';
	}
});
let text = document.querySelector('.text');

let nextCard = document.querySelector('.next-card');
nextCard.addEventListener('click', theNextCard);
function theNextCard() {
	showQuestion();
	userInput.value = null;
	nextCard.style.display = 'none';
	form.style.display = 'flex';
	flashcard.style.background = 'white';
}

let questionContainer = document.querySelector('.question-container');
let answerContainer = document.querySelector('.answer-container');

var cards = [
	{ q: 'Civic', a: 'Honda' },
	{ q: 'Camry', a: 'Toyota' },
	{ q: 'Santa Fe', a: 'Hyundai' },
	{ q: 'Buick', a: 'Chevrolet' },
	{ q: 'Compass', a: 'Jeep' },
	{ q: 'Tribute', a: 'Mazda' },
	{ q: 'Outback', a: 'Subaru' },
	{ q: 'Escape', a: 'Ford' },
	{ q: 'Sierra', a: 'GMC' },
	{ q: 'Jetta', a: 'Volkswagen' },
	{ q: 'Benz', a: 'Mercedes' },
	{ q: 'M4', a: 'BMW' },
	{ q: 'Sorento', a: 'KIA' },
];

for (let i = cards.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * i);
	const temp = cards[i];
	cards[i] = cards[j];
	cards[j] = temp;
}

function startGame(e) {
	e.preventDefault();
	score.style.display = 'block';
	startButton.style.display = 'none';
    form.style.display = 'flex';
    userInput.value = null;
    showQuestion();
}

function showQuestion() {
	const question = cards[currentQuestion];
	console.log(question.q);
	currentQuestion = currentQuestion + 1;
	console.log(currentQuestion);
	flashcard.innerText = question.q;
}

function resetGame(e) {
    e.preventDefault();
    document.location.href = "";
}