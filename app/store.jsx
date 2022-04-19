import { configureStore } from "@reduxjs/toolkit";
import saveorderSlice from '../features/saveorderSlice/saveOrderSlice'

export const store = configureStore({
  reducer :{
    saveorder:saveorderSlice
  }

});

