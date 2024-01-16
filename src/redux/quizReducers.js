import { questionsAdapter } from "./questionAdapter";

const SECS_PER_QUESTION = 30;
let question;

export const dataReceivedReducer = (state, action) => {
  const questions = action.payload.questions;
  console.log("questions", questions);

  questionsAdapter.setAll(state, questions);
  state.status = "ready";
  state.maxPossiblePoints = questionsAdapter
    .getSelectors()
    .selectAll(state)
    .reduce((prev, curr) => prev + curr.points, 0);

  state.numQuestions = questionsAdapter.getSelectors().selectAll(state).length;
};

export const dataFailedReducer = (state) => {
  return {
    ...state,
    status: "error",
  };
};

export const startReducer = (state) => {
  return {
    ...state,
    status: "active",
    secondsRemaining: state.ids.length * SECS_PER_QUESTION,
  };
};

export const newAnswerReducer = (state, action) => {
  question = state.entities[state.index + 1];

  return {
    ...state,
    answer: action.payload,
    points:
      action.payload === question.correctOption
        ? state.points + question.points
        : state.points,
  };
};

export const nextQuestionReducer = (state) => {
  return { ...state, index: state.index + 1, answer: null };
};

export const finishReducer = (state) => {
  return {
    ...state,
    status: "finished",
    highscore: state.points > state.highscore ? state.points : state.highscore,
  };
};

export const restartReducer = (state, action) => {
  return {
    ...state,
    status: "ready",
    answer: null,
    points: 0,
    secondsRemaining: null,
    index: 0,
  };
};

export const tickReducer = (state, action) => {
  return {
    ...state,
    secondsRemaining: state.secondsRemaining - 1,
    status: state.secondsRemaining === 0 ? "finished" : state.status,
  };
};
