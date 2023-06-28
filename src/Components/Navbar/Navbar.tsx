import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface States {
  activeNav: string;
}
type Props = {};
export class Navbar extends Component<Props, States> {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <h1 className="navbar-heading">SplitWise</h1>
          <ul className="navbar-list">
            <li>
              <Link
                to={"/"}
                className={
                  window.location.pathname === "/"
                    ? "activenav"
                    : "navbar-item"
                }
              >
                Friends
              </Link>
            </li>
            <li>
              <Link
                to={"/group"}
                className={
                  window.location.pathname === "/group"
                    ? "activenav"
                    : "navbar-item"
                }
              >
                Group
              </Link>
            </li>
            <li>
              <Link
                to="/add-expense"
                className={
                  window.location.pathname === "/add-expense"
                    ? "activenav"
                    : "navbar-item"
                }
              >
                Add Expence
              </Link>
            </li>
            <li>
              <Link
                to={"/activity"}
                className={
                  window.location.pathname === "/activity"
                    ? "activenav"
                    : "navbar-item"
                }
              >
                Activity
              </Link>
            </li>
            <li>
              <Link
                to={"/my-account"}
                className={
                  window.location.pathname === "/Account"
                    ? "activenav navbar-item"
                    : "navbar-item"
                }
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
