// function to set timer 

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

    var questions = document.querySelector('.questions');
    questions.classList.remove('hide')

}

// adding event listener to the start button

var btn = document.getElementById('start');
btn.addEventListener('click', countdown)

// function to play audio when correct answer is chosen
var x = document.getElementById('incorrect')
var y = document.getElementById('correct')

function incorrectAundio(){
    x.play();
}

function correctAudio() {
      y.play();
}



// Setting event listener on question-wrap to ensure event is on correct tag(click on lis)

questions.addEventListener('click', function (event) {
    var answer = allQuestions[currentQuestion].answer
    var comparison = (event.target.innerText)
    if (comparison == answer) {
        y.play();
    }
    else{
        x.play(), timeleft -= 10
    }

})

