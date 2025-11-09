import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Gamer',
    price: 899990,
    description: 'Laptop gaming de alto rendimiento con RTX 3060',
    image: 'https://via.placeholder.com/300x200?text=Laptop',
    stock: 5,
    category: 'Computadores'
  },
  {
    id: '2',
    name: 'Mouse Inalámbrico',
    price: 29990,
    description: 'Mouse ergonómico con conexión Bluetooth',
    image: 'https://via.placeholder.com/300x200?text=Mouse',
    stock: 15,
    category: 'Periféricos'
  },
  {
    id: '3',
    name: 'Teclado Mecánico',
    price: 79990,
    description: 'Teclado mecánico RGB para gaming',
    image: 'https://via.placeholder.com/300x200?text=Teclado',
    stock: 8,
    category: 'Periféricos'
  },
  {
    id: '4',
    name: 'Monitor 27"',
    price: 249990,
    description: 'Monitor Full HD 144Hz para gaming',
    image: 'https://via.placeholder.com/300x200?text=Monitor',
    stock: 3,
    category: 'Monitores'
  },
  {
    id: '5',
    name: 'Audífonos Gamer',
    price: 59990,
    description: 'Audífonos con sonido envolvente 7.1',
    image: 'https://via.placeholder.com/300x200?text=Audifonos',
    stock: 12,
    category: 'Audio'
  },
  {
    id: '6',
    name: 'Silla Gamer',
    price: 179990,
    description: 'Silla ergonómica para largas sesiones',
    image: 'https://via.placeholder.com/300x200?text=Silla',
    stock: 0,
    category: 'Muebles'
  }
];
