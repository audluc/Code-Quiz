//questions
const myQuestions = [
    {
        question: "Commonly used data types DO NOT include?",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"]
        ,
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____?",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"]
        ,
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store_____?",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "All of the above"]
        ,
        correctAnswer: "alerts"

        ,
        question: "String values must be enclosed within___ when being assigned to variables?",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"]
        ,
        correctAnswer: "alerts"
        ,

        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: [
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log"]
        ,
        correctAnswer: "alerts"
        ,
    }];
//variables
let interval
let timer = 60
let questionNumber = 0
let rightAnswer = ""
document.getElementById("start").addEventListener("click", startGame)

//start questions and timer
function startGame() {
    let intro = document.getElementById("intro")
    let game = document.getElementById("game")
    intro.classList.remove("d-block")
    intro.classList.add("d-none")
    game.classList.remove("d-none")
    game.classList.add("d-block")
    startTimer()
    displayQuestion(myQuestions)
}
function startTimer() {
    interval = setInterval(function () {
        document.getElementById("timer").textContent = timer
        if (timer < 0) { console.log("gameOver") }
        else (timer--)
    }, 1000)

}

//display the questions with buttons
function displayQuestion(array) {

    if (questionNumber < array.length) {
        rightAnswer = array[questionNumber].correctAnswer
        let question = document.getElementById("question")
        question.innerText = array[questionNumber].question
        let choices = array[questionNumber].answers
        for (let i = 0; i < choices.length; i++) {
            let btn = document.createElement("button")
            btn.setAttribute("class", "btn btn-info m-4 answer")
            btn.textContent = choices[i]
            document.getElementById("answer").append(btn)
        }
    } else {
        console.log("gameOver")
    }
}

//answer response

document.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".answer")) {
        let userAnswer = e.target.textContent
        if (userAnswer === rightAnswer) {
            console.log("right answer")

        } else {
            timer -= 10
            console.log("wrong answer")
        }
        questionNumber++
        document.getElementById("answer").innerHTML = ""
        document.getElementById("question").innerHTML = ""
        displayQuestion(myQuestions)
    }

}

)



