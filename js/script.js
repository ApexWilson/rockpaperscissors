// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('#shoot').click(function(){
    let inputVal = $('#input').val().toLowerCase();

    $('#userChoice').text(inputVal);
    var random = Math.ceil(Math.random()*10);
    if (random > 6 ){
        $('#computerChoice').html("scissors");
    }
    else if (random > 3 ){
        $('#computerChoice').html("paper");
    }
    else{ 
        $('#computerChoice').html("rock");
    }
    let computerChoice = $('#computerChoice').text();
    let winner;
    if(inputVal === "rock" && computerChoice === "scissors"){
            winner = "Player";
        }
        else if(inputVal === "rock" && computerChoice === "paper"){
            winner = "Computer"
        }
        else if(inputVal === "scissors" && computerChoice === "paper"){
            winner = "Player";
        }
        else if(inputVal === "scissors" && computerChoice === "rock"){
            winner = "Computer"
        }
        else if(inputVal === "paper" && computerChoice === "scissors"){
            winner = "Computer"
        }
        else if(inputVal === computerChoice){
            winner = "No one"
        }
        else if(inputVal === "paper" && computerChoice === "rock"){
            winner = "Player";
        }else{
            winner = "No one"
        }
        $('#result').text(winner + " " + "Wins!");
        console.log(winner);
});
