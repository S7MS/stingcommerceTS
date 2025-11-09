'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <BSNavbar.Brand as={Link} href="/">
          StingCommerce
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} href="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} href="/carrito">
              <CartIcon />
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
