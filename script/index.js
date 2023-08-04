const getRandomChoice = () => {
	let choices = ['scissors', 'paper', 'rock'];
	return choices[Math.floor(Math.random() * choices.length)];
};

const showChoice = (elementId, choice) => {
	document.getElementById(elementId).innerHTML = `
            <h4>${elementId === 'userChoice' ? 'Your' : 'PC'} choice:</h4>
			<p>${choice}</p>
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
		showResult(`<p>DRAW!</p>`);
	} else if (
		(userChoice === 'scissors' && pcChoice === 'paper') ||
		(userChoice === 'paper' && pcChoice === 'rock') ||
		(userChoice === 'rock' && pcChoice === 'scissors')
	) {
		showResult(`<p>YOU WIN!</p>`);
	} else {
		showResult(`<p>YOU LOSE!</p>`);
	}
};
