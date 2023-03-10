import React, { useState } from 'react';
import {Questions} from './questions/Questions.js'
import {Score} from './components/Score.js'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(!showScore);
    }    
  }; 

	return (
    <div className="app">
      {showScore ? (
        <Score score={score} length = {Questions.length}/>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/{Questions.length}
            </div>
            <div className="question-text">{Questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {Questions[currentQuestion].answerOptions.map((answerOption) => (
              <button key={answerOption.id} onClick = { () => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}