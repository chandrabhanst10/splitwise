import "./AddExpense.css";
import AddExpenseController from "./AddExpenseController";
export class AddExpense extends AddExpenseController {
  renderFriendForm = () => {
    return (
      <div>
        <h1 className="friends-main-heading">Add Expense</h1>

        <form className="add-form" onSubmit={this.handleSubmit}>
          <label className="form-item">
            Name
            <input
              className="form-input"
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />{" "}
          </label>
          <label className="form-item">
            Description
            <input
              className="form-input"
              type="text"
              required
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />{" "}
          </label>
          <label className="form-item">
            Amount
            <input
              className="form-input"
              type="number"
              required
              name="amount"
              value={this.state.amount}
              onChange={this.handleInputChange}
            />{" "}
          </label>
          <label className="form-item">
            Split
            <select
              value={this.state.split}
              onChange={(e) => this.setState({ split: e.target.value })}
              className="form-input"
              disabled={this.state.name === "" ? true : false}
            >
              <option>Select split schema</option>
              <option value="You paid, split equally">
                You paid, split equally
              </option>
              <option value="You owed the full amount">
                You owed the full amount
              </option>
              <option
                value={`${this.state.name} paid, split equally`}
              >{`${this.state.name} paid, split equally`}</option>
              <option
                value={`${this.state.name} owed the full amount`}
              >{`${this.state.name} owed the full amount`}</option>
            </select>
          </label>
          <input type="submit" className="submit-btn" />
        </form>
      </div>
    );
  };
  renderGroupForm = () => {
    return (
      <div>
        <h1 className="friends-main-heading">Create Group</h1>
        <form
          className="add-form group-add-form"
          onSubmit={this.handleGroupSubmit}
        >
          <label className="form-item">
            Group Name
            <input
              className="form-input"
              placeholder="Enter group name"
              type="text"
              required
              name="groupName"
              value={this.state.groupName}
              onChange={this.handleGroupInputChange}
            />{" "}
          </label>
          <label className="form-item">
            Name
            <div className="form-input-container">
              <input
                className="form-input-name"
                placeholder="Enter group member name"
                type="text"
                name="groupMemberName"
                value={this.state.groupMemberName}
                onChange={this.handleGroupInputChange}
              />{" "}
              <span
                onClick={() => this.addMember(this.state.groupMemberName)}
                className="plus-icon"
              >
                +
              </span>
            </div>
          </label>
          <label className="form-item">
            Group Member
            <div className="form-input form-textarea">
              {this.state.groupMember.length === 0
                ? "No member added"
                : this.state.groupMember.map((member: any, index: number) => {
                    return (
                      <button key={index}>
                        {member}{" "}
                        <span
                          onClick={() => this.handleRemoveGroupMember(member)}
                        >
                          X
                        </span>
                      </button>
                    );
                  })}
            </div>
          </label>

          <button
            // disabled={
            //   this.state.groupMember.length === 0 ||
            //   this.state.descriptionGroup === "" ||
            //   this.state.amountGroup === "" ||
            //   this.state.splitGroup === "" ||
            //   this.state.whoPaid === "" ||
            //   this.state.groupId === ""
            //     ? true
            //     : false
            // }
            
            className="submit-btn"
            onClick={this.handleGroupSubmit}
          >
            submit
          </button>
        </form>
      </div>
    );
  };
  render() {
    return (
      <div className="add-ex-main">
        <div className="left-container">
          <div>
            <h1 className="logo-heading">SplitWise</h1>
          </div>
          <div className="form-btn-container">
            <button
              onClick={this.handleBtn}
              className={
                this.state.groupForm === false ? "btn-active btn" : "btn"
              }
            >
              Friend Expenses
            </button>
            <button
              onClick={this.handleBtn}
              className={this.state.groupForm ? "btn-active btn" : "btn"}
            >
              Group Expenses
            </button>
          </div>
        </div>
        <div>
          {this.state.groupForm
            ? this.renderGroupForm()
            : this.renderFriendForm()}
        </div>
      </div>
    );
  }
}

export default AddExpense;
