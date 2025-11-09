# Guía de Instalación - StingCommerceTS

## Paso 1: Verificar Requisitos

Abre una terminal y verifica que tengas Node.js instalado:

```bash
node --version
```

Debe mostrar v18.17 o superior. Si no lo tienes, descárgalo desde [nodejs.org](https://nodejs.org)

## Paso 2: Descomprimir el Proyecto

1. Descomprime el archivo `stingcommerce-project.zip`
2. Abre la carpeta en tu terminal:

```bash
cd stingcommerce-project
```

## Paso 3: Instalar Dependencias

```bash
npm install
```

Este paso puede tardar 2-3 minutos. Descargará todas las librerías necesarias.

## Paso 4: Ejecutar el Proyecto

```bash
npm run dev
```

Deberías ver un mensaje similar a:

```
  ▲ Next.js 14.2.33
  - Local:        http://localhost:3000
  
✓ Ready in 2.5s
```

## Paso 5: Abrir en el Navegador

Abre tu navegador y ve a: **http://localhost:3000**

¡Listo! Deberías ver la página de inicio de StingCommerce.

---

## Ejecutar Tests

Para verificar que todo funciona correctamente:

```bash
npm test
```

Para ver el reporte de cobertura:

```bash
npm run test:coverage
```

---

## Problemas Comunes

### Error: "Puerto 3000 ocupado"

Solución: Cambia el puerto en package.json:

```json
"dev": "next dev -p 3001"
```

### Error: "Module not found"

Solución: Reinstala las dependencias:

```bash
rm -rf node_modules
npm install
```

### Tests fallan

Solución: Limpia la caché de Jest:

```bash
npm run test:clear
npm test
```

---

## Siguiente Paso

Lee el archivo `README.md` para conocer la estructura completa del proyecto y cómo personalizarlo.
