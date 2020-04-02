var counter = 75;
countDown = document.getElementById("counter");

var quizOver = false;

function startTimer() {
    setInterval(function (){
        counter--;

        if(counter >= 0) {
            countDown.innerHTML = counter;
        }
        if (counter == 0) {
            countDown.innerHTML = "DONE!"
            location.href = 'gameover.html'
        }
        if (quizOver === true) {
            clearInterval(counter);
        }

    }, 1000)
}

var notification = document.getElementById("notification")
var hiddenQuestion1 = document.getElementById("quiz-screen1-hidden")

function hideTitleScreen() {
   let titleScreen = document.getElementById("title-screen")
   titleScreen.classList.add('hidden');
}

function showQuizScreen1() {
    document.getElementById("quiz-screen1-hidden").id = "quiz-screen1-show";
}

function correctAnswer() {
    correctAnswerButton = document.getElementById("correct-answer");
    correctAnswerButton.classList.add("btn-success")
    notification.innerHTML = "Correct!"

    var nextQuestion1 = document.createElement('button');
    nextQuestion1.innerHTML = "Next Question!";
    document.getElementById("next-question1").appendChild(nextQuestion1);
}

function incorrectAnswer1() {
    incorrectAnswerButton = document.getElementById("incorrect-answer1");
    incorrectAnswerButton.classList.add("btn-danger");
    notification.innerHTML = "Incorrect ):"

    var nextQuestion1 = document.createElement('button');
    nextQuestion1.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question1").appendChild(nextQuestion1);
}

function incorrectAnswer2() {
    incorrectAnswerButton = document.getElementById("incorrect-answer2");
    incorrectAnswerButton.classList.add("btn-danger");
    notification.innerHTML = "Incorrect ):"

    var nextQuestion1 = document.createElement('button');
    nextQuestion1.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question1").appendChild(nextQuestion1);
}

function incorrectAnswer3() {
    incorrectAnswerButton = document.getElementById("incorrect-answer3");
    incorrectAnswerButton.classList.add("btn-danger");
    notification.innerHTML = "Incorrect ):"

    var nextQuestion1 = document.createElement('button');
    nextQuestion1.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question1").appendChild(nextQuestion1);
}



function showQuizScreen2() {
    document.getElementById("quiz-screen2-hidden").id = "quiz-screen2-show";
    document.getElementById("quiz-screen1-show").id = "quiz-screen1-hidden";

}


document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("start-button").addEventListener("click", hideTitleScreen);
document.getElementById("start-button").addEventListener("click", showQuizScreen1);


document.getElementById("correct-answer").addEventListener("click", correctAnswer);
document.getElementById("next-question1").addEventListener("click", showQuizScreen2);

document.getElementById("incorrect-answer1").addEventListener("click", incorrectAnswer1);
document.getElementById("incorrect-answer2").addEventListener("click", incorrectAnswer2);
document.getElementById("incorrect-answer3").addEventListener("click", incorrectAnswer3);



function correctAnswer2() {
    correctAnswerButton = document.getElementById("correct-answer2");
    correctAnswerButton.classList.add("btn-success")
    notification2.innerHTML = "Correct!"

    var nextQuestion2 = document.createElement('button');
    nextQuestion2.innerHTML = "Next Question!";
    document.getElementById("next-question2").appendChild(nextQuestion2);
}

function incorrectAnswer4() {
    incorrectAnswerButton = document.getElementById("incorrect-answer4");
    incorrectAnswerButton.classList.add("btn-danger");
    notification2.innerHTML = "Incorrect ):"

    var nextQuestion2 = document.createElement('button');
    nextQuestion2.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question2").appendChild(nextQuestion2);
}

function incorrectAnswer5() {
    incorrectAnswerButton = document.getElementById("incorrect-answer5");
    incorrectAnswerButton.classList.add("btn-danger");
    notification2.innerHTML = "Incorrect ):"

    var nextQuestion2 = document.createElement('button');
    nextQuestion2.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question2").appendChild(nextQuestion2);
}

function incorrectAnswer6() {
    incorrectAnswerButton = document.getElementById("incorrect-answer6");
    incorrectAnswerButton.classList.add("btn-danger");
    notification2.innerHTML = "Incorrect ):"

    var nextQuestion2 = document.createElement('button');
    nextQuestion2.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question2").appendChild(nextQuestion2);
}


function showQuizScreen3() {
    document.getElementById("quiz-screen3-hidden").id = "quiz-screen3-show";
    document.getElementById("quiz-screen2-show").id = "quiz-screen2-hidden";

}

document.getElementById("correct-answer2").addEventListener("click", correctAnswer2);
document.getElementById("next-question2").addEventListener("click", showQuizScreen3);

document.getElementById("incorrect-answer4").addEventListener("click", incorrectAnswer4);
document.getElementById("incorrect-answer5").addEventListener("click", incorrectAnswer5);
document.getElementById("incorrect-answer6").addEventListener("click", incorrectAnswer6);


function correctAnswer3() {
    correctAnswerButton = document.getElementById("correct-answer3");
    correctAnswerButton.classList.add("btn-success")
    notification3.innerHTML = "Correct!"

    var nextQuestion3 = document.createElement('button');
    nextQuestion3.innerHTML = "Next Question!";
    document.getElementById("next-question3").appendChild(nextQuestion3);
}


function showQuizScreen4() {
    document.getElementById("quiz-screen4-hidden").id = "quiz-screen4-show";
    document.getElementById("quiz-screen3-show").id = "quiz-screen3-hidden";

}

function incorrectAnswer7() {
    incorrectAnswerButton = document.getElementById("incorrect-answer7");
    incorrectAnswerButton.classList.add("btn-danger");
    notification3.innerHTML = "Incorrect ):"

    var nextQuestion3 = document.createElement('button');
    nextQuestion3.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question3").appendChild(nextQuestion3);
}

function incorrectAnswer8() {
    incorrectAnswerButton = document.getElementById("incorrect-answer8");
    incorrectAnswerButton.classList.add("btn-danger");
    notification3.innerHTML = "Incorrect ):"

    var nextQuestion3 = document.createElement('button');
    nextQuestion3.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question3").appendChild(nextQuestion3);
}

function incorrectAnswer9() {
    incorrectAnswerButton = document.getElementById("incorrect-answer7");
    incorrectAnswerButton.classList.add("btn-danger");
    notification3.innerHTML = "Incorrect ):"

    var nextQuestion3 = document.createElement('button');
    nextQuestion3.innerHTML = "Next Question!";
    counter= counter-10;

    document.getElementById("next-question3").appendChild(nextQuestion3);
}


document.getElementById("correct-answer3").addEventListener("click", correctAnswer3);
document.getElementById("next-question3").addEventListener("click", showQuizScreen4);

document.getElementById("incorrect-answer7").addEventListener("click", incorrectAnswer7);
document.getElementById("incorrect-answer8").addEventListener("click", incorrectAnswer8);
document.getElementById("incorrect-answer9").addEventListener("click", incorrectAnswer9);


function correctAnswer4() {
    correctAnswerButton = document.getElementById("correct-answer4");
    correctAnswerButton.classList.add("btn-success")
    notification4.innerHTML = "Correct!"

    var nextQuestion4 = document.createElement('button');
    nextQuestion4.innerHTML = "End Quiz!";
    document.getElementById("next-question4").appendChild(nextQuestion4);
}

function showQuizScreen5() {
    document.getElementById("quiz-screen5-hidden").id = "quiz-screen5-show";
    document.getElementById("quiz-screen4-show").id = "quiz-screen4-hidden";

    quizOver = true;
}

function incorrectAnswer10() {
    incorrectAnswerButton = document.getElementById("incorrect-answer10");
    incorrectAnswerButton.classList.add("btn-danger");
    notification4.innerHTML = "Incorrect ):"

    var nextQuestion4 = document.createElement('button');
    nextQuestion4.innerHTML = "End Quiz!!";
    counter= counter-10;
    clearInterval(counter);

    document.getElementById("next-question4").appendChild(nextQuestion4);

    quizOver = true;
}

function incorrectAnswer11() {
    incorrectAnswerButton = document.getElementById("incorrect-answer11");
    incorrectAnswerButton.classList.add("btn-danger");
    notification4.innerHTML = "Incorrect ):"

    var nextQuestion4 = document.createElement('button');
    nextQuestion4.innerHTML = "End Quiz!!";
    counter= counter-10;

    document.getElementById("next-question4").appendChild(nextQuestion4);

    quizOver = true;

}

function incorrectAnswer12() {
    incorrectAnswerButton = document.getElementById("incorrect-answer12");
    incorrectAnswerButton.classList.add("btn-danger");
    notification4.innerHTML = "Incorrect ):"

    var nextQuestion4 = document.createElement('button');
    nextQuestion4.innerHTML = "End Quiz!!";
    counter= counter-10;

    document.getElementById("next-question4").appendChild(nextQuestion4);

    quizOver = true;
}

function endQuiz() {
    quizOver = true;
}


document.getElementById("correct-answer4").addEventListener("click", correctAnswer4);
document.getElementById("next-question4").addEventListener("click", showQuizScreen5);
document.getElementById("next-question4").addEventListener("click", endQuiz);


document.getElementById("incorrect-answer10").addEventListener("click", incorrectAnswer10);
document.getElementById("incorrect-answer11").addEventListener("click", incorrectAnswer11);
document.getElementById("incorrect-answer12").addEventListener("click", incorrectAnswer12);



var finalCounter = document.getElementById("finalScore")
finalCounter.innerHTML = counter

var inpKey = document.getElementById("inpKey");
var inpValue = document.getElementById("inpValue");
var btnInert = document.getElementById('btnInert')
var lsOutput = document.getElementById("lsOutput")
var lsOutput2 = document.getElementById("lsOutput2")


btnInsert.onclick = function () {
    
    var key = inpKey.value;
    var value = inpValue.value;

    // console.log(key);
    // console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload;
    }
}

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    lsOutput.innerHTML = key + " : " + value;
    // lsOutput2.innerHTML = key + " : " + value;
}


// var currentQuestionIndex = 0;
// var questionTitleH1 = document.getElementById("question-title");
// var buttonHolderDiv = document.getElementById("button-holder")

// function getQuestions() {
//     var currentQuestion = questions[currentQuestionIndex];
//     questionTitleH1.textContent = currentQuestion.title;

//     buttonHolderDiv.innerHTML = ""

//     for (i = 0; i < currentQuestion.choices.length; i++) {
//         var newButton = document.createElement("button")

//         newButton.setAttribute("class", "btn");
//         newButton.setAttribute("value", currentQuestion.choices[i]);
//         newButton.textContent = currentQuestion.choices[i];
//         newButton.onclick =  clickQuestion;
//         buttonHolderDiv.appendChild(newButton); 
//     }
// }

