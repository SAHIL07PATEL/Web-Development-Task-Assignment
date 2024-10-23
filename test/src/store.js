import { configureStore } from "@reduxjs/toolkit";
import { reducerfun } from "./reducer";

export const store = configureStore({
  reducer:{xyz:reducerfun}
}) 