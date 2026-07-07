const libros = [
  {
    titulo: "Apuntes de Historia Alamedina",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q12.00",
    sinopsis: "Una obra que rescata la memoria, identidad y legado educativo alamedino.",
    imagen: "1.webp",
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
    imagen: "2.webp",
    muestraPdf: "muestras/libro-02-muestra.pdf",
    categoria: "Literatura",
    destacado: true,
    etiqueta: "Nuevo"
  },
  {
    titulo: "Adioses Repentinos",
    autor: "Orlando Callejas",
    anio: "2026",
    precio: "Q12.00",
    sinopsis: "Versos de despedida y reflexiones sobre la vida.",
    imagen: "3.webp",
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
    imagen: "4.webp",
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
    imagen: "5.webp",
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
    imagen: "6.webp",
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
    imagen: "7.webp",
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
    imagen: "8.webp",
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
    imagen: "9.webp",
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
    imagen: "10.webp",
    muestraPdf: "muestras/libro-10-muestra.pdf",
    categoria: "Biografía",
    destacado: true,
    etiqueta: "Nuevo"
  },
  {
    titulo: "Evita y Nicanor en Numerolandia",
    autor: "Minoldo Gramajo González",
    anio: "2026",
    precio: "Q20.00",
    sinopsis: "Historia que combina matemáticas y narrativa en un mundo mágico.",
    imagen: "11.webp",
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
    imagen: "12.webp",
    muestraPdf: "muestras/libro-12-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Vivir con el dolor de tu partida",
    autor: "Cristable de Jesús Ramírez Hernández",
    anio: "2026",
    precio: "Q18.00",
    sinopsis: "Historia sobre el duelo, la separación y la aceptación de la pérdida de un hijo.",
    imagen: "13.webp",
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
    imagen: "14.webp",
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
    imagen: "15.webp",
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
    imagen: "16.webp",
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
    imagen: "17.webp",
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
    sinopsis: "Material pensado para docentes, estudiantes y comunidades educativas.",
    imagen: "18.webp",
    muestraPdf: "muestras/libro-18-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "La casa del recuerdo",
    autor: "Autor Alamedino",
    anio: "2026",
    precio: "Q120.00",
    sinopsis: "Novela breve sobre familia, memoria y secretos guardados por el tiempo.",
    imagen: "19.webp",
    muestraPdf: "muestras/libro-19-muestra.pdf",
    categoria: "Literatura",
    destacado: false,
    etiqueta: ""
  },
  {
    titulo: "Semillas de lectura",
    autor: "Editora Alamedina",
    anio: "2026",
    precio: "Q75.00",
    sinopsis: "Libro inicial para fomentar el amor por la lectura en niños y jóvenes.",
    imagen: "20.webp",
    muestraPdf: "muestras/libro-20-muestra.pdf",
    categoria: "Educación",
    destacado: false,
    etiqueta: ""
  }
];

const contenedor = document.querySelector(".grid-libros");
const contenedorDestacados = document.getElementById("gridDestacados");
const buscador = document.getElementById("buscarLibro");
const contador = document.getElementById("contadorLibros");
const botonesFiltro = document.querySelectorAll(".filtro");
const menuToggle = document.getElementById("menuToggle");
const menuLista = document.getElementById("menuLista");

let categoriaActual = "Todos";

function crearTarjetaLibro(libro, index) {
  const mensaje = encodeURIComponent(`Hola, quiero comprar el libro digital en PDF: ${libro.titulo}`);

  return `
    <article class="libro" onclick="abrirModalLibro(libros[${index}])" tabindex="0" role="button" aria-label="Ver muestra del libro ${libro.titulo}">
      ${libro.etiqueta ? `<span class="badge">${libro.etiqueta}</span>` : ""}
      <img src="${libro.imagen}" alt="Portada del libro ${libro.titulo}">
      <span class="categoria">${libro.categoria}</span>
      <span class="formato">Formato digital PDF</span>
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Año:</strong> ${libro.anio}</p>
      <p class="precio">${libro.precio}</p>
      <p>${libro.sinopsis}</p>
      <a href="https://wa.me/50259215127?text=${mensaje}" target="_blank" onclick="event.stopPropagation()">
        Comprar por WhatsApp
      </a>
    </article>
  `;
}

function mostrarLibros(lista) {
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contador.textContent = "No se encontraron libros con esa búsqueda.";
    contenedor.innerHTML = `
      <p style="text-align:center; font-size:20px;">
        Intenta buscar por otro título, autor, categoría o año.
      </p>
    `;
    return;
  }

  contador.textContent = `${lista.length} libro(s) disponible(s) en formato digital PDF.`;

  lista.forEach(libro => {
    contenedor.innerHTML += crearTarjetaLibro(libro, libros.indexOf(libro));
  });
}

function mostrarDestacados() {
  const destacados = libros.filter(libro => libro.destacado).slice(0, 4);
  contenedorDestacados.innerHTML = "";

  destacados.forEach(libro => {
    contenedorDestacados.innerHTML += crearTarjetaLibro(libro, libros.indexOf(libro));
  });
}

function aplicarFiltros() {
  const texto = buscador.value.toLowerCase().trim();

  const filtrados = libros.filter(libro => {
    const coincideTexto = `
      ${libro.titulo}
      ${libro.autor}
      ${libro.anio}
      ${libro.precio}
      ${libro.sinopsis}
      ${libro.categoria}
      PDF
      digital
    `.toLowerCase().includes(texto);

    const coincideCategoria = categoriaActual === "Todos" || libro.categoria === categoriaActual;

    return coincideTexto && coincideCategoria;
  });

  mostrarLibros(filtrados);
}

mostrarDestacados();
mostrarLibros(libros);

buscador.addEventListener("input", aplicarFiltros);

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");
    categoriaActual = boton.dataset.categoria;
    aplicarFiltros();
  });
});

menuToggle.addEventListener("click", () => {
  menuLista.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach(enlace => {
  enlace.addEventListener("click", () => {
    menuLista.classList.remove("activo");
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
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalAbrirPdf = document.getElementById("modalAbrirPdf");

function abrirModalLibro(libro) {
  const mensaje = encodeURIComponent(`Hola, quiero comprar el libro digital en PDF: ${libro.titulo}`);
  const pdfMuestra = libro.muestraPdf || "muestras/ejemplo-5-paginas.pdf";

  modalEtiqueta.textContent = libro.etiqueta || "Muestra digital";
  modalTitulo.textContent = libro.titulo;
  modalAutor.textContent = `Autor: ${libro.autor}`;
  modalCategoria.textContent = libro.categoria;
  modalAnio.textContent = `Año ${libro.anio}`;
  modalPrecio.textContent = libro.precio;
  modalSinopsis.textContent = libro.sinopsis;

  // Recomendación: cada archivo de muestra debe tener solamente 5 páginas.
  // Ejemplo de ruta: muestras/libro-02-muestra.pdf
  modalPdf.src = `${pdfMuestra}#toolbar=0&navpanes=0&scrollbar=1`;
  modalWhatsapp.href = `https://wa.me/50259215127?text=${mensaje}`;
  modalAbrirPdf.href = pdfMuestra;

  modalLibro.classList.add("activo");
  modalLibro.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-abierto");
}

function cerrarModalLibro() {
  modalLibro.classList.remove("activo");
  modalLibro.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-abierto");

  // Limpia el lector para evitar que el PDF siga cargado en segundo plano.
  modalPdf.src = "";
}

modalCerrar.addEventListener("click", cerrarModalLibro);
modalOverlay.addEventListener("click", cerrarModalLibro);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    cerrarModalLibro();
  }
});

document.addEventListener("keydown", (evento) => {
  const tarjeta = evento.target.closest(".libro");

  if (tarjeta && (evento.key === "Enter" || evento.key === " ")) {
    evento.preventDefault();
    tarjeta.click();
  }
});
