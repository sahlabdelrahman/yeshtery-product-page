import { Container, Grid } from "@mui/material";

import ProductCarousel from "./ProductCarousel";
import ProductInfo from "./ProductInfo";

export default function ProductDetails({
  isLoading,
  product,
  brand,
  dispatch,
  actions,
  handleOpenCart,
}) {
  return (
    <section>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ProductCarousel images={product?.images} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductInfo
              product={product}
              brand={brand}
              isLoading={isLoading}
              dispatch={dispatch}
              actions={actions}
              handleOpenCart={handleOpenCart}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
