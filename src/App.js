import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "./store/uiSlice";
import Notification from "./components/UI/Notification";

let initialRender = true;

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        dispatch(
          showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data.",
          })
        );
        const res = await fetch(
          "https://expense-tracker-a60de-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!res.ok) {
          throw new Error("Sending cart data failed");
        }

        dispatch(
          showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully.",
          })
        );
      } catch (error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      }
    };
    if (initialRender) {
      initialRender = false;
      return;
    }
    fetchCart();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {!toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
