
var questions = ["Question One",
"Question Two",
"Question Three",
"Question Four",
"Question Five",
"Question Six",
"Question Seven",
"Question Eight",
"Question Nine",
"Question Ten",
];
var answer = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];

var wrongAnswer = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];

var intervalId;
var answerInterval;
// var time = 25;
var time = 5;
var answerTime = 6;
var i = 0;
var correct = 0;
var incorrect = 0;

$(document).ready(function () {
//========================================================================================================================================================================
// Store functions in this section that set up display on initial load of webpage
// $(".jumbotron").hide();
$("#questionJumbotron").hide();
$("#answerJumbotron").hide();


//========================================================================================================================================================================

// hides start button and displays jumbotron
$("#startbutton").on("click", function () {
    $("#startbutton").hide();
    // $(".jumbotron").show();
   // questionTimer();
    nextQuestion();
})
    // // Displays next question **************************************************************
function nextQuestion() {
    $("#answerJumbotron").hide();
    $("#questionJumbotron").show();
                                    console.log( "~~~~~~~~~~~~~~~~~~~~~~~~~~",
                                    "intervalId: "+ intervalId, 
                                    "answerInterval: "+ answerInterval, 
                                    "Question Time: "+ time, 
                                    "Answer Time: "+ answerTime,
                                    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    if (i <= questions.length) {
        resetQuestionTimer();
        questionTimer();
                                console.log( "~~~~~~~~~~~~~~~~~~~~~~~~~~",
                                "intervalId: "+ intervalId, 
                                "answerInterval: "+ answerInterval, 
                                "Question Time: "+ time, 
                                "Answer Time: "+ answerTime,
                                "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        $("#question").html(questions[i]);
        $("#answerOne").html("A: " + answer[i]);
        $("#answerTwo").html("B: " + wrongAnswer[i]);
        $("#answerThree").html("C: " + wrongAnswer[i]);
        $("#answerFour").html("D: " + wrongAnswer[i]);

        console.log("i " + i);
    } else {
        gameReset();
    }
}

        // Sets rate at which timer decreases (One Second)
        function decrement() {
            time--;
            answerTime--;
            $("#questiontimer").html(time);
            $("#answertimer").html(answerTime);
            if (time < 0) {
                i++;
                wrong();
            }
        }

        // starts the round
        function questionTimer() {
            intervalId = setInterval(decrement, 1000);
            console.log("Question Timer: "+ time);
        }
// function answerDecrement() {
//     answerTime--;
// }
// function answerTimer() {
//     answerInterval = setInterval(answerDecrement, 1000);
//     console.log("Answer Timer: " + answerTime);
// }

// Display on screen when answer is Incorrect **************************************************************
function wrong() {
    console.log("Function WRONG");
    answerTimer();
    $("#questionJumbotron").hide();
    $("#answerJumbotron").show();
    clearInterval(intervalId);
    resetQuestionTimer();
    incorrect++;
    $("#rightOrWrong").html("INCORRECT!");
    console.log("Incorrect: " + incorrect);
    if (answerTime < 0) {
        clearInterval(answerInterval);
        // resetAnswerTimer();
        nextQuestion();
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

        function answerDecrement() {
            answerTime--;
            $("#questiontimer").html(answerTime);
        }
        function answerTimer() {
            resetAnswerTimer();
            // clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            // answerInterval = setInterval(answerDecrement, 1000);
            $("#questiontimer").html(answerTime);
            console.log("Answer Timer: " + answerTime);
        }

// Resets Timer
function resetQuestionTimer() {
    // time = 25;
    time = 5;
}

// Resets answerTimer
function resetAnswerTimer() {
    answerTime = 6;
}

// Determines whether to continue [ nextQuestion() ] or if game is over [ gameReset() ]
// function stopOrContinue() {
//     if (i <= questions.length) {
//         nextQuestion();
//     } else {
//         gameReset();
//     }
// }

// // // Displays next question
// function nextQuestion() {
//     // clearInterval(answerInterval);
//     // resetAnswerTimer();
//     if (i <= questions.length) {
//         resetQuestionTimer();
//         questionTimer();
//         $("#question").html(questions[i]);
//         $("#answerOne").html("A: " + answer[i]);
//         $("#answerTwo").html("B: " + wrongAnswer[i]);
//         $("#answerThree").html("C: " + wrongAnswer[i]);
//         $("#answerFour").html("D: " + wrongAnswer[i]);

//         console.log("i " + i);
//     } else {
//         gameReset();
//     }
// }

// function answerTimer() {
//     answerInterval = setInterval(answerDecrement, 1000);
//     console.log("Answer Timer: " + answerTime);
// }

// Resets Game
function gameReset() {
    i = 0;
    correct = 0;
    incorrect = 0;
}



}) //closes $(document).ready(function()
