import { Product } from '@/types';

describe('Product Interface', () => {
  let sampleProduct: Product;

  beforeEach(() => {
    sampleProduct = {
      id: '1',
      name: 'Test Product',
      price: 10000,
      description: 'A test product',
      image: '/images/test.png',
      stock: 5,
      category: 'Test'
    };
  });

  it('should create a valid product', () => {
    expect(sampleProduct).toBeDefined();
    expect(sampleProduct.id).toBe('1');
    expect(sampleProduct.name).toBe('Test Product');
  });

  it('should have a numeric price', () => {
    expect(typeof sampleProduct.price).toBe('number');
    expect(sampleProduct.price).toBeGreaterThan(0);
  });

  it('should have stock information', () => {
    expect(sampleProduct.stock).toBeDefined();
    expect(sampleProduct.stock).toBeGreaterThanOrEqual(0);
  });

  it('should have a category', () => {
    expect(sampleProduct.category).toBeDefined();
    expect(typeof sampleProduct.category).toBe('string');
  });
});
