# AGENTS.md

## Proyecto

Sitio estático de Editora Alamedina para presentar un catálogo digital de libros en formato PDF con compra directa por WhatsApp.

## Reglas de trabajo

- No modificar archivos sin aprobación previa del usuario cuando se solicite explícitamente un plan.
- Mantener el estilo visual de archivo editorial: papel, tinta, lomo bibliográfico y fichas de catálogo, evitando una apariencia de plantilla genérica.
- Mantener el catálogo de libros en `script.js` salvo que el usuario autorice separarlo a JSON u otra fuente de datos.
- Usar rutas relativas para imágenes, PDFs, estilos y scripts.
- Guardar las portadas en `portadas/`.
- Guardar las muestras PDF en `muestras/`.
- No subir carpetas locales como `.vscode/`, `.opencode/` o `_respaldos_imagenes/`.
- Validar que no existan caracteres dañados por codificación antes de entregar cambios.
- Antes de hacer push a GitHub, revisar `git status` y confirmar que solo se incluyan cambios relevantes.

## Novedades del catálogo

- La sección de novedades debe mostrar libros añadidos durante el mes calendario actual.
- Usar la propiedad `fechaAgregado` con formato `YYYY-MM-DD` en cada libro que deba aparecer en novedades.
- Si no hay libros añadidos en el mes actual, la sección debe ocultarse automáticamente.
- Los libros añadidos este mes deben mostrar la etiqueta visual `Nuevo este mes`.
