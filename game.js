function play(userChoice) {
    const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const randomIndex = Math.floor(Math.random() * possibleChoices.length);
    const randomChoice = possibleChoices[randomIndex];

    const winnerElement = document.getElementById('Winner');
    const computerChoiceElement = document.getElementById('ComputerChoice');

    computerChoiceElement.textContent = `Computer chose: ${randomChoice}`;

    if (userChoice === randomChoice) {
        winnerElement.textContent = 'It\'s a Draw!';
    } else if (
        (userChoice === 'rock' && (randomChoice === 'scissors' || randomChoice === 'lizard')) ||
        (userChoice === 'paper' && (randomChoice === 'rock' || randomChoice === 'spock')) ||
        (userChoice === 'scissors' && (randomChoice === 'paper' || randomChoice === 'lizard')) ||
        (userChoice === 'lizard' && (randomChoice === 'spock' || randomChoice === 'paper')) ||
        (userChoice === 'spock' && (randomChoice === 'scissors' || randomChoice === 'rock'))
    ) {
        winnerElement.textContent = 'You Win!';
    } else {
        winnerElement.textContent = 'You Lose!';
    }
}

