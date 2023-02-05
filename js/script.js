const quizQuestions = [
    {
        question: "What is the capital of France?",
                 a : "Paris", b: "London", c: "Rome" , 
                 correctAnswer: "a" , 
    },
    {
        question: "What is the largest planet in the solar system?",
                  a : "Earth", b: "Jupiter", c: "Saturn" ,
                 correctAnswer: "b",
    },
    {
        question: "how old is Smith?",
                   a:"41",b: "35",c: "29",
                 correctAnswer: "c" ,
    },
    {
        question: "what is Smith favourite food?",
                  a:"bread",b: "rice",c: "beans",
                   correctAnswer: "a" ,
    },

     


];
const questionEl = document.getElementById("question");
const aAnswer = document.getElementById("a_answer");
const bAnswer = document.getElementById("b_answer");
const cAnswer = document.getElementById("c_answer");
const submitBtn = document.getElementById("submit");
const answerEl = document.querySelectorAll(".answer")
const totalEl = document.getElementById("total")




let currentQuiz = 0; 
let score = 0;

loadQuiz()


function loadQuiz(){
    deSelectAnswer()
    
    const currentquizdata = quizQuestions[currentQuiz];
    questionEl .innerText= currentquizdata.question
    aAnswer.innerText = currentquizdata.a
    bAnswer.innerText = currentquizdata.b
    cAnswer.innerText = currentquizdata.c
   
}

function getSelected() {
    
    
  let answer =undefined

    answerEl.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}
function deSelectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false
            
        
    })
    

}
submitBtn.addEventListener("click", () =>{
   

   const answer = getSelected();
   console.log(answer)
   if (answer){
    if (answer ===  quizQuestions[currentQuiz].correctAnswer){
        score++
    }
    currentQuiz++
    
    if(currentQuiz < quizQuestions.length){
        loadQuiz()

    } else{
        totalEl.innerHTML = `<h3> You scored ${score}/${quizQuestions.length}</h3>
        <button onClick="location.reload()">Reload</button>`
       
    }

   }
  
   
})





// playing with my console

/* <button onClick="location.reload()">
        Reload
     </button> ` */

// submitBtn.addEventListener("click", submitQuiz);
// function submitQuiz() {
//     currentQuiz++
   
//     if(currentQuiz < quizQuestions.length){
//         loadQuiz()

//     } else{
//         alert(" you have finished your quiz")
//     }

// }

 







// const numQuestions = questions.length;
// let currentQuestionIndex = Math.floor(Math.random() * numQuestions);
// let currentQuestion = questions[currentQuestionIndex];

// console.log(currentQuestion.question);
// console.log(currentQuestion.answers);

// const userAnswer = prompt("What is your answer?");

// if (userAnswer === currentQuestion.correctAnswer) {
//     console.log("Correct!");
// } else {
//     console.log("Incorrect. The correct answer is " + currentQuestion.correctAnswer);
// }
