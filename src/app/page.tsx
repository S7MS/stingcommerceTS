import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Bienvenido a StingCommerce</h1>
          <p className="lead mb-4">
            Tu tienda online de tecnología. Encuentra los mejores productos
            para gamers y profesionales.
          </p>
          <Link href="/productos">
            <Button variant="primary" size="lg">
              Ver Productos
            </Button>
          </Link>
        </Col>
      </Row>
      
      <Row className="mt-5 text-center">
        <Col md={4}>
          <div className="p-4">
            <h3>🚀 Entrega Rápida</h3>
            <p>Envío express en 24-48 horas</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4">
            <h3>💳 Pago Seguro</h3>
            <p>Múltiples métodos de pago</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4">
            <h3>🛡️ Garantía</h3>
            <p>Garantía en todos los productos</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
