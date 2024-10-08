import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector((state) => state.auth.token);
  return isLoggedIn || token ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
