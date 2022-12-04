// function to set timer 

var timer = document.getElementById('time');
function countdown() {
    var timeleft = 60;
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





