let player = {
	name: "Sudeepta",
	chips: 190,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
	// return a value between 1-13
	let num = Math.random() * 13; //0-12.999999999...
	let floornum = Math.floor(num) + 1;
	// in blackjack Ace is count as 11 & J,K,Q count as 10
	if (floornum === 1) {
		return 11;
	} else if (floornum === 11 || floornum === 12 || floornum === 13) {
		return 10;
	} else {
		return floornum;
	}
}

function renderGame() {
	if (sum <= 20) {
		message = "Do You want to Draw One More Card?";
		hasBlackjack = false;
	} else if (sum === 21) {
		message = "You have Got Blackjack";
		hasBlackjack = true;
	} else {
		message = "You are out of the game";
		hasBlackjack = false;
		isAlive = false;
	}
	messageEl.textContent = message;
	sumEl.textContent = "Sum : " + sum;
	// Renders all the cards in the game
	cardEl.textContent = "Cards : ";
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " ";
	}
}
function startGame() {
	isAlive = true;
	let firstcard = getRandomCard();
	let secondcard = getRandomCard();
	cards = [firstcard, secondcard];
	sum = firstcard + secondcard;

	renderGame();
}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let newCard = getRandomCard();
		cards.push(newCard);
		sum += newCard;
		renderGame();
	}
}
