'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function ProductosPage() {
  const { addToCart } = useCart();

  return (
    <Container className="py-4">
      <h1 className="mb-4">Catálogo de Productos</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
