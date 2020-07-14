let currentQuestion = 0;
let currentAnswer = 0;
let startButton = document.querySelector('.start-button');
let score = document.querySelector('.score');
startButton.addEventListener('click', startGame);

let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let scoreRight = document.querySelector('.score-right');
let scoreWrong = document.querySelector('.score-wrong');
let flashcard = document.querySelector('#flashcard');
// let cardStack1 = document.querySelector('.card-stack-1');
// let cardStack2 = document.querySelector('.card-stack-2');
// let cardStack2 = document.querySelector('.card-stack-3');
let form = document.querySelector('form');
let userInput = document.querySelector('.input');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let answer = cards[currentAnswer];
    // console.log(answer.a);
    // console.log(userInput.value);
    currentAnswer = currentAnswer + 1;
    // console.log(currentAnswer);
	if (answer.a === userInput.value) {
		alert('Correct!');
	// 	right.textContent++;
	// 	userInput.value = null;
	} else {
	    alert('Incorrect! ' + answer.a);
	// 	wrong.textContent++;
	// 	userInput.value = null;
    }
    // flashcard.innerText = answer.a;
});
let text = document.querySelector('.text');

let nextCard = document.querySelector('.next-card');
nextCard.addEventListener('click', theNextCard);
function theNextCard() {
	// message.style.display = 'none';
    showQuestion();
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
];

function startGame(e) {
	e.preventDefault();
	score.style.display = 'block';
	startButton.style.display = 'none';
    flashcard.style.display = 'block';
	showQuestion();
}

function showQuestion() {
	const question = cards[currentQuestion];
	console.log(question.q);
	currentQuestion = currentQuestion + 1;
	console.log(currentQuestion);
    flashcard.innerText = question.q;
    
}
