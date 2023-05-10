import { useEffectOnce } from 'usehooks-ts';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductsStore from '../store/ProductsStore';

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return { products };
}
