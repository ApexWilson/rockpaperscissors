// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('#shoot').click(function(){
    let inputVal = $('#input').val
    $('#userChoice').text(inputVal);
    $('#computerChoice').text(Math.floor(Math.random().toString(36).substring("Rock","Paper","Scissors")));
    if(inputVal === "Rock" && computerChoice === "Scissors"){
            winner = "Player";
        }
        if(inputVal === "Rock" && computerChoice === "Paper"){
            winner = "Computer"
        }
        if(inputVal === "Rock" && computerChoice === "Rock"){
            winner = "No one wins"
        }
        if(inputVal === "Scissors" && computerChoice === "Scissors"){
            winner = "No one wins"
        }
        if(inputVal === "Scissors" && computerChoice === "Paper"){
            winner = "Player";
        }
        if(inputVal === "Scissors" && computerChoice === "Rock"){
            winner = "Computer"
        }
        if(inputVal === "Paper" && computerChoice === "Scissors"){
            winner = "Computer"
        }
        if(inputVal === "Paper" && computerChoice === "Paper"){
            winner = "No one wins"
        }
        if(inputVal === "Paper" && computerChoice === "Rock"){
            winner = "Player";
        }
        $('#result').text(winner + " " + "Wins!");
});
