'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <ShoppingCart className="mx-auto mb-4" size={64} color="#6c757d" />
          <h2 className="mb-3">Tu carrito está vacío</h2>
          <p className="text-muted mb-4">
            Agrega productos para comenzar tu compra
          </p>
          <Link href="/productos">
            <Button variant="primary">Ver Productos</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Link href="/productos" className="d-flex align-items-center gap-2 text-decoration-none text-dark mb-4">
        <ArrowLeft size={20} />
        <span>Seguir comprando</span>
      </Link>

      <h1 className="mb-4">Carrito de Compras</h1>

      <Row>
        <Col lg={8}>
          {cart.items.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col md={4}>
                    <h5>{item.name}</h5>
                    <p className="text-muted small">{item.category}</p>
                  </Col>
                  <Col md={2}>
                    <span className="fw-bold">
                      ${item.price.toLocaleString('es-CL')}
                    </span>
                  </Col>
                  <Col md={2}>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="fw-bold">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col md={2} className="text-end">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 className="mb-3">Resumen</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${cart.total.toLocaleString('es-CL')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong className="text-primary">
                  ${cart.total.toLocaleString('es-CL')}
                </strong>
              </div>
              <Button variant="success" className="w-100 mb-2">
                Proceder al Pago
              </Button>
              <small className="text-muted d-block text-center">
                Pago seguro garantizado
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
