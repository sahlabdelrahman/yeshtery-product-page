import ApiConfig from "./apiConfig";

async function getProduct(productId) {
  try {
    const { data } = await ApiConfig.get(`/product?product_id=${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getProductBrand(brandId) {
  try {
    const { data } = await ApiConfig.get(`/brand?brand_id=${brandId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getSimilarProducts(ids) {
  try {
    const { data } = await ApiConfig.get(
      `/products?tag_ids=${ids}&start=0&count=16&sort=PRIORITY&order=DESC`
    );
    return data?.products;
  } catch (error) {
    console.log(error);
  }
}

const ProductServices = {
  getProduct,
  getProductBrand,
  getSimilarProducts,
};

export default ProductServices;
