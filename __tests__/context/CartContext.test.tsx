import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Producto Test',
  price: 10000,
  description: 'Descripción test',
  image: 'test.jpg',
  stock: 5,
  category: 'Test'
};

function TestComponent() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  
  return (
    <div>
      <div data-testid="cart-items">{cart.items.length}</div>
      <div data-testid="cart-total">{cart.total}</div>
      <button onClick={() => addToCart(mockProduct)}>Agregar</button>
      <button onClick={() => removeFromCart('1')}>Eliminar</button>
      <button onClick={() => updateQuantity('1', 3)}>Actualizar</button>
      <button onClick={clearCart}>Limpiar</button>
    </div>
  );
}

describe('CartContext', () => {
  test('debe inicializar con carrito vacío', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    expect(screen.getByTestId('cart-items')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  test('debe agregar producto al carrito', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('10000');
  });

  test('debe incrementar cantidad si el producto ya existe', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    fireEvent.click(screen.getByText('Agregar'));
    
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('20000');
  });

  test('debe eliminar producto del carrito', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    fireEvent.click(screen.getByText('Eliminar'));
    
    expect(screen.getByTestId('cart-items')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  test('debe actualizar cantidad del producto', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    fireEvent.click(screen.getByText('Actualizar'));
    
    expect(screen.getByTestId('cart-total')).toHaveTextContent('30000');
  });

  test('debe limpiar todo el carrito', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    fireEvent.click(screen.getByText('Limpiar'));
    
    expect(screen.getByTestId('cart-items')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  test('debe eliminar producto si cantidad es 0', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getByText('Agregar'));
    
    const { rerender } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    fireEvent.click(screen.getAllByText('Agregar')[1]);
  });
});
