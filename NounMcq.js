// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "Find out the proper noun in the following sentence?",
    options: ['Riya', 'Dog', 'Park', 'All of the above'],
    correctAnswer: 'Plentiful',
  },
  {
    question: 'The girl arrived in the state last week:',
    options: ['Girl', 'State', 'Week', 'All'],
    correctAnswer: 'end',
  },
  {
    question: 'Find out the collective noun from the following sentence:',
    options: ['He', 'Film', 'Crew', 'None of the above'],
    correctAnswer: 'turn down',
  },
  {
    question: 'Find out the concrete noun in the following sentence',
    options: ['Beauty', 'Mountain', 'Both ', 'None of the Above'],
    correctAnswer: 'importance',
  },
  {
    question: ':',
    options: ['shared', 'displayed', 'prepared', 'forced'],
    correctAnswer: 'shared',
  },
  {
    question: 'Click the best synonym for advocate:',
    options: ['judge', 'defender', 'trainer', 'opponent'],
    correctAnswer: 'defender',
  },
  {
    question: 'Click the best synonym for result:',
    options: ['effect', 'refuse', 'success', 'reply'],
    correctAnswer: 'effect',
  },
  {
    question: 'Click the best synonym for dawn:',
    options: ['early morning', 'sudden movement', 'quick thought', 'late evening'],
    correctAnswer: 'early morning',
  },
  {
    question: 'Click the best synonym for likelihood:',
    options: ['childhood', 'loyalty', 'probability', 'enjoyment'],
    correctAnswer: 'probability',
  },
  {
    question: 'Click the best synonym for impetuous:',
    options: ['angry', 'acting quickly', 'careful', 'looking guilty'],
    correctAnswer: 'acting quickly',
  },
  {
    question: 'Click the best synonym for adjourn:',
    options: ['promote', 'upgrade', 'end', 'return'],
    correctAnswer: 'end',
  },
  // Add more quiz questions here
];

// src/components/Quiz.js






const questionTimeLimit = 30; // 30 seconds per question
const questionsPerPage =1;
const NQuiz = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(questionTimeLimit);
  const currentQuestion = questions[currentPage];

  useEffect(() => {
    let timer;

    if (timeLeft > 0 && !showResult) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      handleNextPage();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, showResult]);

  const handleAnswerSelection = (option, correctAnswer) => {
    // Update the selected answer for the current question
    if(selectedAnswers[currentPage] === ''){
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentPage] = option;
      return newAnswers;
    });

    // Calculate score if the selected answer is correct
    if (option === correctAnswer) {
      setScore(score + 1);
    }

    // Display Next Page button after selecting an option
    setShowResult(false);
  }
  };

  const handleNextPage = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
      setTimeLeft(questionTimeLimit); // Reset timer for the next question
    } else {
      setShowResult(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setTimeLeft(questionTimeLimit); // Reset timer for the previous question
    }
  };

  // Conditionally render the "Next Page" button
  const renderNextPageButton = () => {
    if (!showResult) {
      return (
        <button className="next-page-button" onClick={handleNextPage}>
          Next Page
        </button>
      );
    }
    return null; // Don't render the button if showing results
  };
  const handleRestartQuiz = () => {
    setCurrentPage(0);
    setSelectedAnswers(Array(questions.length).fill(''));
    setShowResult(false);
    setScore(0);
    setTimeLeft(questionTimeLimit);
  };
  

  return (
    <div className="quiz-container">
      <div className="quiz-header">
      <div class ="qh2">
        <div class ="qh1 qh1a">
        {`${currentPage + 1} OF ${Math.ceil(questions.length / questionsPerPage)}`} 
        
        </div>
        <div class = "qh1">{`${timeLeft} SECONDS`}</div>
       
      </div>
      </div>
      <div className="quiz-content">
        {showResult ? (
          <div className="result">
            <h2 class ="qresult">QUIZ RESULT</h2>
            <p class="score1">Your score: {score} out of {questions.length}</p>
            <button className="restart-button" onClick={handleRestartQuiz}>
      Restart Quiz
    </button>
          </div>
        ) : (
          <>
            <div className="question-header">
  <div class="o"> </div>
  <div class = "one"> </div>  
  <div class="two">
  </div>
</div>
            <div className="question">
              <h3>{currentQuestion.question}</h3>
            </div>
            <div className="options">
              
              <div className = "op1">

              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  className={`option ${selectedAnswers[currentPage] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelection(option, currentQuestion.correctAnswer)}
                >
                  {option}
                </button>
              ))}
              
              </div>
            </div>
            <div className="button-container">
              {currentPage > 0 && (
                <button className="prev-page-button" onClick={handlePrevPage}>
                  Previous Page
                </button>
              )}
              {renderNextPageButton()} {/* Render the Next Page button */}
            </div>
          </>
        )}
      </div>
      <footer className="quiz-footer">
        English Vocabulary Quiz - © 2023
      </footer>
    </div>
  );
};

export default NQuiz;
