import { Container, SwipeableDrawer } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import "./index.scss";

export default function Cart({
  open,
  handleClose,
  handleOpen,
  cartItems,
  total,
}) {
  return (
    <div className="cart">
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 475,
          },
        }}
      >
        <Container maxWidth="md">
          <div className="cartCloseIcon">
            <CloseIcon onClick={handleClose} />
          </div>
          <header className="cartHeader">
            <h5>My Cart</h5>
          </header>
          <main className="cartData">
            <h6>Cart Summary</h6>
            {cartItems?.length > 0 &&
              cartItems?.map((item) => (
                <div key={item?.id} className="cartItem">
                  <img
                    alt={item?.name}
                    src={`${process.env.REACT_APP_Files_URL}/${item?.image_url}`}
                  />
                  <div className="itemDetails">
                    <h6>{item?.name}</h6>
                    <p>Quantity: {item?.quantity}</p>
                    <div className="price">
                      <p>{item?.price} LE</p>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
          </main>
          {cartItems?.length > 0 ? (
            <footer className="cartFooter">
              <p className="total">Total: {total} LE</p>
              <div className="buttons">
                <button>Review Cart</button>
                <button>Complete Checkout</button>
              </div>
            </footer>
          ) : (
            <p className="emptyCart">You have no items yet..</p>
          )}
        </Container>
      </SwipeableDrawer>
    </div>
  );
}
