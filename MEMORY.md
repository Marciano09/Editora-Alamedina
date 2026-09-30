# MEMORY.md

## Contexto del proyecto

Editora Alamedina es un catálogo digital de libros en PDF. El sitio permite buscar obras, filtrarlas por categoría, ver una ficha de cada libro y contactar por WhatsApp para comprar.

## Decisiones actuales

- Número de WhatsApp: `+502 5652 6718`.
- Las portadas están en `portadas/`.
- Los PDFs de muestra están en `muestras/`.
- El sitio usa HTML, CSS y JavaScript estático.
- El catálogo de libros está definido en `script.js`.
- Los libros sin carátula final usan `portadas/cover-pendiente.svg`.
- Dirección visual actual: archivo editorial con papel, tinta, lomo bibliográfico y fichas de catálogo.

## Funcionalidades existentes

- Catálogo completo.
- Libros destacados.
- Búsqueda por texto.
- Filtros por categoría.
- Ordenamiento por destacados, título, autor, año y precio.
- Modal con ficha editorial y vista previa PDF cuando existe muestra.
- Mensaje de WhatsApp con datos del libro y enlace a portada.

## Funcionalidad de novedades mensuales

- La página muestra libros añadidos durante el mes calendario actual.
- Cada libro nuevo debe usar `fechaAgregado` con formato `YYYY-MM-DD`.
- Si no hay libros añadidos en el mes actual, la sección se oculta automáticamente.
- Los libros de novedades muestran la etiqueta `Nuevo este mes`.
