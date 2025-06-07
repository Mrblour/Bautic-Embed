# 🚀 Discord Embed Creator - Bautic Studios

Este es un **Discord Embed Creator** moderno y con estilo de dashboard, desarrollado con **Flask (Python)** en el backend y **HTML, CSS (con Glassmorphism y Neumorphism sutil)** y **JavaScript** en el frontend. Permite a los usuarios crear y enviar embeds de Discord personalizados a través de webhooks de manera fácil e intuitiva.

## ✨ Características Principales

* **Diseño Moderno y Estético:**
    * Interfaz de usuario inspirada en dashboards modernos y elegantes.
    * Implementación de **Glassmorphism** en las tarjetas de sección para un efecto de desenfoque y semi-transparencia.
    * Elementos con **Neumorphism sutil** y sombras suaves para dar profundidad.
    * Paleta de colores oscura con acentos azules vibrantes, similar a las UIs de criptomonedas o aplicaciones financieras.
    * Contenedores principales y campos de entrada con fondo oscuro para un contraste visual atractivo.
    * Botones principales de color oscuro con efecto de hover azul vibrante.
* **Creación de Embeds Dinámica:** Permite crear embeds de Discord con todas las opciones principales:
    * Autor (nombre, URL, icono)
    * Cuerpo (título, descripción, URL para el título, color)
    * Campos (nombre, valor, inline - con la capacidad de añadir múltiples campos dinámicamente)
    * Imágenes (imagen principal, thumbnail)
    * Pie de página (texto, icono)
    * Timestamp
* **Interfaz Intuitiva:** Campos claros y un layout bien organizado para facilitar la creación de embeds complejos.
* **Envío de Webhooks:** Envía los embeds creados a cualquier URL de webhook de Discord.
* **Bautic Studios Branding:** Integración del logo y nombre "Bautic Studios" en la barra superior.
* **Funcionalidades "Próximamente":** Enlaces "Historial" y "Ajustes" con un mensaje de "Próximamente" (extensible para futuras características).

## 🖥️ Tecnologías Utilizadas

* **Backend:** Python 3 con Flask
* **Frontend:**
    * HTML5
    * CSS3 (con variables CSS para fácil personalización, Glassmorphism y Neumorphism)
    * JavaScript (Vanilla JS para la interactividad del formulario)
* **Manejo de Peticiones HTTP:** `requests` (Python)

## ⚙️ Instalación y Uso

Sigue estos pasos para poner en marcha el Discord Embed Creator en tu máquina local.

### Prerrequisitos

* Python 3.x instalado.
* `pip` (gestor de paquetes de Python) instalado.

### Pasos

1.  **Clona el Repositorio:**
    ```bash
    git clone [https://github.com/tu_usuario/tu_repositorio.git](https://github.com/tu_usuario/tu_repositorio.git)
    cd tu_repositorio
    ```
    *(Reemplaza `tu_usuario/tu_repositorio.git` con la URL real de tu repositorio en GitHub)*

2.  **Crea un Entorno Virtual (Recomendado):**
    ```bash
    python -m venv venv
    ```
    * **En Windows:**
        ```bash
        .\venv\Scripts\activate
        ```
    * **En macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```

3.  **Instala las Dependencias de Python:**
    ```bash
    pip install Flask requests
    ```

4.  **Configura tu Logo (Opcional):**
    * Asegúrate de tener una carpeta `static/images/` dentro de tu proyecto.
    * Coloca tu archivo de logo (e.g., `your_logo.png`) en esta carpeta.
    * Si el nombre de tu archivo de logo es diferente, edita `templates/index.html` y actualiza la ruta en la etiqueta `<img>` dentro de la sección `.logo-section`:
        ```html
        <img src="{{ url_for('static', filename='images/nombre_de_tu_logo.png') }}" alt="Bautic Studios Logo">
        ```

5.  **Ejecuta la Aplicación Flask:**
    ```bash
    python app.py
    ```

6.  **Accede a la Aplicación:**
    Abre tu navegador web y ve a `http://127.0.0.1:5000/`.

## 🚀 Cómo Usar el Embed Creator

1.  **Obtén la URL de tu Webhook de Discord:**
    * En Discord, ve a la configuración de un canal de texto (o servidor).
    * Ve a "Integraciones" -> "Webhooks" -> "Crear Webhook".
    * Copia la URL del webhook que se genera.
2.  **Pega la URL del Webhook:** En la interfaz de la aplicación, pega la URL del webhook en el campo "URL del Webhook de Discord".
3.  **Rellena los Campos del Embed:** Utiliza las diferentes secciones (Author, Body, Fields, Images, Footer, Timestamp) para personalizar tu embed.
    * **"Add Field"**: Haz clic en este botón para añadir campos personalizados al embed. Puedes añadir tantos como necesites.
    * **"Inline"**: Marca esta casilla en los campos para que aparezcan uno al lado del otro (si hay espacio).
4.  **Envía el Embed:** Haz clic en el botón **"Send Embed"** en la barra superior.
5.  **Verifica el Mensaje:** La aplicación te mostrará un mensaje de éxito o error. Si hay un error, revisa la consola de tu navegador (F12) y la terminal donde se ejecuta Flask para obtener más detalles.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, siéntete libre de:

1.  Hacer un fork del repositorio.
2.  Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realizar tus cambios.
4.  Realizar commit de tus cambios (`git commit -m 'feat: Añadir nueva funcionalidad X'`).
5.  Push a tu rama (`git push origin feature/nueva-funcionalidad`).
6.  Abrir un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles. *(Si no tienes un archivo LICENSE, considera añadir uno.)*

---
