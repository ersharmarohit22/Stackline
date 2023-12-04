import { configureStore } from "@reduxjs/toolkit";
import jsonDataSlicer from "./jsonData/jsonDataSlicer";

export const store = configureStore({
  reducer : {
    dataJson : jsonDataSlicer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
