import React, { useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Header from "../components/global/Header/Header";
import Footer from "../components/global/Footer/Footer";
import Cart from "../components/global/Cart";

const initCart = [];

export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
};

function CartReducer(state, action) {
  const newState = [...state];
  const productIndex = newState.findIndex(
    (val) => val.id === action.payload.id
  );

  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      if (productIndex < 0) {
        newState.push(action.payload);
      } else newState[productIndex].quantity += action?.payload?.quantity;
      toast.success("Product Added to cart");
      return newState;
    default:
      return;
  }
}

export default function Layout({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, initCart);

  const Total = () => {
    let total = 0;
    cart.map((item) => (total += item.price * item.quantity));

    return total;
  };

  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Header
        itemsLength={cart?.length}
        handleOpenCart={() => setOpenCart(true)}
      />
      {React.cloneElement(children, {
        dispatch,
        actions: ACTIONS,
        handleOpenCart: () => setOpenCart(true),
      })}

      <Footer />
      <Cart
        cartItems={cart}
        total={Total()}
        open={openCart}
        handleClose={() => setOpenCart(false)}
        handleOpen={() => setOpenCart(true)}
      />
      <ToastContainer hideProgressBar={true} position="bottom-left" />
    </div>
  );
}
