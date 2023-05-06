import Products from '../components/product-list/Products';
import useFetchProducts from '../hooks/useFetchProducts';

function ProductListPage() {
  // 1. 서버에서 상품 목록 얻기
  const { products } = useFetchProducts();

  // 2. 보여주기
  return (
    <div>
      <h2>Products</h2>
      <Products products={products} />
    </div>
  );
}

export default ProductListPage;
