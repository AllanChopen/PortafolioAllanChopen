# Portafolio — Allan Chopen

Sitio web de portafolio de una sola página con una presentación profesional, legible y accesible. Muestra habilidades de backend y full‑stack, destaca proyectos clave y resume experiencia técnica relevante.

## Alcance

- Sitio estático de una sola página con secciones: Hero, Sobre mí, Proyectos Destacados, Proyectos Técnicos, Habilidades, Educación & Idiomas y Contacto.
- Enlaces a repositorios públicos de GitHub para los proyectos destacados.
- Botones de demo para proyectos destacados.
- Enfoque en legibilidad, accesibilidad e interactividad sutil acorde al tema.

## Estructura

- Encabezado fijo (sticky) con navegación:
  - Marca y nombre.
  - Menú de escritorio y menú móvil controlado por un botón.
  - Acceso rápido a la sección de Contacto.
- Hero:
  - Título del rol (“Desarrollador Backend & Full‑Stack”).
  - Resumen conciso (apps full‑stack, APIs, bases de datos, sistemas distribuidos; foco en backend/infraestructura/automatización).
  - Acciones principales para ver proyectos y perfil de GitHub.
- Sobre mí:
  - Perfil breve y profesional que aclara experiencia más allá de lo académico.
- Proyectos Destacados:
  - “Lost In The Ocean” (sitio full‑stack con Laravel) y “Web Service Ventas” (API REST con ASP.NET Core).
  - Cada tarjeta incluye rol, descripción, bullets de aportes, etiquetas tecnológicas y notas de alcance (por ejemplo, e‑commerce planificado a futuro).
- Proyectos Técnicos:
  - Resúmenes de trabajos de infraestructura y sistemas (red privada con Tailscale, clúster de alta disponibilidad, automatización con Arduino, traductor seguro en C++) con puntos clave y etiquetas.
- Habilidades:
  - Agrupadas por Lenguajes, Backend & Web, Bases de Datos, Infraestructura & Sistemas y Otros.
- Educación & Idiomas:
  - Detalles de formación y dominio de idiomas.
- Contacto:
  - Email mostrado como texto (sin mailto), enlace a GitHub y número de teléfono.

## Estilos (styles.css)

- Variables de tema:
  - Paleta oscura con acentos rojos; bordes, sombras y sistema de espaciado para consistencia visual.
- Tipografía:
  - Encabezados con “Cinzel” para impronta gótica cuidada.
  - Cuerpo con “Inter” para máxima legibilidad.
- Fondo y textura:
  - Gradientes radiales y lineales con ruido SVG sutil para reforzar la estética.
- Componentes:
  - Tarjetas con sombras suaves y fondos en degradado.
  - Etiquetas y listas con marcadores decorativos para jerarquía.
- Layout:
  - Grillas responsivas para proyectos, habilidades y bloques informativos.
  - Puntos de corte que adaptan navegación, grillas y espacios en pantallas pequeñas.
- Interacciones:
  - Botones con elevación en hover y brillo de acento, alineados con el tema.

## Comportamiento (script.js)

- Año dinámico en el footer.
- Toggle de menú móvil:
  - Controla la visibilidad del menú de navegación en pantallas pequeñas.
- Desplazamiento suave:
  - Enlaces internos con scroll suave y compensación por el encabezado fijo.
- Revelado al hacer scroll:
  - IntersectionObserver agrega la clase “visible” a elementos “reveal” al entrar al viewport para animaciones sutiles.
- Señales de accesibilidad:
  - Resaltado de foco en botones y enlaces mediante sombras, mejorando la navegación con teclado.

## Consideraciones de estética y UX

- Estilo gótico refinado con uso moderado del color y textura, evitando comprometer la legibilidad.
- Contenido organizado por secciones claras para lectura rápida de reclutadores y revisores técnicos.
- Interactividad mínima y funcional, centrada en navegación y descubrimiento del contenido.

## Archivos

- index.html — Marcado semántico de secciones, enlaces y contenido.
- styles.css — Variables de tema, layout responsivo, estilos de componentes y efectos decorativos.
- script.js — Año dinámico, lógica de menú móvil, scroll suave, animaciones de aparición y señales de foco.
