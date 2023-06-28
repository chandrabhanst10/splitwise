import { Component } from "react";
import { RemoveExpense } from "../../Redux/Actions/ProductActions";

interface States {
  groupExpenses: any;
  showItemMenu: boolean;
  // addGroupExpense states
  groupName: string;
  groupMember: any;
  amountGroup: number;
  groupDescription: string;
  groupMemberSelected: any;
  whoPaid: string;
  splitGroup: string;
}
type Props = {
  GroupSelector: any;
  Dispatch: any;
};
export class GroupController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      groupExpenses: this.props.GroupSelector,
      showItemMenu: true,
      // addGroupExpense states
      groupName: "",
      groupMember: [],
      amountGroup: 0,
      groupDescription: "",
      groupMemberSelected: [],
      whoPaid: "",
      splitGroup: "",
    };
  }
  handleGroupInputChange = (event: any) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSettle = (id: number) => {
    // this.props.Dispatch(RemoveExpense(id));
    let newExpense = this.state.groupExpenses.filter((item: any) => {
      return item.id !== id;
    });
    console.log(newExpense);
    this.setState({ groupExpenses: newExpense }, () => {
      this.props.Dispatch(RemoveExpense(newExpense));
    });
  };
}

export default GroupController;
