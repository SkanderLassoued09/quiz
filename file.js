const questions = [
    {
        question:"How old am I ?" ,
        answer1 : 22 , 
        answer2 : 19 , 
        answer3 : 30 , 
        answer4 : 24 ,
        correct : "answer4" 

    },
    {
        question:"What does HTML stand for ?" ,
        answer1 : "Hyper Text Markup Language" , 
        answer2 : "Hyper Links Markup Language" , 
        answer3 : "Programming Language" , 
        answer4 : "Home Tool Markup Language" ,
        correct : "answer1"

    },
    {
        question:"Who is making the Web standards ?" ,
        answer1 : "Mozilla" , 
        answer2 : "The World Wide Web Consortium" , 
        answer3 : "Google" , 
        answer4 : "Microsoft" ,
        correct : "answer2"

    },
    {
        question:"Choose the correct HTML element for the largest heading: ?" ,
        answer1 :"<Heading>", 
        answer2 : "<h6>" , 
        answer3 : "<head>" , 
        answer4 : "<h1>" ,
        correct : "answer4" 

    },
] ;

let currentquestion = 0 ;
let answer = undefined ;
let score = 0 ;
window.onload = function (){
    
    document.getElementById('questionEl').innerText = questions[currentquestion].question
    document.getElementById('oneAnswer').innerText = questions[currentquestion].answer1
    document.getElementById('twoAnswer').innerText = questions[currentquestion].answer2
    document.getElementById('threeAnswer').innerText = questions[currentquestion].answer3
    document.getElementById('fourAnswer').innerText = questions[currentquestion].answer4
}


document.getElementById('submit').addEventListener('click' , () => {
    
    //check to see the answer 
    let check = checkQuestion();
    console.log(check)
    

    if(check){
        if(check === questions[currentquestion].correct){
            score++;
            unselect();
            
        } else {
            unselect()
        }
      
console.log(score)

        currentquestion++;
        if (currentquestion < questions.length){
            document.getElementById('questionEl').innerText = questions[currentquestion].question
        document.getElementById('oneAnswer').innerText = questions[currentquestion].answer1
        document.getElementById('twoAnswer').innerText = questions[currentquestion].answer2
        document.getElementById('threeAnswer').innerText = questions[currentquestion].answer3
        document.getElementById('fourAnswer').innerText = questions[currentquestion].answer4
        } else if (score > 2){
            alert(`Good you finished the quiz with respectful score ${score}`);
            console.log('You finished the quiz')
        } else {
            alert(` Hard luck your score is ${score}`)
        }
    }
    
    
    
});

function checkQuestion(){
    const answerEls = document.querySelectorAll('.answer-el');
    // a <== Answers inside answer
    let answer ;
    answerEls.forEach((a) => {
        if(a.checked){
           answer = a.id ;
        }
    });
    return answer
   
}

function unselect(){
    const answerEls = document.querySelectorAll('.answer-el');
    // a <== Answers inside answer
    answerEls.forEach((a) => {
        a.checked = false;
});
}





