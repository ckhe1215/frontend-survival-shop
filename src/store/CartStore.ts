import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { Cart, ProductSummary } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class ProductsStore {
  cart: Cart | null = null;

  async fetchCart() {
    this.setCart(null);

    const cart = await apiService.fetchCart();

    this.setCart(cart);
  }

  @Action()
  setCart(cart: Cart | null) {
    this.cart = cart;
  }
}
