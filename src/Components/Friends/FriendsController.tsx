import { Component } from "react";
import { RemoveExpense } from "../../Redux/Actions/ProductActions";

interface States {
  Expenses: any;
  showItemMenu: boolean;
}
type Props = {
  Selector: any;
  Dispatch: any;
};
export class FriendsController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Expenses: this.props.Selector,
      showItemMenu: true,
    };
    // console.log("@@@ constructor", this.props.Selector);
  }
  // componentDidMount(): void {
  //   console.log(
  //     "@@@ componentDidMount this.props.Selector ",
  //     this.props.Selector
  //   );
  // }
  // componentDidUpdate(previewState: any): void {
  //   console.log(
  //     "@@@ componentDidUpdate ### Selector ",
  //     this.props.Selector,
  //     previewState
  //   );
  //   if (this.state.Expenses.length !== this.props.Selector.length) {
  //     this.setState({
  //       Expenses: this.props.Selector,
  //     });
  //   }
  // }
  handleSettle = (id: number) => {
    // this.props.Dispatch(RemoveExpense(id));
    let newExpense = this.state.Expenses.filter((item: any) => {
      return item.id !== id;
    });
    console.log(newExpense);
    this.setState({ Expenses: newExpense }, () => {
      this.props.Dispatch(RemoveExpense(newExpense));
    });
  };
}

export default FriendsController;
