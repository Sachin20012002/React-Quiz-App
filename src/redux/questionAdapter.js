import { createEntityAdapter } from "@reduxjs/toolkit";
import { schema } from "normalizr";

export const questionsAdapter = createEntityAdapter();

export const questionEntity = new schema.Entity("questions");

export const {
  selectById: selectQuestionById,
  selectIds: selectQuestionIds,
  selectEntities: selectQuestionEntities,
  selectAll: selectAllQuestions,
  selectTotal: selectTotalQuestions,
} = questionsAdapter.getSelectors((state) => state.quiz);
