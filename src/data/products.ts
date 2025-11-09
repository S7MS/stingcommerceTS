import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Audífonos Star Wars Gaming',
    price: 89990,
    description: 'Audífonos gaming con diseño Imperial, sonido envolvente 7.1 y micrófono retráctil',
    image: '/images/audifonos_gaming.png',
    stock: 8,
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Laptop ASUS ROG Strix',
    price: 1899990,
    description: 'Laptop gaming ROG Strix 17" con RTX 4070, Intel i9, 32GB RAM y RGB',
    image: '/images/laptop_gamer_asus.jpg',
    stock: 3,
    category: 'Computadores'
  },
  {
    id: '3',
    name: 'Monitor Gaming AOC 27"',
    price: 349990,
    description: 'Monitor curvo 27" Full HD 165Hz 1ms para gaming competitivo',
    image: '/images/monitor_gamer.png',
    stock: 5,
    category: 'Monitores'
  },
  {
    id: '4',
    name: 'Mouse Logitech G305',
    price: 39990,
    description: 'Mouse gaming inalámbrico con sensor HERO 12K DPI',
    image: '/images/mouse_inalambrico.png',
    stock: 15,
    category: 'Periféricos'
  },
  {
    id: '5',
    name: 'Silla Gaming Ergonómica',
    price: 189990,
    description: 'Silla gamer con soporte lumbar, reposabrazos 4D y reclinación 180°',
    image: '/images/silla_escritorio.png',
    stock: 6,
    category: 'Muebles'
  },
  {
    id: '6',
    name: 'Teclado Mecánico RGB Razer',
    price: 129990,
    description: 'Teclado mecánico con switches Purple, iluminación RGB Chroma',
    image: '/images/teclado_razer.png',
    stock: 10,
    category: 'Periféricos'
  }
];
