const form = document.getElementById("form-nota");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista-notas");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const contenido = document.getElementById("contenido").value.trim();
  const categoria = document.getElementById("categoria").value;

  if (!titulo || !contenido || !categoria) {
    mostrarMensaje(
      "No se pueden guardar notas vacías. Completa todos los campos.",
      "error",
    );
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <strong>[${categoria}] ${titulo}</strong>: ${contenido}
    </div>
    <button class="boton-eliminar">Eliminar</button>
  `;

  li.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm("¿Seguro que quieres eliminar esta nota?")) {
      li.remove();
      mostrarMensaje("Nota eliminada correctamente.", "exito");
    }
  });

  lista.appendChild(li);
  form.reset();
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});
