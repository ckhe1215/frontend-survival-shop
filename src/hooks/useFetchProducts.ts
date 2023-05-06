import { useEffectOnce, useFetch } from 'usehooks-ts';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { ProductSummary } from '../types';
import ProductsStore from '../store/ProductsStore';

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return { products };
}
