import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick } from "../redux/quizSlice";

function Timer() {
  const secondsRemaining = useSelector((state) => state.quiz.secondsRemaining);
  const dispatch = useDispatch();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch(tick());
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
