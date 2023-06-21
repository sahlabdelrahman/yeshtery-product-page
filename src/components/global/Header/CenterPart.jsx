import { Badge, Container } from "@mui/material";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function CenterPart({ itemsLength, handleOpen }) {
  return (
    <nav className="centerPart">
      <Container maxWidth="md">
        <ul>
          <li>
            <div className="inputContainer">
              <SearchOutlinedIcon />
              <input type="text" placeholder="Search" />
            </div>
          </li>
          <li>
            <img alt="Logo" src="./images/brand-logo.svg" />
          </li>
          <li>
            <ul>
              <li onClick={handleOpen} style={{ cursor: "pointer" }}>
                <Badge
                  badgeContent={!itemsLength ? "0" : itemsLength}
                  color="primary"
                >
                  <ShoppingBasketOutlinedIcon />
                </Badge>
                <span>Cart</span>
              </li>
              <li>
                <FavoriteBorderOutlinedIcon />
                <span>Wishlist</span>
              </li>
              <li>
                <PersonOutlineOutlinedIcon />
                <span>Login</span>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
