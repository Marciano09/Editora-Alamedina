const WHATSAPP_NUMERO = "50256526718";
const IMAGEN_PENDIENTE = "portadas/cover-pendiente.svg";

const libros = [
  {
    titulo: "Apuntes de Historia Alamedina",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q12.00",
    sinopsis: "Una obra que rescata la memoria, identidad y legado educativo alamedino.",
    imagen: "portadas/1.webp",
    muestraPdf: "muestras/Historia-Alamedina.pdf",
    categoria: "Historia",
    destacado: true,
    etiqueta: "Destacado"
  },
  {
    titulo: "Panela",
    autor: "Dulce María González",
    anio: "2026",
    precio: "Q10.00",
    sinopsis: "Una historia cálida sobre raíces, familia, memoria y dulzura de vida.",
    imagen: "portadas/2.webp",
    muestraPdf: "muestras/libro-02-muestra.pdf",
    categoria: "Literatura",
    fechaAgregado: "2026-09-30",
    destacado: true,
    etiqueta: "Nuevo"
  },
  {
    titulo: "Adioses Repentinos",
    autor: "Orlando Callejas",
    anio: "2026",
    precio: "Q12.00",
    sinopsis: "Versos de despedida y reflexiones sobre la vida.",
    imagen: "portadas/3.webp",
    muestraPdf: "muestras/libro-03-muestra.pdf",
    categoria: "Poesía",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Tierra que no olvida",
    autor: "Roderico Reyes",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Novela desarrollada en el contexto de la Colonia en Guatemala, sobre memoria, pérdida, raíces y esperanza.",
    imagen: "portadas/4.webp",
    muestraPdf: "muestras/libro-04-muestra.pdf",
    categoria: "Literatura",
    destacado: true,
    etiqueta: "Recomendado"
  },
  {
    titulo: "La magia del cuento en la matemática",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Una propuesta educativa que une literatura, lógica y aprendizaje matemático.",
    imagen: "portadas/5.webp",
    muestraPdf: "muestras/libro-05-muestra.pdf",
    categoria: "Educación",
    destacado: true,
    etiqueta: "Educativo"
  },
  {
    titulo: "Sabrositos",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Libro de actividades para despertar el pensamiento lógico en niñas y niños.",
    imagen: "portadas/6.webp",
    muestraPdf: "muestras/libro-06-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Avísele a Laura",
    autor: "K. Itzamara",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Una historia cargada de misterio, ausencia y voces que regresan del pasado.",
    imagen: "portadas/7.webp",
    muestraPdf: "muestras/libro-07-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Espigas Líricas",
    autor: "Axel Rigoberto Mendoza Irungaray",
    anio: "2026",
    precio: "Q15.00",
    sinopsis: "Obra literaria de poesía lírica, recuerdos y emociones.",
    imagen: "portadas/8.webp",
    muestraPdf: "muestras/libro-08-muestra.pdf",
    categoria: "Poesía",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Almas Perdidas",
    autor: "Roderico Reyes",
    anio: "2026",
    precio: "Q15.00",
    sinopsis: "Novela basada en una historia de amor que explora el corazón, la familia y el destino.",
    imagen: "portadas/9.webp",
    muestraPdf: "muestras/libro-09-muestra.pdf",
    categoria: "Novela",
    destacado: false,
    etiqueta: "Recomendado"
  },
  {
    titulo: "Espíritu Nativo, Corazón Docente",
    autor: "Isidoro Álvarez",
    anio: "2026",
    precio: "Q15.00",
    sinopsis: "Biografía del profesor Isidoro Álvarez, su trayectoria y contribuciones educativas.",
    imagen: "portadas/10.webp",
    muestraPdf: "muestras/libro-10-muestra.pdf",
    categoria: "Biografía",
    fechaAgregado: "2026-09-30",
    destacado: true,
    etiqueta: "Nuevo"
  },
  {
    titulo: "Evita y Nicanor en Numerolandia",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Historia que combina matemáticas y narrativa en un mundo mágico.",
    imagen: "portadas/11.webp",
    muestraPdf: "muestras/libro-11-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Hombre de Cartón",
    autor: "Gustavo Adolfo Montenegro",
    anio: "2026",
    precio: "Q12.00",
    sinopsis: "Microrelatos de situaciones y eventos vividos en contextos cotidianos guatemaltecos.",
    imagen: "portadas/12.webp",
    muestraPdf: "muestras/libro-12-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Vivir con el dolor de tu partida",
    autor: "Cristabel de Jesús Ramírez Hernández",
    anio: "2026",
    precio: "Q18.00",
    sinopsis: "Historia sobre el duelo, la separación y la aceptación de la pérdida de un hijo.",
    imagen: "portadas/13.webp",
    muestraPdf: "muestras/libro-13-muestra.pdf",
    categoria: "Historia real",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "El piso siempre me recibió",
    autor: "Edgar Roderico Reyes Sánchez",
    anio: "2026",
    precio: "Q15.00",
    sinopsis: "Perdió su familia, su dignidad y su vida; solo al tocar fondo encontró el camino de regreso.",
    imagen: "portadas/14.webp",
    muestraPdf: "muestras/libro-14-muestra.pdf",
    categoria: "Historia real",
    destacado: true,
    etiqueta: "Impactante"
  },
  {
    titulo: "Latidos de Libertad",
    autor: "Lisseth García",
    anio: "2026",
    precio: "Q15.00",
    sinopsis: "Poemas para el alma, libertad y paz interior.",
    imagen: "portadas/15.webp",
    muestraPdf: "muestras/libro-15-muestra.pdf",
    categoria: "Poesía",
    destacado: false,
    etiqueta: "Próximamente"
  },
  {
    titulo: "Cultura Vedada es... ¡Genocidio!",
    autor: "Julio Enrique Reiche Pop",
    anio: "2020",
    precio: "Q18.00",
    sinopsis: "Texto educativo orientado a la formación humana y ciudadana.",
    imagen: "portadas/16.webp",
    muestraPdf: "muestras/libro-16-muestra.pdf",
    categoria: "Biografía",
    destacado: false,
    etiqueta: "Actualizado"
  },
  {
    titulo: "Conozcamonos para conocernos",
    autor: "Julio Enrique Reiche Pop",
    anio: "2024",
    precio: "Q15.00",
    sinopsis: "Historias inspiradoras sobre lucha, fe, resiliencia y futuro.",
    imagen: "portadas/17.webp",
    muestraPdf: "muestras/libro-17-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Caminos de aprendizaje",
    autor: "Editora Alamedina",
    anio: "2026",
    precio: "Q95.00",
    sinopsis: "Reseña pendiente. Este espacio quedará listo para completar cuando esté disponible el texto final.",
    imagen: IMAGEN_PENDIENTE, // Cambiar a "portadas/18.webp" cuando subas la carátula final.
    muestraPdf: "muestras/libro-18-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: "Pendiente"
  },
  {
    titulo: "La casa del recuerdo",
    autor: "Autor Alamedino",
    anio: "2026",
    precio: "Q120.00",
    sinopsis: "Reseña pendiente. Este espacio quedará listo para completar cuando esté disponible el texto final.",
    imagen: IMAGEN_PENDIENTE, // Cambiar a "portadas/19.webp" cuando subas la carátula final.
    muestraPdf: "muestras/libro-19-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: "Pendiente"
  },
  {
    titulo: "Semillas de lectura",
    autor: "Editora Alamedina",
    anio: "2026",
    precio: "Q75.00",
    sinopsis: "Reseña pendiente. Este espacio quedará listo para completar cuando esté disponible el texto final.",
    imagen: IMAGEN_PENDIENTE, // Cambiar a "portadas/20.webp" cuando subas la carátula final.
    muestraPdf: "muestras/libro-20-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: "Pendiente"
  }
];

const contenedor = document.querySelector(".grid-libros");
const contenedorDestacados = document.getElementById("gridDestacados");
const contenedorNuevosMes = document.getElementById("gridNuevosMes");
const seccionNuevosMes = document.getElementById("nuevos-mes");
const buscador = document.getElementById("buscarLibro");
const contador = document.getElementById("contadorLibros");
const filtrosCatalogo = document.getElementById("filtrosCatalogo");
const ordenCatalogo = document.getElementById("ordenCatalogo");
const menuToggle = document.getElementById("menuToggle");
const menuLista = document.getElementById("menuLista");
const totalLibrosHero = document.getElementById("totalLibrosHero");

let categoriaActual = "Todos";

function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function precioNumero(precio) {
  return Number(String(precio).replace(/[^0-9.]/g, "")) || 0;
}

function urlAbsoluta(ruta) {
  try {
    return new URL(ruta, window.location.href).href;
  } catch (error) {
    return ruta;
  }
}

function mensajeWhatsApp(libro) {
  const portada = libro.imagen === IMAGEN_PENDIENTE
    ? "Portada pendiente de carga"
    : urlAbsoluta(libro.imagen);

  return encodeURIComponent(`Hola, Editora Alamedina.

Estoy interesado/a en este libro digital en PDF:

Título: ${libro.titulo}
Autor: ${libro.autor}
Categoría: ${libro.categoria}
Año: ${libro.anio}
Precio: ${libro.precio}
Portada: ${portada}

¿Me pueden indicar cómo realizar la compra?`);
}

function fechaLocal(fecha) {
  if (!fecha) return null;

  const partes = String(fecha).split("-").map(Number);
  if (partes.length !== 3 || partes.some(Number.isNaN)) return null;

  const [anio, mes, dia] = partes;
  return new Date(anio, mes - 1, dia);
}

function esLibroDeEsteMes(libro, fechaReferencia = new Date()) {
  const fecha = fechaLocal(libro.fechaAgregado);
  if (!fecha) return false;

  return fecha.getFullYear() === fechaReferencia.getFullYear()
    && fecha.getMonth() === fechaReferencia.getMonth();
}

function crearFiltros() {
  const categorias = ["Todos", ...new Set(libros.map(libro => libro.categoria))].sort((a, b) => {
    if (a === "Todos") return -1;
    if (b === "Todos") return 1;
    return a.localeCompare(b, "es");
  });

  filtrosCatalogo.innerHTML = categorias.map(categoria => `
    <button class="filtro ${categoria === categoriaActual ? "activo" : ""}" data-categoria="${categoria}">
      ${categoria}
    </button>
  `).join("");

  filtrosCatalogo.querySelectorAll(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
      categoriaActual = boton.dataset.categoria;
      filtrosCatalogo.querySelectorAll(".filtro").forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      aplicarFiltros();
    });
  });
}

function crearTarjetaLibro(libro, index) {
  const mensaje = mensajeWhatsApp(libro);
  const pendiente = libro.etiqueta === "Pendiente";
  const nuevoEsteMes = esLibroDeEsteMes(libro);
  const etiquetaTarjeta = nuevoEsteMes ? "Nuevo este mes" : libro.etiqueta;

  return `
    <article class="libro" onclick="abrirModalLibro(libros[${index}])" tabindex="0" role="button" aria-label="Ver ficha del libro ${libro.titulo}">
      ${etiquetaTarjeta ? `<span class="badge ${nuevoEsteMes ? "badge-mes" : ""}">${etiquetaTarjeta}</span>` : ""}
      <div class="portada-marco">
        <img src="${libro.imagen}" alt="Portada del libro ${libro.titulo}" onerror="this.onerror=null; this.src='${IMAGEN_PENDIENTE}'; this.closest('.portada-marco').classList.add('portada-pendiente');">
        ${pendiente ? `<span class="estado-pendiente">Carátula pendiente</span>` : ""}
      </div>
      <div class="libro-contenido">
        <span class="categoria">${libro.categoria}</span>
        <span class="formato">PDF digital</span>
        <h3>${libro.titulo}</h3>
        <p class="meta-libro"><strong>Autor:</strong> ${libro.autor}<br><strong>Año:</strong> ${libro.anio}</p>
        <p class="precio">${libro.precio}</p>
        <p class="sinopsis-libro">${libro.sinopsis}</p>
        <a href="https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}" target="_blank" onclick="event.stopPropagation()">
          Comprar por WhatsApp
        </a>
      </div>
    </article>
  `;
}

function ordenarLibros(lista) {
  const orden = ordenCatalogo?.value || "destacados";
  const copia = [...lista];

  const ordenes = {
    destacados: (a, b) => Number(b.destacado) - Number(a.destacado) || a.titulo.localeCompare(b.titulo, "es"),
    titulo: (a, b) => a.titulo.localeCompare(b.titulo, "es"),
    autor: (a, b) => a.autor.localeCompare(b.autor, "es"),
    anio: (a, b) => Number(b.anio) - Number(a.anio) || a.titulo.localeCompare(b.titulo, "es"),
    precio: (a, b) => precioNumero(a.precio) - precioNumero(b.precio)
  };

  return copia.sort(ordenes[orden] || ordenes.destacados);
}

function mostrarLibros(lista) {
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contador.textContent = "No se encontraron libros con esa búsqueda.";
    contenedor.innerHTML = `<p class="sin-resultados">Intenta buscar por otro título, autor, categoría o año.</p>`;
    return;
  }

  contador.textContent = `${lista.length} libro(s) disponible(s) en el catálogo digital.`;
  contenedor.innerHTML = lista.map(libro => crearTarjetaLibro(libro, libros.indexOf(libro))).join("");
}

function mostrarDestacados() {
  const destacados = libros.filter(libro => libro.destacado).slice(0, 4);
  contenedorDestacados.innerHTML = destacados.map(libro => crearTarjetaLibro(libro, libros.indexOf(libro))).join("");
}

function mostrarNuevosMes() {
  if (!seccionNuevosMes || !contenedorNuevosMes) return;

  const nuevosMes = libros
    .filter(libro => esLibroDeEsteMes(libro))
    .sort((a, b) => fechaLocal(b.fechaAgregado) - fechaLocal(a.fechaAgregado));

  if (nuevosMes.length === 0) {
    seccionNuevosMes.hidden = true;
    contenedorNuevosMes.innerHTML = "";
    return;
  }

  seccionNuevosMes.hidden = false;
  contenedorNuevosMes.innerHTML = nuevosMes.map(libro => crearTarjetaLibro(libro, libros.indexOf(libro))).join("");
}

function aplicarFiltros() {
  const texto = normalizar(buscador.value);

  const filtrados = libros.filter(libro => {
    const contenido = normalizar(`
      ${libro.titulo}
      ${libro.autor}
      ${libro.anio}
      ${libro.precio}
      ${libro.sinopsis}
      ${libro.categoria}
      ${libro.etiqueta}
      PDF digital
    `);

    const coincideTexto = contenido.includes(texto);
    const coincideCategoria = categoriaActual === "Todos" || libro.categoria === categoriaActual;

    return coincideTexto && coincideCategoria;
  });

  mostrarLibros(ordenarLibros(filtrados));
}

crearFiltros();
mostrarDestacados();
mostrarNuevosMes();
mostrarLibros(ordenarLibros(libros));
if (totalLibrosHero) totalLibrosHero.textContent = libros.length;

buscador.addEventListener("input", aplicarFiltros);
ordenCatalogo.addEventListener("change", aplicarFiltros);

menuToggle.addEventListener("click", () => {
  const abierto = menuLista.classList.toggle("activo");
  menuToggle.setAttribute("aria-expanded", String(abierto));
});

document.querySelectorAll(".menu a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menuLista.classList.remove("activo");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// VENTANA EMERGENTE CON LECTOR PDF
const modalLibro = document.getElementById("modalLibro");
const modalOverlay = document.getElementById("modalOverlay");
const modalCerrar = document.getElementById("modalCerrar");
const modalEtiqueta = document.getElementById("modalEtiqueta");
const modalTitulo = document.getElementById("modalTitulo");
const modalAutor = document.getElementById("modalAutor");
const modalCategoria = document.getElementById("modalCategoria");
const modalAnio = document.getElementById("modalAnio");
const modalPrecio = document.getElementById("modalPrecio");
const modalSinopsis = document.getElementById("modalSinopsis");
const modalPdf = document.getElementById("modalPdf");
const modalAvisoPendiente = document.getElementById("modalAvisoPendiente");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalAbrirPdf = document.getElementById("modalAbrirPdf");

async function existeArchivo(ruta) {
  try {
    const respuesta = await fetch(ruta, { method: "HEAD" });
    return respuesta.ok;
  } catch (error) {
    return false;
  }
}

async function abrirModalLibro(libro) {
  const mensaje = mensajeWhatsApp(libro);
  const pdfMuestra = libro.muestraPdf;

  modalEtiqueta.textContent = libro.etiqueta || "Ficha editorial";
  modalTitulo.textContent = libro.titulo;
  modalAutor.textContent = `Autor: ${libro.autor}`;
  modalCategoria.textContent = libro.categoria;
  modalAnio.textContent = `Año ${libro.anio}`;
  modalPrecio.textContent = libro.precio;
  modalSinopsis.textContent = libro.sinopsis;
  modalWhatsapp.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;

  modalPdf.src = "";
  modalPdf.style.display = "none";
  modalAvisoPendiente.classList.add("activo");
  modalAbrirPdf.href = "#";
  modalAbrirPdf.classList.add("deshabilitado");
  modalAbrirPdf.setAttribute("aria-disabled", "true");

  modalLibro.classList.add("activo");
  modalLibro.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-abierto");
  modalCerrar.focus();

  if (pdfMuestra && await existeArchivo(pdfMuestra)) {
    modalPdf.src = `${pdfMuestra}#toolbar=0&navpanes=0&scrollbar=1`;
    modalPdf.style.display = "block";
    modalAvisoPendiente.classList.remove("activo");
    modalAbrirPdf.href = pdfMuestra;
    modalAbrirPdf.classList.remove("deshabilitado");
    modalAbrirPdf.removeAttribute("aria-disabled");
  }
}

function cerrarModalLibro() {
  modalLibro.classList.remove("activo");
  modalLibro.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-abierto");
  modalPdf.src = "";
}

modalCerrar.addEventListener("click", cerrarModalLibro);
modalOverlay.addEventListener("click", cerrarModalLibro);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && modalLibro.classList.contains("activo")) {
    cerrarModalLibro();
  }

  const tarjeta = evento.target.closest(".libro");
  if (tarjeta && (evento.key === "Enter" || evento.key === " ")) {
    evento.preventDefault();
    tarjeta.click();
  }
});

