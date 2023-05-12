import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { ProductDetail, nullProductDetail } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class ProductDetailStore {
  product: ProductDetail = nullProductDetail;

  loading = true;

  error = false;

  async fetchProduct({ productId }: {
    productId?: string;
  }) {
    // 1. 로딩 시작 -> loading = true, error = false
    this.startLoading();

    // 2. apiService.fetchProduct({productId});
    // 3. 로딩 끝 -> loading, false, error는 상태 봐서...
    //           -> products
    try {
      const product = await apiService.fetchProduct({ productId });
      this.setProduct(product);
    } catch {
      this.setError();
    }
  }

  @Action()
  private startLoading() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  private setProduct(product: ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  private setError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}
