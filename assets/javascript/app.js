console.log("working")

var timeRemaining = 180;
var displayInt;
var questionArr = [{
        question: "how far can a cheetah jump from a standstill?",
        answers: ["15ft", "30ft", "45ft", "60ft"],
        correct: "60ft",
    },
    {
        question: "What is Batmans civilian persona?",
        answers: ["Bruce Payne", "Burt Wayne", "Clark Kent", "Bruce Wayne"],
        correct: "Bruce Wayne"
    },
    {
        question: "Who is the strongest Avenger?",
        answers:  ["Thor", "Captain America", "The Incredible Hulk", "Superman"],
        correct: "The Incredible Hulk"
    },
]
$("#gameDis").hide()
$("#startBtn").click(function () {
    $("#gameDis").show()
    $("#startBtn").hide()
    startTimer()
    displayQuiz()
})

function startTimer() {
    // setTimeout(function(){
    //   console.log("outta time")  
    // },1000)
    $("#timeRemaining").text(timeRemaining)
    displayInt = setInterval(function () {
        timeRemaining--
        $("#timeRemaining").text(timeRemaining)
        console.log("Something else")
    }, 1000)
    setTimeout(function () {
        clearInterval(displayInt)
    }, 1000 * 180)
}

function displayQuiz() {
    $("#questionDis").text("whatever")
    for (var i = 0; i < questionArr.length; i++) {
        console.log(questionArr[i].question)
        var newP = $("<p>")
        newP.text(questionArr[i].question)
        $("#questionDis").append(newP)
    }
}

//similar process to display