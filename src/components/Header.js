import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    console.log(auth);
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth ? (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Header;
