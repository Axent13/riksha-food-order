import httpService from './http.service';

const productEndpoint = 'product/';

const productService = {
  get: async () => {
    const req = await httpService.get(productEndpoint);
    return req.data;
  },
  createProduct: async (payload) => {
    console.log('In service. payload is:', payload);
    const { data } = await httpService.post(productEndpoint, payload);
    return data;
  },
  removeProduct: async (productId) => {
    const { data } = await httpService.delete(productEndpoint + productId);
    return data;
  },
};

export default productService;
