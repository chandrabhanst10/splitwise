const initailState = {
  GroupExpenses: [],
  Expenses: [],
};
export const ExpenseReducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const { id, name, description, amount, split } = action.payload;
      return {
        ...state,
        Expenses: [
          ...state.Expenses,
          {
            id: id,
            name: name,
            description: description,
            amount: amount,
            split: split,
          },
        ],
      };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        Expenses: action.data,
      };

    default:
      return state;
  }
};
export const GroupExpenseReducer = (state = initailState, action) => {
  switch (action.type) {
    case "CREATE_GROUP":
      const { id, groupMember, groupName } = action.payload;
      return {
        ...state,
        GroupExpenses: [
          ...state.GroupExpenses,
          {
            id: id,
            groupMember: groupMember,
            groupName: groupName,
          },
        ],
      };
    case "REMOVE_GROUP_EXPENSE":
      return {
        ...state,
        GroupExpenses: action.data,
      };

    default:
      return state;
  }
};
