import TopPart from "./TopPart";
import CenterPart from "./CenterPart";
import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

import { headerData } from "../../../data";

import "./index.scss";

export default function Header({ itemsLength, handleOpenCart }) {
  return (
    <header className="header">
      <TopPart />
      <CenterPart itemsLength={itemsLength} handleOpen={handleOpenCart} />
      <Nav data={headerData.navData} />
      <Breadcrumb data={headerData.breadcrumb} />
    </header>
  );
}
