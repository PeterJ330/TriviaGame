
var questionsBank = ["Question One",
    "Question Two",
    "Question Three",
    "Question Four",
    "Question Five"]

var answerChoices = ["A1", "A2", "A3", "A4", "A5"]

var wrongAnswerChoices = ["W1", "W2", "W3", "W4", "W5"]

var intervalId;
var questionTime = 5;
var answerTimer = 5;
var counter = 0;
var questionsRight = 0;
var questionsWrong = 0;
var rightAnswer = false;
var wrongAnswer = false;

// var lowTimer = document.getElementById("#questiontimer");


$(document).ready(function () {
    //========================================================================================================================================================================
    // Store functions in this section that set up display on initial load of webpage
    $(".jumbotron").hide();
   // setTimeout(right, 1000 * 6);
    //setTimeout(wrong, 1000 * 6);
    //setTimeout(question, 1000 * 5);

    function right() {
        resetTimer();
        clearInterval(intervalId);
        counter++;
        $("#rightOrWrong").html("Correct!");
        $("#question").hide();
        $("#answerOne").hide();
        $("#answerTwo").hide();
        $("#answerThree").hide();
        $("#answerFour").hide();

    } //closes right function

    function wrong() {
        resetTimer();
        clearInterval(intervalId);
        counter++;
        $("#rightOrWrong").html("Incorrect!");
        $("#question").hide();
        $("#answerOne").hide();
        $("#answerTwo").hide();
        $("#answerThree").hide();
        $("#answerFour").hide();

    } //closes wrong function

    function questionTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function resetTimer() {
        questionTime = 5;
    }

    function decrement() {
        questionTime--;
        $("#questiontimer").html(questionTime);
    }

    function question() {
        $("#rightOrWrong").html();
        $("#question").html(questionsBank[counter]);
        $("#answerOne").html("A: " + answerChoices[counter]);
        $("#answerTwo").html("B: " + wrongAnswerChoices[counter]);
        $("#answerThree").html("C: " + wrongAnswerChoices[counter]);
        $("#answerFour").html("D: " + wrongAnswerChoices[counter]);

        if (questionTime <= 0 && rightAnswer === false){
            wrongAnswer = true;
        }

    }

    // hides start button and displays jumbotron
    $("#startbutton").on("click", function () {
        $("#startbutton").hide();
        $(".jumbotron").show();
        console.log("Time"+" "+ questionTime);
        console.log("Counter"+" "+ counter);
        console.log("Questions Right"+" "+ questionsRight);
        console.log("Questions Wrong"+" "+ questionsWrong);
        console.log("rightAnswer"+" "+ rightAnswer);
        console.log("wrongAnswer"+" "+ wrongAnswer);
        timer();
        game();
    }); //closes start button .onClick function


    function game() {
        // Displays next question
        question();
    }



        if (rightAnswer === true) {

        } else if (wrongAnswer === true) {
            console.log("wrong Answer = "+ wrongAnswer);

        }






    




}) //closes $(document).ready(function()
