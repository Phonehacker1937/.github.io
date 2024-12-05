function play(userChoice) {
    // Define possible choices
    const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    // Generate a random index and corresponding choice
    const randomIndex = Math.floor(Math.random() * possibleChoices.length);
    const randomChoice = possibleChoices[randomIndex];

    // Get references to HTML elements for updates
    const winnerElement = document.getElementById('Winner');
    const computerChoiceElement = document.getElementById('ComputerChoice');

    // Display the computer's choice
    computerChoiceElement.textContent = `Computer chose: ${randomChoice}`;

    // Determine the winner
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

