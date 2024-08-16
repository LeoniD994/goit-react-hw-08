import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={style.authNav}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
