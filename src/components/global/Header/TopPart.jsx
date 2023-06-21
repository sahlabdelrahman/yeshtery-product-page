import { Container } from "@mui/material";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function TopPart() {
  return (
    <nav className="topPart">
      <Container maxWidth="md">
        <ul>
          <li className="logo">
            <img alt="Menu" src="./images/menu.svg" />
            <img alt="Logo" src="./images/header-logo.svg" />
          </li>
          <li>
            <ArrowBackIosNewOutlinedIcon />
            <p>
              Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
            </p>
            <ArrowForwardIosOutlinedIcon />
          </li>
          <li>
            <ul>
              <li>
                <LocalPhoneOutlinedIcon />
                Contact Us
              </li>
              <li>
                <ShoppingCartOutlinedIcon />
                Track Order
              </li>
              <li>
                <LocationOnOutlinedIcon />
                Find A Store
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
