// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('#shoot').click(function(){
    let inputVal = $('#input').val();

    $('#userChoice').text(inputVal);
    var random = Math.ceil(Math.random()*10);
    if (random > 6 ){
        $('#computerChoice').html("Scissors");
    }
    else if (random > 3 ){
        $('#computerChoice').html("Paper");
    }
    else{ 
        $('#computerChoice').html("Rock");
    }
    let computerChoice = $('#computerChoice').text();
    let winner;
    if(inputVal === "Rock" && computerChoice === "Scissors"){
            winner = "Player";
        }
        else if(inputVal === "Rock" && computerChoice === "Paper"){
            winner = "Computer"
        }
        else if(inputVal === "Scissors" && computerChoice === "Paper"){
            winner = "Player";
        }
        else if(inputVal === "Scissors" && computerChoice === "Rock"){
            winner = "Computer"
        }
        else if(inputVal === "Paper" && computerChoice === "Scissors"){
            winner = "Computer"
        }
        else if(inputVal === computerChoice){
            winner = "No one"
        }
        else if(inputVal === "Paper" && computerChoice === "Rock"){
            winner = "Player";
        }else{
            winner = "No one"
        }
        $('#result').text(winner + " " + "Wins!");
        console.log(winner);
});
