import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCartVisibility } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(toggleCartVisibility());
  };

  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
