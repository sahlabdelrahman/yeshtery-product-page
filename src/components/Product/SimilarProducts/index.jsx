import React, { Suspense } from "react";
import { Container, Skeleton } from "@mui/material";

import "./index.scss";

const SimilarProduct = React.lazy(() => import("./SimilarProduct"));

const SimilarProductSkeleton = () => (
  <Skeleton
    className="similarProduct"
    animation="wave"
    variant="rectangular"
    height={400}
  />
);

export default function SimilarProducts({ products, isLoading }) {
  return (
    <section className="similarProducts">
      <Container maxWidth="md">
        <header>
          <h4>Similar Products</h4>
          <p>You may like these products also</p>
        </header>
        {!isLoading && products?.length === 0 ? (
          <p className="notFoundSimilarProducts">
            Sorry, there are no similar products
          </p>
        ) : (
          <main>
            <div className="products">
              {isLoading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <SimilarProductSkeleton key={i} />
                ))}
              {products?.map((item) => (
                <Suspense key={item?.id} fallback={<SimilarProductSkeleton />}>
                  <SimilarProduct product={item} />
                </Suspense>
              ))}
              {products?.map((item) => (
                <Suspense key={item?.id} fallback={<SimilarProductSkeleton />}>
                  <SimilarProduct product={item} />
                </Suspense>
              ))}
            </div>
          </main>
        )}
      </Container>
    </section>
  );
}
