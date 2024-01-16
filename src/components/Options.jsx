import { useSelector, useDispatch } from "react-redux";
import { newAnswer } from "../redux/quizSlice";

function Options({ question }) {
  const answer = useSelector((state) => state.quiz.answer);
  const dispatch = useDispatch();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch(newAnswer(index))}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
