import { Component } from "react";
import { AddExpense } from "../../Redux/Actions/ProductActions";
import { CreateGroup } from "../../Redux/Actions/GroupAction";
interface States {
  allId: any;
  //friend expense state
  name: any;
  description: any;
  amount: any;
  split: any;
  itemId: any;
  //group expense states
  groupMemberName: any;
  groupMember: any;
  groupName: any;
  groupId: any;

  groupForm: boolean;
}
type Props = {
  Dispatch: any;
};
export class AddExpenseController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allId: [],
      //friend expense state
      name: "",
      description: "",
      amount: "",
      split: "",
      itemId: "",
      //group expense states
      groupMemberName: "",
      groupMember: [],
      groupName: "",

      groupId: "",

      groupForm: false,
    };
  }

  //frinds input handler
  handleInputChange = (event: any) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //group input handler

  handleGroupInputChange = (event: any) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  handleAddMember = (event: any) => {
    // event.preventDefault();
    if (event.key === "Enter") {
      if (this.state.groupMemberName === "") {
        alert("Enter group member name");
      } else {
        this.addMember(this.state.groupMemberName);
      }
    }
  };
  addMember = (groupMemberName: string) => {
    let groupMembers = this.state.groupMember;
    groupMembers.push(groupMemberName);
    this.setState(
      {
        groupMember: this.state.groupMember,
      },
      () => {
        // console.log(this.state.groupMember);
        this.setState({
          groupMemberName: "",
        });
      }
    );
  };

  handleRemoveGroupMember = (member: string) => {
    let memberIndex = this.state.groupMember.findIndex((item: string) => {
      return item === member;
    });
    // console.log(memberIndex);
    this.state.groupMember.splice(memberIndex, 1);
    this.setState({ groupMember: this.state.groupMember }, () => {
      // console.log(this.state.groupMember);
    });
  };
  //random id generator
  generateRandomId: any = () => {
    const id = Math.floor(Math.random() * 9000) + 1000; // Generate a random ID
    const isIdUnique = this.state.allId.includes(id); // Check if ID is already present in the array

    if (isIdUnique) {
      // If ID is not unique, generate a new ID
      return this.generateRandomId();
    } else {
      // If ID is unique, store it in the array
      let ids = this.state.allId;
      ids.push(id);
      this.setState({ allId: this.state.allId }, () => {
        // console.log(this.state.allId);
      });
      return id;
    }
  };
  //frinds submit handler

  handleSubmit = async (e: any) => {
    e.preventDefault();
    let randomId = await this.generateRandomId();

    this.setState({ itemId: randomId }, () => {
      if (
        this.state.itemId === "" ||
        this.state.name === "" ||
        this.state.description === "" ||
        this.state.amount === "" ||
        this.state.split === ""
      ) {
        alert("Please fill all input");
      } else {
        let data = {
          id: this.state.itemId,
          name: this.state.name,
          description: this.state.description,
          amount: this.state.amount,
          split: this.state.split,
        };
        this.props.Dispatch(AddExpense(data));
        this.setState({ name: "", description: "", amount: 0, split: "" });
      }
    });
  };
  //group submit handler
  handleGroupSubmit = async (e: any) => {
    e.preventDefault();
    let randomGroupId = await this.generateRandomId();
    this.setState({ groupId: randomGroupId }, () => {
      console.log(
        this.state.groupId,
        this.state.groupMember,
        this.state.groupName
      );
      if (
        this.state.groupMember.length === 0 ||
        this.state.groupName === "" ||
        this.state.groupId === ""
      ) {
        alert("Please fill all fields");
      } else {
        let data = {
          id: this.state.groupId,
          groupMember: this.state.groupMember,
          groupName: this.state.groupName,
        };
        this.props.Dispatch(CreateGroup(data));
        this.setState({
          groupMemberName: "",
          groupMember: [],
          groupName: "",
          groupId: "",
        });
      }
    });
  };

  handleBtn = () => {
    this.setState({ groupForm: !this.state.groupForm });
  };
}

export default AddExpenseController;
