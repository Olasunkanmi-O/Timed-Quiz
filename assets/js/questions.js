

var allQuestions = [
{
    title: 'In which HTML element do we embed JavaScript?',
    choices: ['script', 'Javascript', 'src', 'a'],
    answer: 'script'
},
{
    title: 'What does Event Delegation mean to you?',
    choices: ['Delegating events around children of a DOM', 'Attaching event listener on the parent', 'Reducing event activities to the children', 'iterating events within objects of document'],
    answer: 'Attaching event listener on the parent'
},
{
    title: 'What is the correct way to write a JavaScript array?',
    choices: ['var colors = {"red","blue","yellow"}', 'var colors = ("red","blue","yellow")', 'var colors =["red", "blue", "yellow"]', 'var colors = [0:"red", 1:"blue", 2:"yellow"]'],
    answer: 'var colors =["red", "blue", "yellow"]'
},
{
    title: 'Where is the correct place to insert a JavaScript?',
    choices: ['Head', 'anywhere', 'body', 'h1',],
    answer: 'body'
},
{
    title: 'How do you write "Hello World" in an alert box?',
    choices: ['confirm("Hello World")', 'alert("Hello World")', 'prompt("Hello World")', 'print("Hello World")'],
    answer: 'alert("Hello World")'
},
{
    title: 'How do you call a function named "printer"?',
    choices: ['printer', 'call printer', 'call function printer()', 'printer()'],
    answer: 'printer()'
}

]
var currentQuestion = 0;
var questions = document.querySelector('.questions');
questions.innerHTML = `
    <h2 id = "question-title">${allQuestions[currentQuestion].title}</h2>
    <div id = "choices" class = "choices">
        <ul></ul>
    </div>
`;    

var ul = questions.querySelector('ul');
var choices = allQuestions[currentQuestion].choices
for (var choice of choices) {
    ul.insertAdjacentHTML('beforeend', `<li>${choice}</li>`)
}

