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

userWin = 0;  
function playRound(playerSelection, computerSelection)
{
	if(playerSelection == computerSelection)
	{
		message = "Tie! " + playerSelection + " ties with " + computerSelection + ". Choose to play again.";
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


function game()
{
	let userScore = 0;
	let computerScore = 0;
	while(userScore < 3 && computerScore < 3)
	{
		userInput = prompt("Rock, Paper, or Scissors?");
		computerInput = computerPlay();
		message = playRound(userInput, computerInput);
		console.log(message);

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
	}

	if(userScore == 3)
	{
		alert("You win!");
	}
	else
	{
		alert("You lose!");
	}
}