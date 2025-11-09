import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Laptop Test',
  price: 899990,
  description: 'Laptop de prueba para testing',
  image: 'https://via.placeholder.com/300x200',
  stock: 5,
  category: 'Computadores'
};

const mockOnAddToCart = jest.fn();

describe('ProductCard', () => {
  beforeEach(() => {
    mockOnAddToCart.mockClear();
  });

  test('debe renderizar la información del producto', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText('Laptop Test')).toBeInTheDocument();
    expect(screen.getByText('Laptop de prueba para testing')).toBeInTheDocument();
    expect(screen.getByText(/899\.990/)).toBeInTheDocument();
  });

  test('debe mostrar el stock disponible', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText(/Stock: 5/)).toBeInTheDocument();
  });

  test('debe llamar onAddToCart al hacer clic en el botón', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByRole('button', { name: /Agregar al Carrito/i });
    fireEvent.click(button);
    
    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  test('debe deshabilitar el botón cuando no hay stock', () => {
    const productWithoutStock = { ...mockProduct, stock: 0 };
    render(<ProductCard product={productWithoutStock} onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByText('Sin stock')).toBeInTheDocument();
  });

  test('debe mostrar "No Disponible" cuando no hay stock', () => {
    const productWithoutStock = { ...mockProduct, stock: 0 };
    render(<ProductCard product={productWithoutStock} onAddToCart={mockOnAddToCart} />);
    
    expect(screen.getByText('No Disponible')).toBeInTheDocument();
  });
});
