const libros = [
  ["Apuntes de Historia Alamedina", "Minoldo Gramajo González", "2026", "Q125.00", "Una obra que rescata la memoria, identidad y legado educativo alamedino.", "1.webp"],
  ["Panela", "Dulce María E. González B.", "2026", "Q110.00", "Una historia cálida sobre raíces, familia, memoria y dulzura de vida.", "2.webp"],
  ["No abras los ojos", "Edgar Reyes", "2026", "Q135.00", "Relato de terror psicológico donde el miedo vive dentro del silencio.", "3.webp"],
  ["Tierra que no olvida", "Edgar Reyes", "2026", "Q120.00", "Novela emotiva sobre memoria, pérdida, raíces y reconciliación.", "4.webp"],
  ["La magia del cuento en la matemática", "Minoldo Gramajo González", "2026", "Q150.00", "Una propuesta educativa que une literatura, lógica y aprendizaje matemático.", "5.webp"],
  ["Sabrositos", "Minoldo Gramajo González", "2026", "Q95.00", "Libro de actividades para despertar el pensamiento lógico en niñas y niños.", "6.webp"],
  ["Avísele a Laura", "Edgar Reyes", "2026", "Q125.00", "Una historia cargada de misterio, ausencia y voces que regresan del pasado.", "7.webp"],
  ["Los dioses escucharon", "Dulce María E. González B.", "2026", "Q115.00", "Obra literaria de sensibilidad humana, esperanza y destino.", "8.webp"],
  ["Cuaderno de Matemática 2º", "Asociación de Egresados Alamedinos", "2026", "Q80.00", "Material educativo para fortalecer el aprendizaje matemático en primaria.", "9.webp"],
  ["Historias de la Alameda", "Editora Alamedina", "2026", "Q100.00", "Recopilación de relatos inspirados en la memoria escolar y comunitaria.", "10.webp"],
  ["La marcha de la educación", "Minoldo Gramajo González", "2026", "Q130.00", "Reflexión sobre educación, comunidad y compromiso histórico.", "11.webp"],
  ["Cuentos bajo la lluvia", "Autor Alamedino", "2026", "Q90.00", "Relatos breves llenos de nostalgia, infancia y paisajes guatemaltecos.", "12.webp"],
  ["El eco de las aulas", "Autor Alamedino", "2026", "Q105.00", "Historias que nacen entre pizarras, recuerdos y voces de maestros.", "13.webp"],
  ["Letras de mi pueblo", "Autor Alamedino", "2026", "Q95.00", "Una obra que celebra la palabra, la cultura y la identidad local.", "14.webp"],
  ["Memorias del camino", "Autor Alamedino", "2026", "Q115.00", "Narraciones sobre viajes, aprendizajes y encuentros inolvidables.", "15.webp"],
  ["El libro de los valores", "Editora Alamedina", "2026", "Q85.00", "Texto educativo orientado a la formación humana y ciudadana.", "16.webp"],
  ["Voces de esperanza", "Autor Alamedino", "2026", "Q100.00", "Historias inspiradoras sobre lucha, fe, resiliencia y futuro.", "17.webp"],
  ["Caminos de aprendizaje", "Editora Alamedina", "2026", "Q95.00", "Material pensado para docentes, estudiantes y comunidades educativas.", "18.webp"],
  ["La casa del recuerdo", "Autor Alamedino", "2026", "Q120.00", "Novela breve sobre familia, memoria y secretos guardados por el tiempo.", "19.webp"],
  ["Semillas de lectura", "Editora Alamedina", "2026", "Q75.00", "Libro inicial para fomentar el amor por la lectura en niños y jóvenes.", "20.webp"]
];

const contenedor = document.querySelector(".grid-libros");
const buscador = document.getElementById("buscarLibro");

function mostrarLibros(lista) {
  contenedor.innerHTML = "";

  lista.forEach(libro => {
    const [titulo, autor, anio, precio, sinopsis, imagen] = libro;
    const mensaje = encodeURIComponent(`Hola, quiero comprar el libro: ${titulo}`);

    contenedor.innerHTML += `
      <article class="libro">
        <img src="${imagen}" alt="Portada del libro ${titulo}">
        <h3>${titulo}</h3>
        <p><strong>Autor:</strong> ${autor}</p>
        <p><strong>Año:</strong> ${anio}</p>
        <p class="precio">${precio}</p>
        <p>${sinopsis}</p>
        <a href="https://wa.me/50259215127?text=${mensaje}" target="_blank">
          Comprar por WhatsApp
        </a>
      </article>
    `;
  });

  if (lista.length === 0) {
    contenedor.innerHTML = `
      <p style="text-align:center; font-size:20px;">
        No se encontraron libros con esa búsqueda.
      </p>
    `;
  }
}

mostrarLibros(libros);

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = libros.filter(libro => {
    return libro.join(" ").toLowerCase().includes(texto);
  });

  mostrarLibros(filtrados);
});
