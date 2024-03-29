import { Product } from 'types/models/product';
import httpService from './http.service';

const productEndpoint = 'product/';

const productService = {
  get: async () => {
    const req = await httpService.get(productEndpoint);
    return req.data;
  },
  createProduct: async (payload: Product) => {
    const { data } = await httpService.post(productEndpoint, payload);
    return data;
  },
  removeProduct: async (productId: string) => {
    const { data } = await httpService.delete(productEndpoint + productId);
    return data;
  },
};

export default productService;
