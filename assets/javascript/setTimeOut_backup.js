
var questions = [
    "Question One",
    "Question Two",
    "Question Three",
    // "Question Four",
    // "Question Five",
    // "Question Six",
    // "Question Seven",
    // "Question Eight",
    // "Question Nine",
    // "Question Ten",
];
var answer = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
];

var wrongAnswerOne = [
    "W1",
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W10",
];
var wrongAnswerTwo = [
    "W1",
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W10",
];

var wrongAnswerThree = [
    "W1",
    "W2",
    "W3",
    "W4",
    "W5",
    "W6",
    "W7",
    "W8",
    "W9",
    "W10",
];


var intervalId;
var time = 5;
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
        i++;
        $("#answerJumbotron").hide();
        $("#questionJumbotron").show();
        if (i < questions.length) {
            clearInterval(intervalId);
            resetQuestionTimer();
            questionTimer();
            $("#question").html(questions[i]);
            $("#answerOne").html("A: " + answer[i]);
            $("#answerTwo").html("B: " + wrongAnswerOne[i]);
            $("#answerThree").html("C: " + wrongAnswerTwo[i]);
            $("#answerFour").html("D: " + wrongAnswerThree[i]);
            console.log("i " + i);
        } else {
            gameStartOver();
        }

    } // Closes function nextQuestion ******************************************************************

    $(".button").on("click", function () {
        console.log("Button Clicked");
    })

    $("#answerOne").on("click", function () {
        right();
    })
    $("#answerTwo").on("click", function () {
        wrong();
    })
    $("#answerThree").on("click", function () {
        wrong();
    })
    $("#answerFour").on("click", function () {
        wrong();
    })


    // Sets rate at which timer decreases (One Second)
    function decrement() {
        console.log("question time: " + time);
        time--;        
        $("#questiontimer").html(time);
        if (time < 0) {
            wrong();
        }
    } // Closes function decrement

    function questionTimer() {
        intervalId = setInterval(decrement, 1000);
        console.log("Question Timer: " + time);
    }

    // Display on screen when answer is Incorrect **************************************************************
    function wrong() {
        incorrect++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#rightanswer").hide();
        $("#wronganswer").show();
        $("#wronganswer").html("INCORRECT!");
        $("#theAnswer").html("Correct Answer Is " + answer[i]);
        console.log("Function WRONG");
        console.log("i: " + i);
        console.log("Incorrect: " + incorrect);
        console.log("Correct: " + correct);
        setTimeout(nextQuestion, 1000 * 5);
    }

    // Display on screen when answer is correct **************************************************************
    function right() {
        correct++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#wronganswer").hide();
        $("#rightanswer").show();
        $("#rightanswer").html("Correct!");
        $("#theAnswer").html(answer[i]);
        console.log("Function CORRECT");
        console.log("i: " + i);
        console.log("Incorrect: " + incorrect);
        console.log("Correct: " + correct);
        setTimeout(nextQuestion, 1000 * 5);
    }

    // Resets Question Timer
    function resetQuestionTimer() {
        time = 5;
    }

}) //closes $(document).ready(function()


function gameStartOver() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").show();
    $("#resultsCorrect").html("Number Correct: " + correct);
    $("#resultsIncorrect").html("Number Incorrect: " + incorrect);
    setTimeout(gameReset, 1000 * 5);
} //Closes gameStartOver

// Resets Game
function gameReset() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").hide();
    $("#startbutton").show();
    i = -1;
    time = 5;
    correct = 0;
    incorrect = 0;
}





