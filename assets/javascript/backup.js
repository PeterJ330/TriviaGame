
var questions = ["Question One",
    "Question Two",
    "Question Three",
    "Question Four",
    "Question Five",
    // "Question Six",
    // "Question Seven",
    // "Question Eight",
    // "Question Nine",
    // "Question Ten",
];
var answer = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];

var wrongAnswer = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];

var intervalId;
var time = 25;
var answerTime = 26;
// var answerTime = 10;
var i = -1;
var correct = 0;
var incorrect = 0;

$(document).ready(function () {
    //========================================================================================================================================================================
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").hide();
    //========================================================================================================================================================================

    // hides start button and displays jumbotron
    $("#startbutton").on("click", function () {
        $("#startbutton").hide();
        nextQuestion();
    })
    // // Displays next question **************************************************************
    function nextQuestion() {
        clearInterval(intervalId);
        answerTime = 26
        i++;
        $("#answerJumbotron").hide();
        $("#questionJumbotron").show();
        if (i < questions.length) {
            clearInterval(intervalId);
            resetQuestionTimer();
            questionTimer();
            $("#question").html(questions[i]);
            $("#answerOne").html("A: " + answer[i]);
            $("#answerTwo").html("B: " + wrongAnswer[i]);
            $("#answerThree").html("C: " + wrongAnswer[i]);
            $("#answerFour").html("D: " + wrongAnswer[i]);

            console.log("i " + i);
        } else {
            gameStartOver();
        }
    } // Closes function nextQuestion ******************************************************************

    // Sets rate at which timer decreases (One Second)
    function decrement() {
        time--;
        answerTime--;
        console.log("question time: " + time);
        console.log("answer time: " + answerTime);
        $("#questiontimer").html(time);
        $("#answertimer").html(answerTime);
        if (time < 0) {
            // i++;
            wrong();
        }
    } // Closes function decrement

    function questionTimer() {
        intervalId = setInterval(decrement, 1000);
        console.log("Question Timer: " + time);
    }

    // Display on screen when answer is Incorrect **************************************************************
    function wrong() {
        console.log("Function WRONG");
        console.log("i: " + i);
        if (answerTime < 0) {
            nextQuestion();
        } else {
            clearInterval(intervalId);
            resetAnswerTimer();
            answerTimer();
            $("#questionJumbotron").hide();
            $("#answerJumbotron").show();
            incorrect++;
            $("#rightOrWrong").html("INCORRECT!");
            console.log("Incorrect: " + incorrect);
        }

    }
    // Display on screen when answer is correct **************************************************************
    function correct() {
        correct++;
        setTimeout(correct, 5000);
        $("#rightOrWrong").html("CORRECT!");
        stopOrContinue();
        console.log("Correct: " + correct);




    }


    function answerTimer() {
        intervalId = setInterval(decrement, 1000);
        $("#questiontimer").html(answerTime);
        console.log("Answer Timer: " + answerTime);
    }

    // Resets Timer
    function resetQuestionTimer() {
        time = 25;
    }

    // Resets answerTimer
    function resetAnswerTimer() {
        time = 5;
        answerTime = 5;
    }


}) //closes $(document).ready(function()


function gameStartOver() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").show();
    i = -1;
    time = 25;
    answerTime = 26;
   //setTimeout ?????? then call game Reset??
    console.log("GAME Results");

    $("#********").on("click", function(){
        gameReset();
})
} //Closes gameStartOver

// Resets Game
function gameReset() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#startbutton").show();
    i = -1;
    time = 25;
    answerTime = 26;
    correct = 0;
    incorrect = 0;
    console.log("GAME RESET");
}





