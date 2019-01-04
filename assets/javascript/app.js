//declare variables
const quizQuestions = [
  {
    question: "What year did Metallica relase their first album?",
    answers: {
      a: "1976",
      b: "1988",
      c: "1983",
      d: "1991"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is the Japanse version of Superman",
    answers: {
      a: "Vegta",
      b: "Goku",
      c: "Naruto",
      d: "Super Mario"
    },
    correctAnswer: "b"
  },
  {
    question: "What iconic Gibson guitar was named after a famous guitarist?",
    answers: {
      a: "Les Paul",
      b: "Randy Rhoads",
      c: "Eric Clapton",
      d: "Dimebag Darrell"
    },
    correctAnswer: "a"
  },
  {
    question: "What foreign company owns American automaker Chrysler?",
    answers: {
      a: "Volkswagen",
      b: "Fiat",
      c: "Pugeot",
      d: "Toyota"

    },
    correctAnswer: "b"
  }

];

const resultsContainer = document.getElementById('results');
const userAnswer = []; 
const quizContainer = $("#quiz"); 
var timer = 50;
//variable that holds intervalID during run function
var intervalId;


//create a start button that starts the game and the timer
$("#start-btn").on("click", run);
//create a done button that ends game and shows user score 
$("#done").on("click", stop); 



//create a run function that runs the clock (clear interval, set interval to intervalID var, use decrement function and 1 second as arguments)
function run() {
  console.log("test");
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  

  //display quiz 
  for(let i =0; i<quizQuestions.length; i++){
    $("#quiz").append("<p>"+ quizQuestions[i].question + "</p>"); 
    //$("#quiz").html("<p>"+ this.answers[i] + "</p>"); 
  }
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
function stop (){
  clearInterval(intervalId); 
}





//create multiple choice answers for each question that allows user to only select one 

//push correct answers and incorrect answers to respective arrays




//display correct, incorrect and unanswered tallies when timer runs out or user clicks done



