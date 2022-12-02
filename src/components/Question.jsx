import React, { useEffect, useState } from "react";

export const Question = ({
  questionBank,
  currentQuestion,
  setCurrentQuestion,
  handleAnswerResponse,
}) => {
  useEffect(() => {
    setCurrentQuestion(currentQuestion);
    setSelectedAnswer(null);
  }, [currentQuestion]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleClick = (index) => {
    setSelectedAnswer(index);
  };
  return (
    <div className="questionContainer">
      <div className="questionText">
        <p>
          <strong>{currentQuestion + 1}.</strong>{" "}
          {questionBank[currentQuestion].ques}
        </p>
      </div>
      <div className="options">
        {questionBank[currentQuestion].options.map((item, index) => (
          <button
            className={selectedAnswer === index ? "active" : "unselected"}
            key={index + 1}
            onClick={() => {
              handleAnswerResponse(item);
              handleClick(index);
            }}
          >
            {item.answer}
          </button>
        ))}
      </div>
      <div className="navigate">
        <button
          className="prev"
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Prev
        </button>
        <button
          className="next"
          disabled={currentQuestion + 1 === questionBank.length}
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
