import { createSlice } from "@reduxjs/toolkit";

import {
  dataFailedReducer,
  dataReceivedReducer,
  finishReducer,
  newAnswerReducer,
  nextQuestionReducer,
  restartReducer,
  startReducer,
  tickReducer,
} from "./quizReducers";

import { questionsAdapter } from "./questionAdapter";
import { fetchData } from "../services/quizService";

const initialState = questionsAdapter.getInitialState({
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  numQuestions: 0,
});

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    start: startReducer,
    tick: tickReducer,
    newAnswer: newAnswerReducer,
    nextQuestion: nextQuestionReducer,
    finish: finishReducer,
    restart: restartReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, dataReceivedReducer)
      .addCase(fetchData.rejected, dataFailedReducer);
  },
});

export const {
  dataReceived,
  dataFailed,
  start,
  newAnswer,
  nextQuestion,
  finish,
  restart,
  tick,
} = quizSlice.actions;

export default quizSlice.reducer;
