import { useSelector } from "react-redux";

import Options from "./Options";
import { selectQuestionById } from "../redux/questionAdapter";

function Question() {
  const index = useSelector((state) => state.quiz.index);
  const question = useSelector((state) => selectQuestionById(state, index + 1));

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
