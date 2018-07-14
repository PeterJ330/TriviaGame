
var questions = [
    "John Hammond, the InGen CEO of 'Jurassic Park', creates dinosaurs on this island...",
    "The opening sequence of 'Saving Private Ryan' depicts what military battle of World War II?",
    "Legendary critic and director François Truffaut appeared as a French scientist in this Spielberg film...",
    "This actor, who plays Elliott in 'E.T. The Extra-Terrestrial', auditioned for the role in an Indiana Jones costume.",
    "Which of these Spielberg movies features a slow-motion car chase?",
    "Oskar Schindler runs what kind of factory in 'Schindler's List'?",
    "What's the name of Quint's boat in 'Jaws'?",
    "What is the villain of Spielberg's first film, 'Duel'?",
    "Spielberg directed 'Raiders of the Lost Ark' based on a story by this fellow friend and filmmaker:",
    "Spielberg founded a production company in the early '80s and named it this, after his first film about a hitchhiking couple.",
];
var answerOne = [
    "FIJI",
    "NORMANDY",
   "EMPIRE OF THE SUN",
    "HENRY THOMAS",
    "CLOSE ENCOUNTERS OF THE THIRD KIND",
    "TOOLS",
    "SHARK",
    "CAR CARRIER",
    "GEORGE LUCAS",
    "HITCHIN",
];

var answerTwo = [
    "ISLA NUBLAR",
    "WATERLOO",
    "A.I. ARTIFICIAL INTELLIGENCE",
    "RIVER PHOENIX",
    "ALWAYS",
    "CARS",
    "ORCA",
    "JEEP",
    "FRANCES FORD COPPOLA",
    "HITCHING POST",
];
var answerThree = [
    "COSTA RICA",
    "IWO JIMA",
    "CLOSE ENCOUNTERS OF THE THIRD KIND",
    "JOSEPH GORDON-LEVITT",
    "HOOK",
    "MUNITIONS",
    "PORPOISE",
    "TANKER TRUCK",
    "HARRISON FORD",
    "BREEZIN",
];

var answerFour = [
    "ISLA MUERTE",
    "BATTLE OF THE BULGE",
    "SCHINDLER'S LIST",
    "BRAD RENFRO",
    "THE SUGARLAND EXPRESS",
    "TOYS",
    "DOLPHIN",
    "TOW TRUCK",
    "MARTIN SCORSESE",
    "AMBLIN",
    
];


var intervalId;
var time = 25;
var i = -1;
var correct = 0;
var incorrect = 0;

$(document).ready(function () {
    //========================================================================================================================================================================
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").hide();
    //========================================================================================================================================================================

    // Starts game - hides start button and calls nextQuestion
    $("#startbutton").on("click", function () {
        $("#startbutton").hide();
        nextQuestion();
    })

    // // Displays next question
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
            $("#answerOne").html(answerOne[i]);
            $("#answerTwo").html(answerTwo[i]);
            $("#answerThree").html(answerThree[i]);
            $("#answerFour").html(answerFour[i]);
        } else {
            gameStartOver();
        }

    } // Closes nextQuestion

    // Answer selection and determines if answer is right or wrong ========================================================================
    $("#answerOne").on("click", function () {
        if (i === 1 || i === 3 || i === 8) {
            right();
        } else {
            wrong();            
        }
    })
    $("#answerTwo").on("click", function () {
        if (i === 0 || i === 6) {            
            right();
        } else {            
            wrong();            
        }
    })
    $("#answerThree").on("click", function () {
        if (i === 2 || i === 5 || i === 7) {            
            right();
        } else {            
            wrong();        
        }
    })
    $("#answerFour").on("click", function () {
        if (i === 4 || i === 9) {
            right();
        } else {            
            wrong();            
        }
    })
    // ================================================================================================================================================

    // Function created to reduce var time by 1. Holds conditional for question to be counted wrong if time runs out.
    function decrement() {
        time--;
        $("#questiontimer").html(time);
        if (time < 0) {
            wrong();
        }
    } // Closes function decrement

    function questionTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // Display on screen when answer is wrong **************************************************************
    function wrong() {
        incorrect++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#rightanswer").hide();
        $("#wronganswer").show();
        $("#wronganswer").html("INCORRECT!");
        setTimeout(nextQuestion, 1000 * 5);
        if (i === 0) {
             $("#theAnswer").html("The Correct Answer Is " + answerTwo[i]);

        } else if (i === 1 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerOne[i]);

        } else if (i === 2 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerThree[i]);
            
        } else if (i === 3 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerOne[i]);
            
        } else if (i === 4 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerFour[i]);
            
        } else if (i === 5 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerThree[i]);
            
        } else if (i === 6 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerTwo[i]);
            
        } else if (i === 7 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerThree[i]);
            
        } else if (i === 8 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerOne[i]);
            
        } else if (i === 9 ) {
            $("#theAnswer").html("The Correct Answer Is " + answerFour[i]);
            
        }
    } // closes function wrong

    // Display on screen when answer is correct **************************************************************
    function right() {
        correct++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#wronganswer").hide();
        $("#rightanswer").show();
        $("#rightanswer").html("Correct!");
        setTimeout(nextQuestion, 1000 * 5);
        if (i === 0) {
            $("#theAnswer").html(answerTwo[i]);

        } else if (i === 1 ) {
            $("#theAnswer").html(answerOne[i]);

        } else if (i === 2 ) {
            $("#theAnswer").html(answerThree[i]);
            
        } else if (i === 3 ) {
            $("#theAnswer").html(answerOne[i]);
            
        } else if (i === 4 ) {
            $("#theAnswer").html(answerFour[i]);
            
        } else if (i === 5 ) {
            $("#theAnswer").html(answerThree[i]);
            
        } else if (i === 6 ) {
            $("#theAnswer").html(answerTwo[i]);
            
        } else if (i === 7 ) {
            $("#theAnswer").html(answerThree[i]);
            
        } else if (i === 8 ) {
            $("#theAnswer").html(answerOne[i]);
            
        } else if (i === 9 ) {
            $("#theAnswer").html(answerFour[i]);
            
        }
    
    } // closes function right

    // Resets var time
    function resetQuestionTimer() {
        time = 25;
    }

}) //closes $(document).ready(function()


function gameStartOver() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").show();
    $("#resultsCorrect").html("Correct: " + correct);
    $("#resultsIncorrect").html("Incorrect: " + incorrect);
    setTimeout(gameReset, 1000 * 5);
} //Closes gameStartOver

// Resets Game
function gameReset() {
    $("#resultsJumbotron").hide();
    $("#startbutton").show();
    i = -1;
    time = 25;
    correct = 0;
    incorrect = 0;
}