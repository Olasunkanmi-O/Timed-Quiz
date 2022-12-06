

// function to set timer 
var questions = document.querySelector('.questions');
var timer = document.getElementById('time');
var timeleft = 60;

var currentQuestionIndex = 0;
var currentQuestion = allQuestions[currentQuestionIndex]

function countdown() {
    timer.innerText = timeleft
    var timerInterval = setInterval(function () {
        timeleft--;
        timer.innerText = timeleft
    }, 1000);

    var startScreen = document.querySelector('.start');
    startScreen.classList.add('hide')
    questions.classList.remove('hide')

    

    var questionTitle = document.createElement('h3')
    var questionText = document.createTextNode(allQuestions[currentQuestionIndex].title)
    questionTitle.appendChild(questionText)
    document.body.appendChild(questionTitle)

    var i = 0
    var choices = allQuestions[currentQuestionIndex].choices
    

    for (i = 0; i < choices.length; i++) {
        // console.log(choices[i])
        var options = document.createElement('button')
        var optionsText = document.createTextNode(allQuestions[currentQuestionIndex].choices[i])
        var answer = allQuestions[currentQuestionIndex].answer
        options.appendChild(optionsText)
        document.body.appendChild(options)
        options.addEventListener('click', function (event) {
            if (event.target.innerText == answer){
                y.play();
            }else{
                x.play(), timeleft -= 10; 
            }
        })
        
    
    }
      

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



























