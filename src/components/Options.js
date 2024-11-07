function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option 
                ${i === answer ? "answer" : ""} 
                ${
                  hasAnswered && i === question.correctOption
                    ? "correct"
                    : "wrong"
                }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
