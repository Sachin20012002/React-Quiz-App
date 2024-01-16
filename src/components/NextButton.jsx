import { useSelector, useDispatch } from "react-redux";
import { finish, nextQuestion } from "../redux/quizSlice";

function NextButton() {
  const { answer, index, numQuestions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(nextQuestion())}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(finish())}>
        Finish
      </button>
    );
}

export default NextButton;
