import httpService from './http.service';

const productEndpoint = 'product/';

const productService = {
  get: async () => {
    const req = await httpService.get(productEndpoint);
    return req.data;
  },
  createProduct: async (payload) => {
    const { data } = await httpService.post(productEndpoint, payload);
    return data;
  },
  removeProduct: async (productId) => {
    console.log('In service. productId is:', productId);
    const { data } = await httpService.delete(productEndpoint + productId);
    return data;
  },
};

export default productService;
