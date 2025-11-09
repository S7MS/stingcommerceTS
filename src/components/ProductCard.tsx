'use client';

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="h5 mb-0">
            $ {product.price.toLocaleString('es-CL')}
          </span>
          <Badge bg={product.stock > 0 ? 'success' : 'danger'}>
            {product.stock > 0 ? 'Stock: ' + product.stock : 'Sin stock'}
          </Badge>
        </div>
        <Button 
          variant="primary" 
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className="w-100"
        >
          {product.stock > 0 ? 'Agregar al Carrito' : 'No Disponible'}
        </Button>
      </Card.Body>
    </Card>
  );
}
