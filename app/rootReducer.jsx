import { combineReducers } from "redux";
import saveorderSlice from '../features/saveorderSlice/saveOrderSlice'
const rootReducer = combineReducers(
    {
    saveorder: saveorderSlice,
});
export default rootReducer;