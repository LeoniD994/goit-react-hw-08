import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.userMenu}>
      <p className={style.userName}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())} className={style.userBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
