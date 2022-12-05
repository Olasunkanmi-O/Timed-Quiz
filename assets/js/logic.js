

// function to set timer 
var questions = document.querySelector('.questions');
var timer = document.getElementById('time');
var timeleft = 60;
function countdown() {
    timer.innerText = timeleft
    var timerInterval = setInterval(function () {
        timeleft--;
        timer.innerText = timeleft
    }, 1000);

    var startScreen = document.querySelector('.start');
    startScreen.classList.add('hide')
    questions.classList.remove('hide')

    var questionTitle = document.createElement('h2')
    var questionText = document.createTextNode(allQuestions[currentQuestionIndex].title)
    var options = document.createElement('li')
    var optionsText = document.createTextNode(allQuestions[currentQuestionIndex].choices)
    
  
    
    



    questionTitle.appendChild(questionText)
    document.body.appendChild(questionTitle)
    options.appendChild(optionsText)
    document.body.appendChild(optionsText)
}

// adding event listener to the start button

var btn = document.getElementById('start');
btn.addEventListener('click', countdown)

// function to play audio when correct answer is chosen
var x = document.getElementById('incorrect')
var y = document.getElementById('correct')

function incorrectAundio() {
    x.play();
}

function correctAudio() {
    y.play();
}

var currentQuestionIndex = 0;
var questions = document.querySelector('.questions');



































    // function getQuestion() {
//     var currentQuestion = allQuestions[currentQuestionIndex]
//     for (
//     }

// } getQuestion()




// // Setting event listener to question-wrap to confirm right answer

// questions.addEventListener('click', function (event) {
//     var answer = allQuestions[currentQuestionIndex].answer
//     var comparison = (event.target.innerText)

//     if (comparison == answer) {
//         y.play();
//     }
//     else {
//         x.play(), timeleft -= 10
//     }


// })





