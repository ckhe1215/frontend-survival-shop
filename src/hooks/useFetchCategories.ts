import { useEffectOnce } from 'usehooks-ts';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CategoriesStore from '../store/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
}
