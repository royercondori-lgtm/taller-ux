# Auditoría y Rediseño de UX/UI - App de Notas

## 1. Auditoría Heurística de Nielsen

| Heurística                         | Problema de la pantalla original                                                                            | Solución aplicada en el rediseño                                                                                              |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Visibilidad del estado**         | Al agregar o borrar una nota no aparecía ninguna notificación; el usuario no sabía si la acción tuvo éxito. | Se implementó un mensaje dinámico de notificación (`role="status"`) que informa "Nota agregada con éxito" o "Nota eliminada". |
| **Coincidencia con el mundo real** | Los botones e instrucciones usaban términos del sistema como `execute_save()` o `clear_db`.                 | Se usaron términos claros e intuitivos en los botones: "Guardar nota", "Cancelar" y "Eliminar".                               |
| **Control y libertad**             | Al hacer clic en borrar una nota, se eliminaba inmediatamente sin confirmación.                             | Se agregó un modal de confirmación antes de eliminar y la opción de deshacer la acción.                                       |
| **Prevención de errores**          | Permitía guardar notas vacías o sin título, generando registros basura.                                     | El botón de guardado se inhabilita si el campo está vacío y el formulario valida que haya texto antes de enviar.              |
| **Reconocer, no recordar**         | Los campos solo tenían `placeholder`, los cuales desaparecían al escribir.                                  | Se agregaron etiquetas `<label>` visibles y persistentes sobre cada campo de entrada.                                         |

---

## 2. Aplicación de Leyes de Usabilidad

- **Ley de Fitts:** Los botones principales de acción ("Guardar nota") tienen un área de toque ampliada (`min-height: 44px`) para facilitar su clic o interacción táctil sin errores de selección.
- **Ley de Hick:** Se clasificaron las notas por categorías simples (Trabajo, Personal, Estudios) mediante un selector dropdown agrupado, facilitando una elección rápida.
- **Ley de Miller:** Se organizó la interfaz en 2 secciones diferenciadas ("Crear nueva nota" y "Mis notas guardadas") para reducir la carga cognitiva del usuario.

---

## 3. Principios Visuales y Accesibilidad (WCAG 2.2)

- **Variables CSS (`:root`):** Definición centralizada de paleta de colores para garantizar coherencia visual.
- **Contraste mínimo:** Relación de contraste de texto superior a 4.5:1 (texto `#1f2933` sobre fondo `#ffffff`).
- **Navegación por teclado y Foco Visible:** Se reemplazó `outline: none` por `:focus-visible` con un borde indicador naranja de 3px.
- **Etiquetas y Alt:** Cada campo contiene su `label` enlazado con `for`/`id` y la imagen representativa cuenta con su atributo `alt`.

---

## 4. Auditoría de Accesibilidad (Lighthouse)

### Antes del rediseño

- Puntaje de Accesibilidad: **58 / 100**
- Problemas: Falta de `label`, contraste insuficiente, ausencia de foco visible (`outline: none`).

### Después del rediseño

- Puntaje de Accesibilidad: **100 / 100**
- Mejoras: Cumplimiento total de reglas automáticas de accesibilidad y etiquetas WCAG.
