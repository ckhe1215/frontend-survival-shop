import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { useEffect } from 'react';
import ProductsStore from '../store/ProductsStore';

export default function useFetchProducts({ categoryId } : {
  categoryId?: string;
}) {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return { products };
}
