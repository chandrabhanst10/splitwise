export const CreateGroup = (data) => {
    return {
      type: "C",
      payload: data,
    };
  };
export const AddGroupExpense = (data) => {
    return {
      type: "ADD_GROUP_EXPENSE",
      payload: data,
    };
  };