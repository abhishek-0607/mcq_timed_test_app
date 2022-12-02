import React, { useState } from "react";
import { questionBank } from "./data";
import "../css/maincomp.css";
import { Question } from "./Question";
import { Time } from "./Time";

export const MainComp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(false);
  const [results, setResults] = useState({});

  const handleAnswerResponse = (item) => {
    if (item.isCorrect) {
      setScore(score + 1);
    }
    setResults({ ...results, [currentQuestion + 1]: item.answer });
  };
  console.log(results);

  return (
    <div className="container">
      {/* answer table */}
      <div className="answerTable">
        <h2>Q&A App</h2>
        <h2>Review Answer here</h2>
        <div className="answers">
          {Object.keys(results).map((item) => (
            <p key={item}>
              <strong>
                #{item} {results[item]}
              </strong>
            </p>
          ))}
        </div>

        {start && !showScore && timer !== 0 ? (
          <button
            onClick={() => {
              setStart(false);
              setShowScore(true);
            }}
          >
            Submit the test
          </button>
        ) : (
          <button
            onClick={() => {
              setStart(true);
              setShowScore(false);
              setTimer(10);
              setResults({});
              setScore(0);
              setCurrentQuestion(0);
            }}
          >
            start the test
          </button>
        )}
      </div>
      <div className="quesAnswer">
        {start && timer !== 0 ? (
          <>
            {/* question box */}

            <Time timer={timer} setTimer={setTimer} />
            <Question
              questionBank={questionBank}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              handleAnswerResponse={handleAnswerResponse}
            />
          </>
        ) : (
          (timer === 0 || showScore) && (
            <div className="showResults">
              <h1>Final results</h1>
              <h2>
                {score} out of {questionBank.length} correct
              </h2>
              <h3>
                Results: {Math.ceil((score / questionBank.length) * 100)}%
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};
