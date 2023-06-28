import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Friends from "./Components/Friends/Friends";
import Group from "./Components/Group/Group";
import AddExpense from "./Components/AddExpense/AddExpense";
import Activity from "./Components/Activity/Activity";
import MyAccount from "./Components/MyAccount/MyAccount";
import { withRouter } from "./Hoc";
import AddGroupExpense from "./Components/Group/AddGroupExpense";

function App(props: any) {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Friends
              Selector={props.router.FriendsSelector.Expenses}
              Dispatch={props.router.Dispatch}
            />
          }
        />
        <Route
          path="/group"
          element={
            <Group
              GroupSelector={props.router.GroupSelector.GroupExpenses}
              Dispatch={props.router.Dispatch}
            />
          }
        />
        <Route
          path="/add-expense"
          element={<AddExpense Dispatch={props.router.Dispatch} />}
        />
        <Route path="/activity" element={<Activity />} />
        <Route path="/add-group-expense" element={<AddGroupExpense GroupSelector={undefined} Dispatch={undefined} />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
