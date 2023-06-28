import "./Friends.css";
import { withRouter } from "../../Hoc";
import FriendsController from "./FriendsController";
import UserImg from "../../splitwiseLogo.png";
export class Friends extends FriendsController {
  renderItemModal = () => {
    return (
      <div>
        <div className="modal-container">
          <div>delete</div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="friends-main">
        <h1 className="friends-main-heading">Friends Expenses</h1>
        {this.state.Expenses.map((item: any, index: number) => {
          return (
            <div key={index} className="friend-item">
              <div className="friend-item-left">
                <img className="friend-img" src={UserImg} alt="" />
                <div>
                  <h2 className="friend-name">{item.name}</h2>
                  <h6>{item.description}</h6>
                </div>
              </div>
              <div className="friend-item-right">
                <span>
                  <h4
                    className={
                      item.split === "You paid, split equally" ||
                      item.split === "You owed the full amount"
                        ? "amount-desc-receive"
                        : item.split === `${item.name} paid, split equally` ||
                          item.split === `${item.name} owed the full amount`
                        ? "amount-desc-pay"
                        : ""
                    }
                  >
                    owes you
                  </h4>
                  <h2
                    className={
                      item.split === "You paid, split equally" ||
                      item.split === "You owed the full amount"
                        ? "amount-receive"
                        : item.split === `${item.name} paid, split equally` ||
                          item.split === `${item.name} owed the full amount`
                        ? "amount-pay"
                        : ""
                    }
                  >
                    &#8377;
                    {item.split === "You paid, split equally"
                      ? item.amount / 2
                      : item.split === "You owed the full amount"
                      ? item.amount
                      : item.split === `${item.name} paid, split equally`
                      ? item.amount / 2
                      : item.split === `${item.name} owed the full amount`
                      ? item.amount
                      : ""}
                  </h2>
                </span>

                <span
                  className="menu-icon"
                  onClick={() => this.handleSettle(item.id)}
                >
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </span>
              </div>
              {/* {this.state.showItemMenu ? this.renderItemModal() : ""} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Friends);
