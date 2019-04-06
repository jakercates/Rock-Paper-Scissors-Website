let userScore = 0;
let computerScore = 0;
let userWin = 0;

//returns the computer's choice randomly
function computerPlay()
{
	choiceNum = Math.floor(Math.random() * 3);
	let computerChoice = "";

	switch(choiceNum) 
	{
		case 0:
		computerChoice = "rock";
		break;

		case 1: 
		computerChoice = "paper";
		break;

		case 2:
		computerChoice = "scissors";
		break;	
	}
	return computerChoice; 
}

//returns a message depicting the result, and updates userWin with 0,1 or 2. 
//0 being tie, 1 being user win, 2 being cpu win.
function playRound(playerSelection, computerSelection)
{

	if(playerSelection == computerSelection)
	{
		message = "Tie! Select again.";
		userWin = 0;
	}

	else if(playerSelection == "rock" && computerSelection == "scissors")
	{
		message = "You Win! Rock beats scissors."; 
		userWin = 1;
	}

	else if(playerSelection == "rock" && computerSelection == "paper")
	{
		message = "You Lose! Rock loses to paper.";
		userWin = 2;
	}

	else if(playerSelection == "paper" && computerSelection == "rock")
	{
		message = "You Win! Paper beats rock.";
		userWin = 1;
	}

	else if(playerSelection == "paper" && computerSelection == "scissors")
	{
		message = "You Lose! Paper loses to scissors.";
		userWin = 2;
	}

	else if(playerSelection == "scissors" && computerSelection == "rock")
	{
		message = "You Lose! Scissors loses to rock.";
		userWin = 2;
	}
	else
	{
		message = "You Win! Scissors beats paper.";
		userWin = 1; 
	}
	return message;
}

//takes the mouse event and determinees button pressed(rock,paper,scissors)
//sets the message, updates the score, and DOM manipulation to reflect changes
function userPicked(e)
{
	computerSelection = computerPlay();

	if(e.target.className == "paperBtn")
	{
		message = playRound('paper', computerSelection);
	}
	else if(e.target.className == "rockBtn")
	{
		message = playRound('rock', computerSelection);
	}
	else
	{
		message = playRound('scissors', computerSelection);
	}

	par = document.querySelector('#pMessage');
	par.textContent = message;	
	switch(userWin)
	{
		case 0:
		break;

		case 1:
		userScore = userScore + 1;
		break;

		case 2:
		computerScore = computerScore + 1;
		break; 
	}

	score1 = document.querySelector('.score1');
	score2 = document.querySelector('.score2');
	score1.textContent = userScore;
	score2.textContent = computerScore; 
}

paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', userPicked);
rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', userPicked);
scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', userPicked);