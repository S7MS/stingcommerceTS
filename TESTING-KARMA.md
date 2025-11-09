# Testing con Karma + Jasmine

## Configuración

El proyecto incluye Karma y Jasmine para testing unitario.

### Archivos de configuración

- `karma.conf.js` - Configuración principal de Karma
- `src/**/*.spec.ts` - Archivos de tests

## Ejecutar Tests

### Modo interactivo (con watch)
```bash
npm run test:karma
```

### Ejecución única (CI/CD)
```bash
npm run test:karma:single
```

## Estructura de Tests

### Test de Interfaces
`src/types/product.spec.ts`
- Valida estructura de datos Product
- Verifica tipos correctos
- Asegura campos requeridos

### Test de Datos
`src/data/products.spec.ts`
- Valida catálogo de productos
- Verifica precios positivos
- Asegura stock no negativo
- Valida categorías

## Sintaxis de Jasmine

### Describe y It
```typescript
describe('Feature Name', () => {
  it('should do something', () => {
    expect(value).toBe(expected);
  });
});
```

### BeforeEach
```typescript
describe('Test Suite', () => {
  let variable: Type;

  beforeEach(() => {
    variable = initialValue;
  });

  it('uses the variable', () => {
    expect(variable).toBeDefined();
  });
});
```

### Matchers Comunes

- `expect(value).toBe(expected)` - Igualdad estricta
- `expect(value).toEqual(expected)` - Igualdad profunda
- `expect(value).toBeDefined()` - No undefined
- `expect(value).toBeNull()` - Es null
- `expect(value).toBeTruthy()` - Valor truthy
- `expect(value).toBeFalsy()` - Valor falsy
- `expect(number).toBeGreaterThan(n)` - Mayor que
- `expect(number).toBeLessThan(n)` - Menor que
- `expect(array).toContain(item)` - Contiene elemento

## Ejemplo Completo

```typescript
describe('Shopping Cart', () => {
  let cart: CartItem[];

  beforeEach(() => {
    cart = [];
  });

  it('should start empty', () => {
    expect(cart.length).toBe(0);
  });

  it('should add items', () => {
    const product = {
      id: '1',
      name: 'Test',
      price: 1000,
      quantity: 1
    };
    cart.push(product);
    expect(cart.length).toBe(1);
    expect(cart[0].name).toBe('Test');
  });

  it('should calculate total', () => {
    cart.push({ id: '1', price: 1000, quantity: 2 });
    cart.push({ id: '2', price: 500, quantity: 1 });
    
    const total = cart.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    
    expect(total).toBe(2500);
  });
});
```

## Ventajas de Karma + Jasmine

✅ **Jasmine**: Framework BDD elegante y expresivo
✅ **Karma**: Test runner que ejecuta en navegadores reales
✅ **Chrome Headless**: Tests rápidos sin interfaz gráfica
✅ **Watch Mode**: Recarga automática al cambiar código
✅ **Coverage**: Métricas de cobertura de código

## Tips

1. Nombra los tests descriptivamente
2. Un concepto por test
3. Usa beforeEach para setup común
4. Tests independientes entre sí
5. Mockea dependencias externas
