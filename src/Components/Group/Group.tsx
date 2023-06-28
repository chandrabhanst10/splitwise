import "./Group.css";
import { withRouter } from "../../Hoc";
import GroupController from "./GroupController";
export class Group extends GroupController {
  renderGroupTable = (
    id: any,
    groupMember: any,
    description: any,
    amount: any,
    split: any,
    whoPaid: any
  ) => {
    return (
      <div className="group-item-main">
        <div className="group-item">
          <h3>{}</h3>
        </div>
        <div className="group-item-details">
          <ul>
            {groupMember.map((member: any, index: number) => {
              return <li key={index}>
                <span>{member}</span>
              </li>;
            })}
          </ul>
          
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="group-main-container">
        <h1 className="roup-heading">Group expenses</h1>
        {this.state.groupExpenses.map((item: any, index: number) => {
          return (
            <div key={index}>
              {this.renderGroupTable(
                item.id,
                item.groupMember,
                item.description,
                item.amount,
                item.split,
                item.whoPaid
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Group);
