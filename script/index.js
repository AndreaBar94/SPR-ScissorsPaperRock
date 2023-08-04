const getRandomChoice = () => {
	let choices = ['scissors', 'paper', 'rock'];
	return choices[Math.floor(Math.random() * choices.length)];
};

const showChoice = (elementId, choice) => {
	document.getElementById(elementId).innerHTML = `
    <div class="mx-5 my-2 py-2 border rounded slideFromLeft">
        <h4 class="text-center">${elementId === 'userChoice' ? 'Your' : 'PC'} choice:</h4>
        <p class="text-center">
           <img src="assets/imgs/${choice}.svg" width="40px" alt="${choice}"> </p>
    </div>
    `;
};

const showResult = (result) => {
	document.querySelector('.results').innerHTML = result;
};

const playGame = (userChoice) => {
	const pcChoice = getRandomChoice();
	showChoice('userChoice', userChoice);
	showChoice('pcChoice', pcChoice);

	if (userChoice === pcChoice) {
		showResult(`<p class="mx-5 my-2 py-2 border rounded text-bg-warning results">DRAW!</p>`);
	} else if (
		(userChoice === 'scissors' && pcChoice === 'paper') ||
		(userChoice === 'paper' && pcChoice === 'rock') ||
		(userChoice === 'rock' && pcChoice === 'scissors')
	) {
		showResult(`<p class="mx-5 my-2 py-2 border rounded text-bg-success results">YOU WIN!</p>`);
	} else {
		showResult(`<p class="mx-5 my-2 py-2 border rounded text-bg-danger results">YOU LOSE!</p>`);
	}
};
