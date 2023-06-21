import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export default function SimilarProduct({ product }) {
  return (
    <div className="similarProduct">
      <header>
        <img
          alt={product?.name}
          src={`${process.env.REACT_APP_Files_URL}/${product?.image_url}`}
        />
      </header>
      <footer>
        <h6 className="productName">{product?.name}</h6>
        <div className="productPrices">
          <ul>
            <li className="price">
              <p>{product?.price} LE</p>
              <ul>
                <li>{product?.price} LE</li>
                <li>50% Off</li>
              </ul>
            </li>
            <li>
              <img
                alt="Brand name"
                src={`${process.env.REACT_APP_Files_URL}/31/adidas-2805b77d93b649829a95d869558736a2.png`}
                className="brandLogo"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
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
          </ul>
        </div>
        <div className="productLocation">
          <ul>
            <li>
              From: <span>UK</span>
            </li>
            <li>
              To: <span>Egypt</span>
            </li>
            <li>
              In: <span>10</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
