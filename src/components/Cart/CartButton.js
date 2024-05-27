import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCartVisibility } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleShowCart = () => {
    dispatch(toggleCartVisibility());
  };

  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
