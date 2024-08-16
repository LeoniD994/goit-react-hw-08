import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.appBar}>
      <div className={styles.navContainer}>
        <Navigation  />
        {isLoggedIn ? <UserMenu  /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
