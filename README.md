![Bautic Studios Logo](https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/ca4ab0226866091.6835ef0b40165.png)
-----

```markdown
# Discord Embed Creator - Bautic Studios

Este proyecto Flask crea y envía Discord Embeds vía webhook. Su interfaz es moderna y visualmente atractiva, inspirada en "OnlyPipe" y "Paysend link", con un fondo degradado vibrante, glassmorphism sutil y sin sombras.

## 🌟 Características Principales

* **Interfaz Moderna:** Diseño con fondo degradado (azul a negro, o morado oscuro a vibrante, similar a OnlyPipe), glassmorphism y estilo sin sombras.
* **Creación de Embeds Completa:** Configura autor, cuerpo, color, imágenes, pie de página y timestamp.
* **Campos Dinámicos:** Agrega y elimina campos (`fields`) directamente desde la interfaz.
* **Validación de URL:** Asegura la validez de las URLs.
* **Mensajes de Estado:** Feedback claro sobre el envío.
* **Iconos Bootstrap:** Mejora la usabilidad y estética.
* **Favicon Personalizado:** El logo de Bautic Studios como icono de pestaña.

## 📂 Estructura del Proyecto

```

Bautic - Embed
- app.py
- templates
- - index.html
- static
- - css/
- - - style.css
- - js/
- - - script.js
- - images/
- - - logo.png

````

## 🚀 Instalación y Ejecución

### Requisitos

Necesitas [Python](https://www.python.org/downloads/) (3.6+ recomendado) y `pip`.

### Configuración

1.  Crea la estructura de carpetas indicada.
2.  Coloca los archivos en sus ubicaciones (`app.py`, `index.html`, `style.css`, `script.js`, `logo.png`).

### Dependencias

Instala las librerías desde la raíz del proyecto:
bash
```
pip install Flask requests
```
````

### Ejecutar Aplicación

Desde la raíz del proyecto, inicia Flask:
bash
```
python app.py
```

### Acceder al Dashboard

Abre tu navegador y visita:

```
[http://127.0.0.1:5000/](http://127.0.0.1:5000/)
```

Si el diseño no es el esperado, verifica `static/css/style.css` con el código provisto.

## 📋 Uso

1.  **Obtén tu Webhook:** Configura un Webhook en Discord y copia su URL.
2.  **Ingresa URL:** Pega la URL en el campo "Discord Webhook URL".
3.  **Rellena el Embed:** Completa los detalles (título, descripción, autor, color, etc.).
4.  **Añade Campos:** Usa "Add Field" para agregar campos personalizados.
5.  **Envía:** Haz clic en "Send Embed" (barra superior) para enviar el mensaje.
6.  **Verifica Estado:** Revisa los mensajes de éxito o error en la interfaz.

## ⬇️ Descarga

Clona el repositorio para obtener una copia local:

```bash
git clone [https://github.com/tu-usuario/nombre-de-tu-repositorio.git](https://github.com/tu-usuario/nombre-de-tu-repositorio.git)
```

*(Reemplaza `tu-usuario` y `nombre-de-tu-repositorio` con tus datos.)*

## 🤝 Soporte

Para problemas, preguntas o ayuda:

  * **Abre un `Issue`** en este repositorio de GitHub.
  * **Contáctanos:** [tu-correo-electronico@example.com](mailto:tu-correo-electronico@example.com) o [https://bauticstudios.com](https://www.google.com/search?q=https://bauticstudios.com).

<!-- end list -->

```
```
