import { useEffect } from 'react';
import useProductDetailStore from './useProductDetailStore';
import useProductFormStore from './useProductFormStore';

export default function useFetchProduct({ productId } : {
  productId: string;
}) {
  const [{ product, loading, error }, store] = useProductDetailStore();
  const [, ProductFormStore] = useProductFormStore();

  useEffect(() => {
    ProductFormStore.setProduct(product);
    store.fetchProduct({ productId });
  }, [store, productId]);

  return { loading, error };
}
