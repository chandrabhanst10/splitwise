import { combineReducers } from "redux";
import { ExpenseReducer, GroupExpenseReducer } from "./ProductReducer";

const CombineReducers = combineReducers({
  AllExpense: ExpenseReducer,
  GroupExpense: GroupExpenseReducer,
});
export default CombineReducers;
