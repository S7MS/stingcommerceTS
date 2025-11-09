# StingCommerceTS - Proyecto eCommerce Educativo

Proyecto práctico de eCommerce con Next.js 14, TypeScript, Bootstrap 5 y Jest.

## Requisitos

- Node.js 18.17 o superior
- npm o yarn
- Editor de código (VS Code recomendado)

## Instalación

### 1. Clonar o descargar el proyecto

Si tienes Git instalado:
```bash
git clone <url-del-repositorio>
cd stingcommerce-ts
```

O simplemente descomprime el archivo ZIP en tu directorio de trabajo.

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
stingcommerce-ts/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx             # Página de inicio
│   │   └── productos/
│   │       └── page.tsx         # Catálogo de productos
│   ├── components/
│   │   ├── ProductCard.tsx      # Tarjeta de producto
│   │   ├── CartIcon.tsx         # Icono del carrito
│   │   └── Navbar.tsx           # Barra de navegación
│   ├── context/
│   │   └── CartContext.tsx      # Context API para carrito
│   ├── types/
│   │   └── index.ts             # Interfaces TypeScript
│   └── data/
│       └── products.ts          # Datos de ejemplo
├── __tests__/
│   ├── components/
│   │   └── ProductCard.test.tsx # Tests de ProductCard
│   └── context/
│       └── CartContext.test.tsx # Tests de CartContext
├── jest.config.js               # Configuración Jest
├── jest.setup.js                # Setup de Jest
├── tsconfig.json                # Configuración TypeScript
└── package.json                 # Dependencias y scripts

```

## Testing

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar tests con cobertura

```bash
npm run test:coverage
```

### Ejecutar tests en modo watch

```bash
npm run test:watch
```

## Build de Producción

```bash
npm run build
npm start
```

## Funcionalidades Implementadas

### Módulo 1: Configuración
- Next.js 14 con App Router
- TypeScript configurado
- Bootstrap 5 instalado y funcional
- Diseño responsivo (móvil, tablet, desktop)

### Módulo 2: Componentes React
- ProductCard con props tipadas
- CartIcon con contador
- Context API para gestión de estado
- Custom Hook useCart()

### Módulo 3: Testing
- Jest configurado
- Testing Library instalado
- Tests unitarios de componentes
- Tests de Context API
- Cobertura de código (70%+)

## Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm start` - Inicia servidor de producción
- `npm test` - Ejecuta tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Tests con reporte de cobertura
- `npm run lint` - Ejecuta ESLint
- `npm run type-check` - Verifica tipos TypeScript

## Indicadores de Evaluación Cubiertos

- **IE2.1.1 (10%)**: Framework JavaScript (Next.js)
- **IE2.1.2 (10%)**: Componentes React con props/estado, Bootstrap
- **IE2.2.1 (12%)**: Pruebas unitarias con Jest
- **IE2.2.2 (15%)**: Creación y demostración de tests
- **IE2.3.1 (8%)**: Proceso de testing (setup, mocks, coverage)
- **IE2.3.2 (10%)**: Explicación de implementación

## Próximos Pasos

1. Personalizar diseño y colores
2. Agregar más productos en `src/data/products.ts`
3. Implementar página de checkout
4. Agregar persistencia (LocalStorage o base de datos)
5. Implementar filtros y búsqueda
6. Agregar más tests para nuevas funcionalidades

## Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tests fallan
```bash
npm run test:clear
npm test
```

### Puerto 3000 ocupado
Edita el script en `package.json`:
```json
"dev": "next dev -p 3001"
```

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación Bootstrap](https://getbootstrap.com/docs/5.3/)
- [Documentación Jest](https://jestjs.io/docs/getting-started)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

**Creado por Prof Sting** - Material educativo para Desarrollo Full Stack 2
