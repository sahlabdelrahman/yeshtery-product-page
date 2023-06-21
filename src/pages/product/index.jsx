import { useEffect, useState } from "react";

import ProductDetails from "../../components/Product/ProductDetails";
import SimilarProducts from "../../components/Product/SimilarProducts";

import ProductServices from "../../services/product";

import "./index.scss";

export default function Product({ dispatch, actions, handleOpenCart }) {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [brand, setBrand] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingForSimilarProducts, setIsLoadingForSimilarProducts] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);
    ProductServices.getProduct("729517")
      .then((res) => {
        setProduct(res);
        ProductServices.getProductBrand(res?.brand_id)
          .then((res) => {
            setBrand(res);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log("error => ", error);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("error => ", error);
      });
  }, []);

  useEffect(() => {
    if (product) {
      setIsLoadingForSimilarProducts(true);
      let tags = product?.tags?.map((item) => item?.id).join();
      ProductServices.getSimilarProducts(tags)
        .then((res) => {
          setSimilarProducts(res);
          setIsLoadingForSimilarProducts(false);
        })
        .catch((error) => {
          setIsLoadingForSimilarProducts(false);

          console.log("error => ", error);
        });
    }
  }, [product]);

  return (
    <main className="productPage">
      <ProductDetails
        isLoading={isLoading}
        product={product}
        brand={brand}
        dispatch={dispatch}
        actions={actions}
        handleOpenCart={handleOpenCart}
      />
      <SimilarProducts
        isLoading={isLoadingForSimilarProducts}
        products={similarProducts}
      />
    </main>
  );
}
