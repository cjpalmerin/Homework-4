var counter = 75;
countDown = document.getElementById("counter");

function startTimer() {
    setInterval(function (){
        counter--;

        if(counter >= 0) {
            countDown.innerHTML = counter;
        }
        if (counter == 0) {
            countDown.innerHTML = "DONE!"
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

// function incorrectAnswer2() {
//     incorrectAnswerButton = document.getElementById("incorrect-answer2");
//     incorrectAnswerButton.classList.add("btn-danger");
//     notification.innerHTML = "Incorrect ):"

//     var nextQuestion1 = document.createElement('button');
//     nextQuestion1.innerHTML = "Next Question!";
//     counter= counter-10;

//     document.getElementById("next-question1").appendChild(nextQuestion1);
// }

// function incorrectAnswer3() {
//     incorrectAnswerButton = document.getElementById("incorrect-answer3");
//     incorrectAnswerButton.classList.add("btn-danger");
//     notification.innerHTML = "Incorrect ):"

//     var nextQuestion1 = document.createElement('button');
//     nextQuestion1.innerHTML = "Next Question!";
//     counter= counter-10;

//     document.getElementById("next-question1").appendChild(nextQuestion1);
// }


function nextQuestion1() {
    hiddenQuestion1.id = "quiz-screen1-hidden"
}


document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("start-button").addEventListener("click", hideTitleScreen);
document.getElementById("start-button").addEventListener("click", showQuizScreen1);


document.getElementById("correct-answer").addEventListener("click", correctAnswer);
document.getElementById("next-question1").addEventListener("click", nextQuestion1);

document.getElementById("incorrect-answer1").addEventListener("click", incorrectAnswer1);
// document.getElementById("incorrect-answer2").addEventListener("click", incorrectAnswer2);
// document.getElementById("incorrect-answer3").addEventListener("click", incorrectAnswer3);



