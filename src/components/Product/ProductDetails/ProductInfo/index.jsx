import { useState } from "react";
import { Skeleton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import "./index.scss";

const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];

export default function ProductInfo({
  isLoading,
  product,
  brand,
  dispatch,
  actions,
  handleOpenCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch({
      type: actions?.ADD_TO_CART,
      payload: {
        ...product,
        quantity,
      },
    });
    setQuantity(1);
    handleOpenCart();
  };

  return (
    <div className="productInfo">
      <header>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={60}
            height={40}
            sx={{ marginBottom: "15px" }}
          />
        ) : (
          <img
            alt={brand?.name}
            src={`${process.env.REACT_APP_Files_URL}/${brand?.logo_url}`}
            className="brandLogo"
            loading="lazy"
          />
        )}
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={400}
            height={20}
          />
        ) : (
          <p className="productName">{product?.name}</p>
        )}
        <p className="productCategory">Men</p>
        <div className="productRating">
          <ul>
            <li>
              <ul>
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>
                    <StarIcon />
                  </li>
                ))}
                <li className="empty">
                  <StarBorderIcon />
                </li>
              </ul>
            </li>
            <li>4.9 of 5</li>
            <li>22 Rates</li>
          </ul>
        </div>
        <div className="productPrices">
          <ul>
            <li>
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={105}
                  height={35}
                />
              ) : (
                `${product?.price} LE`
              )}
            </li>
            <li>
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={60}
                  height={20}
                />
              ) : (
                `${product?.price} LE`
              )}
            </li>
            <li>30% Off</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="productSizes">
          <h5>Size</h5>
          <ul>
            {sizes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="productColors">
          <h5>Color</h5>
          <ul>
            <li key={1}></li>
            <li key={2}></li>
          </ul>
        </div>
      </main>
      <footer>
        <h5>Quantity</h5>
        <ul>
          <li>
            <button onClick={() => quantity !== 1 && setQuantity(quantity - 1)}>
              -
            </button>
          </li>
          <p>{quantity}</p>
          <li>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </li>
        </ul>
        <div className="buttons">
          <button onClick={handleAddToCart}>Add To Cart</button>
          <button>Pickup From Store</button>
        </div>
      </footer>
    </div>
  );
}
