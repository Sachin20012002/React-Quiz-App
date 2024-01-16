import { useSelector, useDispatch } from "react-redux";
import { start } from "../redux/quizSlice";

function StartScreen() {
  const numQuestions = useSelector((state) => state.quiz.numQuestions);
  const dispatch = useDispatch();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch(start())}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
