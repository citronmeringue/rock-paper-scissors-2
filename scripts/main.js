function computerPlay(){
    var array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random()*array.length)];
}

var playerScore = 0;
var computerScore = 0;
var imagePlayer = document.getElementById('img-player');
var imageComputer = document.getElementById('img-computer');

function playRound(playerSelection){
    //document.querySelector('#text').textContent =  "";
    const computerSelection =  computerPlay().toLowerCase();

    updateScore(playerSelection,computerSelection)

    imageUpdate(playerSelection,imagePlayer)
    imageUpdate(computerSelection, imageComputer)

    document.getElementById('score-player').innerHTML =" Player : " + playerScore
    document.getElementById('score-computer').innerHTML = "Computer : " + computerScore
    checkWin(playerScore, computerScore)

}

function imageUpdate(selection, matchingImage){
    if (selection === "paper"){
        matchingImage.src = './images/paper.png'
    }else if (selection === "rock"){
        matchingImage.src = './images/rock.png'
    }else if (selection === "scissors"){
        matchingImage.src = './images/scissors.png'
    }
}

function updateScore(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        document.querySelector('#text').textContent = "Draw ! Try again please !";
        return;
    }else{
        document.querySelector('#text').innerHTML =  "";
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
}

function checkWin(playerScore, computerScore){
    if(playerScore === 5){
        document.querySelector('#text').textContent = "Congrats ! You won !";
        playerScore = 0;
        computerScore = 0;
        Rock.removeEventListener('click', game)
        Paper.removeEventListener('click', game)
        Scissors.removeEventListener('click', game)
    } else if (computerScore === 5){
        document.querySelector('#text').textContent = "Sorry ! Computer won !";    
        playerScore = 0;
        computerScore = 0;
        Rock.removeEventListener('click', game)
        Paper.removeEventListener('click', game)
        Scissors.removeEventListener('click', game)
    }

}
function game(){
        const playerSelection = this.id.toLowerCase();
        playRound(playerSelection);
}




Rock.addEventListener('click', game);
Paper.addEventListener('click', game);
Scissors.addEventListener('click', game);



