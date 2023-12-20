import React,{useState,useRef}from 'react'
import "../App.css";
import questions from '../questions';


export default function QuestionBox() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [show, showScore] = useState(false)

  const focusQuestion = useRef();
  const focusBackground = useRef();


  function highlight(){
    if(focusQuestion.current.style.color === 'red' && focusBackground .current.style.color === 'red'){
      focusQuestion.current.style.color = 'green'
      focusBackground .current.style.color = 'green'
    }else if(focusQuestion.current.style.color === 'green' && focusBackground .current.style.color === 'green'){
      focusQuestion.current.style.color = 'blue' 
      focusBackground.current.style.color ='blue'
    }
    else{
      focusQuestion.current.style.color = 'red' 
      focusBackground.current.style.color ='red'
    }
  }

  function RemoveHighlight(){
    focusQuestion.current.style.color = "black";
    focusBackground.current.style.color = "black"
  }

  const correctAnswer= (isCorrect) => {

      if (isCorrect === true) {
        setScore(score + 1);
      }

      if(currentQuestion<questions.length-1){
      const index = currentQuestion===questions.length-1?questions.length-1:currentQuestion+1;
    setCurrentQuestion(index)
      }
      else{
        showScore(true)
      }
  }


  const reset=()=>{
    window.location.reload()
  }

  let data = questions[currentQuestion];

    return (

        <div ref={focusBackground}>
         {show?(
          <div id='result-outer-div'>
          <h1>Result</h1>
<div id='result-box'>
  <h2>{score<3?"You need Improvement!":score>=3 && score<5?"Nice Work but still need Improvement!":"Good Job!"}</h2>
  <h1 >You scored {score/questions.length *100}%</h1>
  <h3 className='scores'>Total number of questions: <h3>{questions.length}</h3></h3>
  <h3 className='scores'>Total questions that were correct: <h3>{score}</h3></h3>
  <h3 className='scores'>Total number of wrong questions: <h3>{questions.length - score}</h3></h3>
  <button class='btn' onClick={()=>reset()}>Retest</button>

</div>

</div>
)
:(
        <div id='quistion-container'>




            <>

            <h2 id='ques-head'>Question</h2>
            <div id='number'>
            <p id='question-number'>{currentQuestion+1} of {questions.length}</p>
            <p>Your Current Score: {score}</p>

            </div>
            <div className='question-box'>
            <p id='question'ref={focusQuestion}>{data.text}</p>
            </div>
            <div className='option-div'>

                  {data.options.map((i)=>{
                    return (
                    <div onClick={()=>correctAnswer(i.isCorrect)} className='options'>
                      {i.text}
                    </div>
                    )
                  })}

            </div>
            <div className='button-div'>
            <button className='btn' onClick={()=>highlight()}>Highlight</button>
        <button className='btn' onClick={()=>RemoveHighlight()}>Remove Highlight</button>


            </div>
            </>

        </div>
)}
</div>
    )
}