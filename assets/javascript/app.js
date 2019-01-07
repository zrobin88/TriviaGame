//create a start button that starts the game and the timer
$("#start-btn").on("click", run);
//create a done button that ends game and shows user score 
$("#done").on("click", stop);
//create a reset button 
$("#reset-btn").on("click", function(){
  location.reload(); 
});


//declare variables
const quizQuestions = [
  {
    question: "What year did Metallica relase their first album?",
    answers: [
      "a: 1976 ",
      "b: 1988 ",
      "c: 1983 ",
      "d: 1991 "
    ],
    correctAnswer: "c: 1983 "
  },

  {
    question: "At what speed does the Earth rotate in one complete 24-hour cycle?",
    answers: [
      "a: 100,000 mph ",
      "b: 5 mph ",
      "c: 30,000 mph ",
      "d: 1,000 mph "
    ],
    correctAnswer: "d: 1,000 mph "
  },

  {
    question: "What iconic Gibson guitar was named after a famous guitarist?",
    answers: [
      "a: Les Paul ",
      "b: Randy Rhoads ",
      "c: Eric Clapton ",
      "d: Dimebag Darrell "
    ],
    correctAnswer: "a: Les Paul "
  },
  {
    question: "Who was President George HW Bush's Vice President?",
    answers: [
      "a: Donald Trump ",
      "b: Dan Quayle ",
      "c: Dick Cheney ",
      "d: Monica Lewinsky "
    ],
    correctAnswer: "b: Dan Quayle "
  },
  {
    question: "What foreign company owns American automaker Chrysler?",
    answers: [
      "a: Volkswagen ",
      "b: Fiat ",
      "c: Pugeot ",
      "d: Toyota "

    ],
    correctAnswer: "b: Fiat "
  },

  {
    question: "Who was original lead singer for Black Sabbath?",
    answers: [
      "a: Ronnie James Dio ",
      "b: Robert Plant ",
      "c: Ozzy Osbourne ",
      "d: Kanye West "
    ],
    correctAnswer: "c: Ozzy Osbourne "
  },
  {
    question: "In audio production, what is a compressor used for?",
    answers: [
      "a: Boosting quiet signals and attenuating loud singals in order to produce a conisistent dynamic range ",
      "b: Adjusting the frequency content of a signal ",
      "c: Harmonic pitch correction of a voice ",
      "d: Synthesizing sound from basic audio waves "
    ],
    correctAnswer: "a: boosting quiet signals and attenuating loud singals in order to produce a conisistent dynamic range "
  },

  {
    question: "Which entertainment company does Disney NOT own? ",
    answers: [
      "a: Lucasfilm ",
      "b: Marvel ",
      "c: Netflix ",
      "d: 21st Century Fox "
    ],
    correctAnswer: "c: Netflix "
  }, 

  

];


const resultsContainer = document.getElementById('results');
let rightAnswer = [];
let wrongAnswer = []; 
var timer = 50;
var startBtn = $("#start-btn")
//variable that holds intervalID during run function
var intervalId;
let quiz = $("#quiz"); 





//create a run function that runs the clock (clear interval, set interval to intervalID var, use decrement function and 1 second as arguments)
function run() {
  console.log("test");
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  const output = [];
  


  //display quiz 
  for (let i = 0; i < quizQuestions.length; i++) {
    quiz.append("<h2>" + quizQuestions[i].question+ "</h2>");
    for (var x = 0; x < quizQuestions[i].answers.length; x++) {
     quiz.append("<input type='radio' id = 'radio-btn' name='question-" + i +
        "' value='" + quizQuestions[i].answers[x] + "''>" + quizQuestions[i].answers[x]);

        
    }


    
  }
 
 
  //remove start button in order to prevent multiple quizzes 
  $("#start-btn").remove();

}
//decrement function 

function decrement() {
  timer--;

  //  Show the number in the #timer tag.
  $("#timer").html("<h2>" + timer + "</h2>");

  //  Once number hits zero...
  if (timer === 0) {

    //run the stop function.
    stop();
    alert("Time's Up!");
    timer = 50;
  }
}

//stop function
function stop() {
  clearInterval(intervalId);
  //bring back start button 
  $("#jumbo").append(startBtn);
  $(startBtn).on("click", run);



  
  //check if user guess is correct 
    var userInput = quiz.children("input:checked");
    for (var i = 0; i < userInput.length; i++) {
      if ($(userInput[i]).val() === quizQuestions[i].correctAnswer) {
        rightAnswer++;
      } else {
        wrongAnswer++;
      }
    }
    

  const reslutsTemplate = `
  <div class="card bg-secondary" style="width: 18rem;">
  <div class="card-body" id = "results">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
  </div>
  
  `  
  $("#results").append(reslutsTemplate+"<h2>"+ "Correct: "+ rightAnswer + "</h2>");
  $("#results").append(reslutsTemplate+"<h2>"+ "Incorrect: "+ wrongAnswer + "</h2>");
}




//display correct, incorrect and unanswered tallies when timer runs out or user clicks done



