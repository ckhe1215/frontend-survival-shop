import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffect } from 'react';

export default function useFetchProduct({ productId } : {
  productId?: string;
}) {
  const store = container.resolve(ProductStore);

  const [{ loading, error }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ productId });
  }, [store]);

  return { loading, error };
}
