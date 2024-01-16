import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { questionEntity } from "../redux/questionAdapter";

export const fetchData = createAsyncThunk("quiz/fetchData", async () => {
  try {
    const response = await fetch("http://localhost:9000/questions");
    console.log(response, "Response");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const normalized = normalize(data, [questionEntity]);
    console.log(normalized, "Norm");
    return normalized.entities;
  } catch (error) {
    throw error;
  }
});
