import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const FriendsSelector = useSelector((state: any) => state.AllExpense);
    const GroupSelector = useSelector((state: any) => state.GroupExpense);
    const Dispatch = useDispatch();

    return (
      <Component
        router={{
          location,
          navigate,
          params,
          FriendsSelector,
          GroupSelector,
          Dispatch,
        }}
        {...props}
      />
    );
  };

  return Wrapper;
};
