function computerPlay(){
    var array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random()*array.length)];
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection){
    document.querySelector('#text').textContent =  "";
    const computerSelection =  computerPlay().toLowerCase();

    if(playerSelection == computerSelection){
        //console.log("Draw, Redo round");
        document.querySelector('#text').textContent = "Draw ! Try again please !";
        return;
    }else{

        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                computerScore = computerScore + 1;
            } else if(computerSelection == "scissors"){
                playerScore = playerScore + 1;
            } 
        }
        if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                playerScore = playerScore + 1;
            } else if(computerSelection == "scissors"){
                computerScore = computerScore + 1;
            } 
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "paper"){
                playerScore = playerScore + 1;
            } else if(computerSelection == "rock"){
                computerScore = computerScore + 1;

            } 
        }
    }
  
    document.getElementById('result').textContent = "Computer score : "+ computerScore + " Player score : "+ playerScore;

    if(playerScore === 5){
        document.querySelector('#result').textContent = "Congrats ! You won !";

    } else if (computerScore === 5){
        document.querySelector('#result').textContent = "Sorry ! Computer won !";    

    }
}


function game(){
    const playerSelection = this.id.toLowerCase();
        playRound(playerSelection);

}

Rock.addEventListener('click', game);
Paper.addEventListener('click', game);
Scissors.addEventListener('click', game);



