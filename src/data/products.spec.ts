import { products } from '@/data/products';

describe('Products Data', () => {
  it('should have at least one product', () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it('all products should have required fields', () => {
    products.forEach(product => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.price).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.image).toBeDefined();
      expect(product.stock).toBeDefined();
      expect(product.category).toBeDefined();
    });
  });

  it('all products should have positive prices', () => {
    products.forEach(product => {
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('all products should have non-negative stock', () => {
    products.forEach(product => {
      expect(product.stock).toBeGreaterThanOrEqual(0);
    });
  });

  it('should have gaming products', () => {
    const categories = products.map(p => p.category);
    expect(categories).toContain('Audio');
    expect(categories).toContain('Computadores');
    expect(categories).toContain('Periféricos');
  });

  it('should format prices correctly', () => {
    const product = products[0];
    const formatted = product.price.toLocaleString('es-CL');
    expect(formatted).toContain('.');
  });
});
