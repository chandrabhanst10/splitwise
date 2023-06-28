import React, { Component } from "react";
import GroupController from "./GroupController";
import "./Group.css";
export class AddGroupExpense extends GroupController {
  render() {
    return (
      <div>
        <div>
          <h1 className="friends-main-heading">Create Group</h1>
          <form
            className="add-form group-add-form"
            //   onSubmit={this.handleGroupSubmit}
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
              />{" "}
            </label>

            <label className="form-item">
              Group Member
              <div className="form-input form-textarea">
                {this.state.groupMember.length === 0
                  ? "No member added"
                  : this.state.groupMember.map((member: any, index: number) => {
                      return (
                        <button key={index}>
                          {member} <span>X</span>
                        </button>
                      );
                    })}
              </div>
            </label>

            <label className="form-item">
              Amount
              <input
                className="form-input"
                type="number"
                name="amountGroup"
                required
                value={this.state.amountGroup}
                onChange={this.handleGroupInputChange}
                disabled={this.state.groupMember.length === 0 ? true : false}
              />{" "}
            </label>
            <label className="form-item">
              Who paid
              <select
                value={this.state.whoPaid}
                name="whoPaid"
                onChange={(e) => this.setState({ whoPaid: e.target.value })}
                className="form-input"
                required
                disabled={this.state.amountGroup === 0 ? true : false}
              >
                <option>Who paid</option>
                {this.state.groupMember.map((member: any, index: number) => {
                  return (
                    <option key={index} value={member}>
                      {member}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="form-item">
              Split
              <select
                value={this.state.splitGroup}
                name="splitGroup"
                onChange={(e) => this.setState({ splitGroup: e.target.value })}
                className="form-input"
                required
                disabled={this.state.whoPaid === "" ? true : false}
              >
                <option>Select split schema</option>

                <option
                  value={`${this.state.whoPaid} paid, split equally`}
                >{`${this.state.whoPaid} paid, split equally`}</option>
                <option
                  value={`${this.state.whoPaid} owed the full amount`}
                >{`${this.state.whoPaid} owed the full amount`}</option>
              </select>
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
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddGroupExpense;
